import { useRef, useMemo } from 'react';
import * as d3 from 'd3';
import './ProductionEuropeChart.css';
import meatProductionDataEurope from '../../../data/production_western_europe.json';
import { useWidth } from '../../../hooks/useResizeObserver';

export default function ProductionEuropeChart({ t }) {
  const containerRef = useRef(null);
  const width = useWidth(containerRef, 800); // dynamic width (container-driven)
  const height = 600;                        // fixed height (adjust if you want)

  // margins & inner box
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const innerWidth  = Math.max(0, width - margin.left - margin.right);
  const innerHeight = height - margin.top - margin.bottom;

  // data (ensure numeric + sorted)
  const data = useMemo(() => {
    return meatProductionDataEurope
      .map(d => ({
        year: +d.Year,
        total: +d['Total Meat production (tonnes)'],
      }))
      .sort((a, b) => a.year - b.year);
  }, []);

  // scales (linear year like your original; switch to scaleTime if you prefer)
  const xScale = useMemo(() => {
    if (!innerWidth) return null;
    return d3.scaleLinear()
      .domain(d3.extent(data, d => d.year))
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

  // ticks
  const numberTicksX = useMemo(() => {
    if (!xScale) return 0;
    return Math.max(2, Math.min(12, Math.round(innerWidth / 80)));
  }, [xScale, innerWidth]);

  const xTicks = useMemo(() => (xScale ? xScale.ticks(numberTicksX) : []), [xScale, numberTicksX]);
  const yTicks = useMemo(() => (yScale ? yScale.ticks(5) : []), [yScale]);

  const fmtYear = d3.format('d');
  const fmtY = d3.format('.2s');

  // area path
  const areaPath = useMemo(() => {
    if (!xScale || !yScale) return '';
    const area = d3.area()
      .x(d => xScale(d.year))
      .y0(yScale(0))
      .y1(d => yScale(d.total))
      .curve(d3.curveBasis);
    return area(data) || '';
  }, [data, xScale, yScale]);

  return (
    <div ref={containerRef} className="production-world-wide-chart" aria-hidden="true">
      <svg width={width} height={height} className="chart-dark-bg" preserveAspectRatio="none">
        {/* Gradient */}
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="20%" stopColor="#ff6347" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#352f36" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Title */}
        <text
          x={width / 2}
          y={margin.top}
          textAnchor="middle"
          className="chart-dark-bg"
        >
          {t('developmentCharts.chartTitle2')}
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
            {xTicks.map(tk => {
              const x = xScale(tk);
              return (
                <g key={tk} transform={`translate(${x},0)`}>
                  <line y2="6" stroke="currentColor" />
                  <text dy="1.2em" textAnchor="middle" fontSize="10">
                    {fmtYear(tk)}
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
            {yTicks.map(tk => {
              const y = yScale(tk);
              return (
                <g key={tk} transform={`translate(0,${y})`}>
                  <line x2="-6" stroke="currentColor" />
                  <text x="-9" dy="0.32em" textAnchor="end" fontSize="10">
                    {fmtY(tk)}
                  </text>
                  <line x1={0} x2={innerWidth} stroke="currentColor" strokeOpacity="0.1" />
                </g>
              );
            })}
          </g>
        )}

        {/* Baseline */}
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

        {/* Area */}
        <path d={areaPath} fill="url(#areaGradient)" stroke="none" />
      </svg>
    </div>
  );
}
