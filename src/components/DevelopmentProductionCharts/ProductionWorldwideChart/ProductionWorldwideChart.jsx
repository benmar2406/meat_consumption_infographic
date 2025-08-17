import { useMemo, useRef, useState, useLayoutEffect } from 'react';
import * as d3 from 'd3';
import './ProductionWorldwideChart.css';
import meatProductionDataRaw from '../../../data/production_global.json';
import { useWidth } from '../../../hooks/useResizeObserver';

export default function ProductionWorldwideChart({ t }) {
  
  const containerRef = useRef(null);
  const width = useWidth(containerRef, 600); 

  // fixed height
  const height = 600;

  // data 
  const data = useMemo(() => {
    const cleaned = meatProductionDataRaw.map(d => ({
      year: +d.Year,
      total: +d['Total Meat production (tonnes)'],
    }));
    return cleaned.sort((a, b) => a.year - b.year);
  }, []);

  // layout 
  const margin = { top: 40, right: 20, bottom: 40, left: 60 };
  const innerWidth = Math.max(0, (width || 0) - margin.left - margin.right);
  const innerHeight = height - margin.top - margin.bottom;

  // scales 
  const xScale = useMemo(() => {
    if (!innerWidth) return null;
    return d3.scaleTime()
      .domain(d3.extent(data, d => new Date(d.year, 0, 1)))
      .range([margin.left, margin.left + innerWidth]);
  }, [data, innerWidth, margin.left]);

  const yScale = useMemo(() => {
    if (!innerWidth) return null;
    const maxY = d3.max(data, d => d.total) || 0;
    return d3.scaleLinear()
      .domain([0, maxY])
      .nice()
      .range([margin.top + innerHeight, margin.top]);
  }, [data, innerHeight, innerWidth, margin.top]);

  const numberTicksX = useMemo(() => {
    if (!xScale) return 0;

    return Math.max(2, Math.min(12, Math.round(innerWidth / 80)));
  }, [xScale, innerWidth]);

  const numberTicksY = 5;
  const xTicks = useMemo(() => (xScale ? xScale.ticks(numberTicksX) : []), [xScale, numberTicksX]);
  const yTicks = useMemo(() => (yScale ? yScale.ticks(numberTicksY) : []), [yScale]);

  const fmtYear = d3.timeFormat('%Y');
  const fmtY = d3.format('.2s');

  // area path
  const areaPath = useMemo(() => {
    if (!xScale || !yScale) return '';
    const area = d3.area()
      .x(d => xScale(new Date(d.year, 0, 1)))
      .y0(yScale(0))
      .y1(d => yScale(d.total))
      .curve(d3.curveBasis);
    return area(data) || '';
  }, [data, xScale, yScale]);

  return (
    <div
      ref={containerRef}
      className="production-world-wide-chart"
      aria-hidden="true"
    >
      <svg width={width || 0} height={height} className="chart-dark-bg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff6347" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#352f36" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* title */}
        <text x={(width || 0) / 2} y={margin.top - 12} textAnchor="middle" className="chart-dark-bg">
          {t('developmentCharts.chartTitle1')}
        </text>

        {/* X axis */}
        {xScale && (
          <g transform={`translate(0,${margin.top + innerHeight})`}>
            <line
              x1={margin.left}
              x2={margin.left + innerWidth}
              y1={0}
              y2={0}
              stroke="currentColor"
              strokeWidth="1"
            />
            {xTicks.map(tick => {
              const x = xScale(tick);
              return (
                <g key={+tick} transform={`translate(${x},0)`}>
                  <line y2="6" stroke="currentColor" />
                  <text dy="1.2em" textAnchor="middle" fontSize="10">
                    {fmtYear(tick)}
                  </text>
                </g>
              );
            })}
          </g>
        )}

        {/* Y axis */}
        {yScale && (
          <g transform={`translate(${margin.left},0)`}>
            <line
              x1={0}
              x2={0}
              y1={margin.top}
              y2={margin.top + innerHeight}
              stroke="currentColor"
              strokeWidth="1"
            />
            {yTicks.map(tick => {
              const y = yScale(tick);
              return (
                <g key={tick} transform={`translate(0,${y})`}>
                  <line x2="-6" stroke="currentColor" />
                  <text x="-9" dy="0.32em" textAnchor="end" fontSize="10">
                    {fmtY(tick)}
                  </text>
                  <line x1={0} x2={innerWidth} stroke="currentColor" strokeOpacity="0.1" />
                </g>
              );
            })}
          </g>
        )}

        {/* baseline */}
        {yScale && (
          <line
            x1={margin.left}
            x2={margin.left + innerWidth}
            y1={yScale(0)}
            y2={yScale(0)}
            stroke="currentColor"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
        )}

        {/* area */}
        <path d={areaPath} fill="url(#areaGradient)" stroke="none" className="area-fill" />
      </svg>
    </div>
  );
}
