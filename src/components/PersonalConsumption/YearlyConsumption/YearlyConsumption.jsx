import React from 'react';
import './YearlyConsumption.css'

const YearlyConsumption = ({ yearlyConsumption, difference, t }) => {

    const averageConsumption = 76
  
    return (
        <>
            <div className='meat-consumed-container'>
                <h3>{t('personalConsumption.subTitleYearlyConsumption')}</h3>
                <span className='number-displayed'>{yearlyConsumption}</span><span> kg</span>
                <p className='average-consumed'>{`${t('personalConsumption.youConsume')} ${difference}% ${yearlyConsumption > averageConsumption ? t('personalConsumption.more') : t('personalConsumption.less')} ${t('personalConsumption.average')}`}</p>
            </div>
        </>     
    );
};

export default YearlyConsumption;