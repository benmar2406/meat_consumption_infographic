import React from 'react';
import './ConsumptionForm.css';

import MeatType from './MeatType/MeatType';

const ConsumptionForm = ({ onConsumptionChange, values, t }) => {
  
  const meatTypes = [
    { name: 'beef', translation: t('types.beef') },
    { name: 'pig', translation: t('types.pig') },
    { name: 'chicken', translation: t('types.chicken') }
  ];

  return (

        <form className='consumption-form'>
            <h3>{t('personalConsumption.subTitleForm')}</h3>
            <div className='input-container'>
                {meatTypes.map((meatType, index) => (
                <MeatType 
                  key={index} 
                  meatType={meatType}
                  onConsumptionChange={onConsumptionChange} 
                  value={values[meatType.name]}
                  onValueChange={(newValue) => onConsumptionChange(meatType.name, newValue)}
                  />
                ))}
            </div>
        </form>
  );
};

export default ConsumptionForm;
