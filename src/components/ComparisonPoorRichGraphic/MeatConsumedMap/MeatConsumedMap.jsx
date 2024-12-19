import * as d3 from "d3";
import { useEffect, useRef } from "react";

export default function WorldMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    const width = 960;
    const height = 500;

    // Clear the container
    d3.select(mapRef.current).selectAll("*").remove();

    // Set up the SVG element
    const svg = d3.select(mapRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background", "#e0e0e0"); // Light gray background for contrast

    // Load GeoJSON and scale the projection
    d3.json("/world.geojson").then(geoData => {
      console.log("GeoJSON Loaded:", geoData);

      // Get bounding box of the GeoJSON
      const bounds = d3.geoBounds(geoData);
      console.log("Bounding Box:", bounds);

      // Set up projection with larger scale
      const projection = d3.geoMercator()
        .fitExtent([[20, 20], [width - 20, height - 20]], geoData);

      const pathGenerator = d3.geoPath().projection(projection);

      // Debug: Log each path to confirm rendering
      svg.selectAll("path")
        .data(geoData.features)
        .join("path")
        .attr("d", d => {
          const path = pathGenerator(d);
          console.log("Generated Path:", path);
          return path;
        })
        .attr("fill", "lightblue")
        .attr("stroke", "black")
        .attr("stroke-width", "1px");

      // Add debugging center circle
      svg.append("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", 5)
        .attr("fill", "red");
    })
    .catch(error => {
      console.error("Error loading GeoJSON:", error);
    });
  }, []);

  return (
    <div ref={mapRef} style={{ width: "960px", height: "500px" }}></div>
  );
}
