import React from 'react';
import BathtubIconContainer from '../../../BathtubIconContainer/BathtubIconContainer';
import './WaterConsumptionChart.css'


const WaterConsumptionChart = ({ numberOfBathtubs, ltrsUsed, t, numberOfBathtubsDisplay }) => {


    return(
        <div 
            className='food-chart-container' 
        >
            <div 
                className='water-used-for-1kg'
                aria-hidden="true"
                >
                <h3 className='food-type-title'>{numberOfBathtubsDisplay} {t('waterConsumption.bathtubs')}</h3>
                <p>{ltrsUsed} {t('waterConsumption.ltrs')}</p>
            </div>

            <div 
                className='grid-water-usage-1kg'
                aria-hidden="true">
                {Array.from({ length: numberOfBathtubs }, (_ ,index) => {
                    return(
                        <BathtubIconContainer 
                            key={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default WaterConsumptionChart;