import React from 'react';
import '../ProductionTimeline.css'; 

const YearBlock = ({ year, production }) => {
  const circleCount = Math.floor(production / 10000000);

  return (
    <div className="yearBlock">
      <div className="yearLabel">{year}</div>
      <div className="circlesContainer" aria-hidden="true">
        {[...Array(circleCount)].map((_, index) => (
          <div key={index} className="circle"></div>
        ))}
      </div>
      <div className="productionLabel">
        {production.toLocaleString()} tonnes
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default YearBlock;
