import React from 'react';
import '../MeatProducedChart.css';
import MeatIcon from "/src/assets/img/icons/meat.png"

const MeatGridContainer = ({ containerIndex, itemsPerContainer }) => {
  // Calculate the range of items to display in this container
  const items = Array.from({ length: itemsPerContainer });

  return (
    <div className="meat-grid-container">
      {items.map((_, i) => (
        <div key={i} className="meat-grid-item">
          <img src={MeatIcon} alt="Meat Icon" className="meat-icon" />
        </div>
      ))}
    </div>
  );
};

export default MeatGridContainer;
