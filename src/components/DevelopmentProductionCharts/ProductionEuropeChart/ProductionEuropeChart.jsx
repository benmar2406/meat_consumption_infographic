import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './ProductionEuropeChart.css';
import meatProductionDataEurope from '../../../data/production_western_europe.json';

export default function ProductionWorldWideChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const parentDiv = chartRef.current;

    const svg = d3.select(parentDiv).selectAll('svg').data([null])
      .join('svg')
      .attr("class", "chart-dark-bg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", "0 0 800 400")
      .attr("preserveAspectRatio", "xMinYMin meet");

    function redraw() {
      // Get the dimensions of the parent element
      const width = parentDiv.clientWidth;
      const height = parentDiv.clientHeight;

      const margin = { top: 20, right: 30, bottom: 30, left: 40 };
      const innerWidth = 800 - margin.left - margin.right;  // Based on viewBox
      const innerHeight = 400 - margin.top - margin.bottom;  // Based on viewBox

      svg.selectAll("*").remove(); // Clear previous content

      const x = d3.scaleLinear()
        .domain(d3.extent(meatProductionDataEurope, d => d.Year))
        .range([margin.left, innerWidth]);

      const y = d3.scaleLinear()
        .domain([0, d3.max(meatProductionDataEurope, d => d['Total Meat production (tonnes)'])])
        .range([innerHeight, margin.top]);

      const line = d3.line()
        .x(d => x(d.Year))
        .y(d => y(d['Total Meat production (tonnes)']));

      svg.append("text")
        .attr("x", 400) 
        .attr("y", margin.top)
        .attr("text-anchor", "middle")
        .attr("class", "chart-dark-bg")
        .text("Werstern Europe: Meat Production Over Time (tonnes)");

      svg.append("path")
        .datum(meatProductionDataEurope)
        .attr("fill", "none")
        .attr("stroke", "#ff6347")
        .attr("stroke-width", 4)
        .attr("d", line);

      svg.append("g")
        .attr("transform", `translate(0,${innerHeight})`)
        .call(d3.axisBottom(x).ticks(10).tickFormat(d3.format("d")));

      svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).tickFormat(d3.format(".2s")));  // Adjusted formatting
    }

    // Initial draw
    redraw();

    // Redraw on window resize
    window.addEventListener('resize', redraw);

    return () => {
      window.removeEventListener('resize', redraw);
    };
  }, []);

  return (
    <div ref={chartRef} className="production-world-wide-chart">
    </div>
  );
}
