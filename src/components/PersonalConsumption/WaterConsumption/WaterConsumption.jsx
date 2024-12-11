import React from 'react';
import WaterConsumptionChart from './WaterConsumptionChart/WaterConsumptionChart';

const WaterConsumption = ({ ltrsUsed, numberOfBathtubs, t }) => {
    
    
    return (
        <>
            <div className='water-consumed-container'>
                <h3>{t('personalConsumption.subTitleWater')}</h3>
                <WaterConsumptionChart 
                    ltrsUsed={ltrsUsed} 
                    numberOfBathtubs={numberOfBathtubs} 
                    t={t}
                />
            </div>
        </>    
            
    );
    };

export default WaterConsumption;