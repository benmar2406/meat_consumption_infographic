
import React from 'react';
import { useTranslation } from 'react-i18next';
import './ChartLegend.css';
import BathtubIconContainer from '../BathtubIconContainer/BathtubIconContainer';

const bathtubWidth = '35%'
    const bathtubHeight = '35%'
    const minbathtubHeight = '30px'
    const minbathtubWidth = '30px'
    const maxdbathtubHeight = '50px'
    const maxbathtubWidth  = '50px'
    const bathtubAltText = 'one filled bathtub'

    const bathtubProps = { bathtubWidth, bathtubHeight, minbathtubHeight, minbathtubWidth, maxdbathtubHeight, maxbathtubWidth, bathtubAltText };


const ChartLegend = () => {

    const { t } = useTranslation();

    return(
        <div className='legend-container'>
            <p>1 </p>
            <BathtubIconContainer
                {...bathtubProps}
            />
            <p> {t('waterConsumption.chartLegend')}</p>
        </div>
    )
}

export default ChartLegend;