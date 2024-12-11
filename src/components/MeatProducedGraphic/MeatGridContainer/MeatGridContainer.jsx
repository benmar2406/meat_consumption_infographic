import React from 'react';
import MeatIcon from "/src/assets/img/icons/meat.png"

const MeatGridContainer = ({ itemsPerContainer }) => {
  const iconWidth = '40px';
  const iconHeight = '40px';
  
  const items = Array.from({ length: itemsPerContainer });

  return (
    <div className="meat-grid-container">
      {items.map((_, index) => (
        <div key={index} className="meat-grid-item">
          <img 
            src={MeatIcon} 
            alt="Meat Icon" 
            className="meat-icon" 
            style={{
              width: iconWidth,
              height: iconHeight
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default MeatGridContainer;
