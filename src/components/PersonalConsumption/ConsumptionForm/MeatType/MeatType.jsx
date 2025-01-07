import React, { useState } from 'react';
import './MeatType.css';

const MeatType = ({ meatType, onConsumptionChange, value }) => {
  
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    let newValue = e.target.value;
  
    if (newValue === "" || isNaN(newValue) || newValue < 0) {
      setError("Please enter a valid number. Number cannot be negative");
      newValue = 0;
    } else if (newValue > 15) {
      setError("Value cannot exceed 15 kg.");
      newValue = 15;
    } else {
      newValue = parseFloat(newValue); 
      setError("");
    }
    onConsumptionChange(meatType.name, newValue);
  };
  
  
  return (
    <>
      {error && <span className="error-message">{error}</span>}
      <div className='meat-type-container'>
        <span className='meat-type-title'>{meatType.translation}:</span>
        <div className='meat-type-input-container'>
          <input
            className='meat-type-range'
            type='range'
            aria-label={`Enter consumption for ${meatType.translation}`}
            min='0'
            max='7'
            step='0.1'
            value={value}
            onChange={handleInputChange}
          />
          <input
            className='meat-type-number'
            type='number'
            aria-label={`Enter consumption for ${meatType.translation}`}
            min='0'
            max='15'
            step='0.1'
            value={value}
            onChange={handleInputChange}
          />
          <span>kg</span>
        </div>
      </div>
    </>
  );
};

export default MeatType;
