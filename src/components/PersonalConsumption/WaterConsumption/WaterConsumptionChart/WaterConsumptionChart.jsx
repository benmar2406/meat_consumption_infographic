import React from 'react';
import BathtubIconContainer from '../../../BathtubIconContainer/BathtubIconContainer';
import './WaterConsumptionChart.css'


const WaterConsumptionChart = ({ numberOfBathtubs, ltrsUsed, t, numberOfBathtubsDisplay }) => {

    return(
        <div 
            className='food-chart-container' 
        >
            <div 
                className='personal-water-used'
                aria-hidden="true"
                >
                <p className='amount-litres-info'>{ltrsUsed} {t('waterConsumption.ltrs')}</p>
                <p className='number-of-bathtubs'>{numberOfBathtubsDisplay} {t('waterConsumption.bathtubs')}</p>
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