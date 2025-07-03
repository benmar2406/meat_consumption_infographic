import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './ProductionEuropeChart.css';
import meatProductionDataEurope from '../../../data/production_western_europe.json';

export default function ProductionWorldWideChart({ t }) {

  const chartRef = useRef(null);

  useEffect(() => {
    const parentDiv = chartRef.current;

    const svg = d3.select(parentDiv).selectAll('svg').data([null])
      .join('svg')
      .attr("class", "chart-dark-bg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", "0 0 800 600")
      .attr("preserveAspectRatio", "xMinYMin meet");

      const margin = { top: 20, right: 30, bottom: 30, left: 40 };
      const innerWidth = 800 - margin.left - margin.right;  
      const innerHeight = 600 - margin.top - margin.bottom;  

      const x = d3.scaleLinear()
        .domain(d3.extent(meatProductionDataEurope, d => d.Year))
        .range([margin.left, innerWidth]);

      const y = d3.scaleLinear()
        .domain([0, d3.max(meatProductionDataEurope, d => d['Total Meat production (tonnes)'])])
        .range([innerHeight, margin.top]);

 
      const area = d3.area()
        .x(d => x(d.Year))
        .y0(innerHeight)
        .y1(d => y(d['Total Meat production (tonnes)']));
          
          const defs = svg.append("defs");
      
          const gradient = defs.append("linearGradient")
            .attr("id", "areaGradient")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "0%")
            .attr("y2", "100%");
      
          gradient.append("stop")
            .attr("offset", "20%")
            .attr("stop-color", "#ff6347") // top: tomato red
            .attr("stop-opacity", 0.8);
      
          gradient.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", "#352f36") // bottom: background color (or dark gray)
            .attr("stop-opacity", 0.1);
      

      svg.append("text")
        .attr("x", 400) 
        .attr("y", margin.top)
        .attr("text-anchor", "middle")
        .attr("class", "chart-dark-bg")
        .text(t('developmentCharts.chartTitle2'));

      svg.append("path")
        .datum(meatProductionDataEurope)
        .attr("fill", "url(#areaGradient)")
        .attr("stroke", "none")
        .attr("stroke-width", 0)
        .attr("d", area)

      svg.append("g")
        .attr("transform", `translate(0,${innerHeight})`)
        .call(d3.axisBottom(x).ticks(10).tickFormat(d3.format("d")));

      svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).tickFormat(d3.format(".2s")));
    })


  return (
    <div 
      ref={chartRef} 
      className="production-world-wide-chart"
      aria-hidden="true" 
    >
    </div>
  );
}
