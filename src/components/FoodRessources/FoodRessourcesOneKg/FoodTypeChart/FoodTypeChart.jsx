import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import CornIconContainer from '../../../CornIconContainer/CornIconContainer';
import './FoodTypeChart.css';

const FoodTypeChart = forwardRef(({ ressource }, ref) => {
    
    const { t, i18n } = useTranslation();
    
    const cornWidth = "27px";
    const cornHeight = "27px";
    const minCornHeight = "20px";
    const minCornWidth = "20px";
    const maxCornHeight = "40px";
    const maxCornWidth = "40px";

    const cornIconProps = { cornWidth, cornHeight, minCornHeight, minCornWidth, maxCornHeight, maxCornWidth };

    return (
        <div
            className="food-consumed-chart-container"
            aria-labelledby="chart-title"
            ref={ref} 
        >
            <div className="animal-icon-container">
                <img className="type-animal-icon" src={ressource.AnimalIcon} alt={`${ressource.type}-icon`} />
            </div>
            <p>{t('foodConsumption.chartDescription')}</p>
            <div
                className="grid-food-usage-1kg"
                role="img"
                aria-hidden="true"
            >
                {Array.from({ length: ressource.foodUsageKg }, (_, index) => (
                    <CornIconContainer key={index} {...cornIconProps} />
                ))}
            </div>
            <div className="food-used-for-1kg">
                <h3 className="food-consumed-title">
                    {t('foodConsumption.25Kg')}
                </h3>
            </div>
        </div>
    );
});

export default FoodTypeChart;
