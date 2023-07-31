import * as d3 from "d3";
import React, { useEffect, useRef } from 'react';
import { useLoaderData } from "react-router-dom";

const Map = () => {
  const genres = useLoaderData();
  const ref = useRef();

  useEffect(() => {

    const width = 928;
    const height = 680;
    const genres = [{name: "post rock"}, {name: "math rock"}]
    const genre = {name: "rock", children: genres}

    const root = d3.hierarchy(genres);
    const links = root.links();
    const nodes = root.descendants();

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.name).distance(0).strength(1))
      .force("charge", d3.forceManyBody().strength(-50))
      .force("x", d3.forceX())
      .force("y", d3.forceY());

      const svg = d3.select(ref.current);

      const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line");

    const node = svg.append("g")
      .attr("fill", "#fff")
      .attr("stroke", "#000")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
        .attr("fill", d => d.children ? null : "#000")
        .attr("stroke", d => d.children ? null : "#fff")
        .attr("r", 3.5);

      node.append("title")
        .text(d => d.data.name);

      simulation.on("tick", () => {
          link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

          node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);
        });
      return () => simulation.stop();
    // const svg = d3.select(ref.current)
    //   .attr("width", width)
    //   .attr("height", height)
    //   .attr("viewBox", [-width / 2, -height / 2, width, height])
    //   .attr("style", "max-width: 100%; height: auto;");
    // const svg = d3.select(ref.current);
    // const nodes = svg.selectAll("text")
    //   .data(genres)
    //   .enter()
    //   .append("text")
    //   .attr("x", (d, i) => 100 + i * 100)  // Adjust these to position your text elements
    //   .attr("y", 100)                      // Adjust these to position your text elements
    //   .text(d => d.name)
    //   .attr("fill", "white");
  }, []);

  return (
    <div>
      {/* <svg ref={ref} width={928} height={600} style={{ maxWidth: '100%', height: 'auto' }}>
      <g transform={`translate(${928 / 2}, ${600 / 2})`}></g>
    </svg> */}
      <div className="text-white">
        {genres.map((genre, index) => (
          <div key={index}>{genre.name}</div>  // Assuming 'genre' has a property 'id'
        ))}
      </div>
    </div>
  )
}


export default Map;