import React from 'react';
import './MeatType.css';

const MeatType = ({ meatType, onConsumptionChange, value, meatTypeTranslation }) => {
  
  const handleInputChange = (e) => {
    let newValue = e.target.value;
  
    if (newValue === "" || isNaN(newValue)) {
      newValue = 0;
    } else {
      newValue = parseFloat(newValue); 
      if (newValue < 0) newValue = 0;
      if (newValue > 15) newValue = 15;
    }
  
    onConsumptionChange(meatType.name, newValue);
  };
  
  

  return (
    <div className='meat-type-container'>
      <span className='meat-type-title'>{meatTypeTranslation}:</span>
      <div className='meat-type-input-container'>
        
        <input
          className='meat-type-range'
          type='range'
          min='0'
          max='7'
          step='0.1'
          value={value}
          onChange={handleInputChange}
        />
        <input
          className='meat-type-number'
          type='number'
          min='0'
          max='15'
          step='0.1'
          value={value}
          onChange={handleInputChange}
        />
        <span>kg</span>
      </div>
    </div>
  );
};

export default MeatType;
