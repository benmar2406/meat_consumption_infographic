import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useAnimateOnView from '../../../../hooks/useAnimateOnView';
import BathtubIconContainer from '../../../BathtubIconContainer/BathtubIconContainer';
import MeatIconContainer from '../../../MeatIconContainer/MeatIconContainer'
import LeafIconContainer from '../../../LeafIconContainer/LeafIconContainer'
import './FoodTypeChart.css'


const FoodTypeChart = ({ food, mobile }) => {

    const { t } = useTranslation();

    const gridRef = useRef();

    const { initial, inViewControls } = useAnimateOnView(gridRef)

    return(
        <motion.div 
            className='food-chart-container' 
            initial={initial}
            animate={inViewControls}
            aria-description={`Producing 1kg of ${food.name} meat requires ${food.waterUsage} litres of water.`}
        >
            <div 
                className={food.cssSelector} 
            >
                <img className='type-water-ressources-icon' src={food.icon} alt={`${food.name}-icon`}/>
            </div>
            <div 
            className='food-type-indicator'
            style={mobile ? {display: "none"} : {display: "flex"}}>
                {food.meat ? <MeatIconContainer/> : <LeafIconContainer />}
                <span 
                    aria-hidden="true"
                    className='food-type-water-usage'
                    >{t('waterConsumption.producing')} {food.name}:
                </span>
            </div>
            <div className='grid-water-usage-1kg'
                role="img" 
                aria-hidden="true"
                ref={gridRef}
            >
                {Array.from({ length: food.numberOfBathtubs }, (_ ,index) => {
                    return(
                        <BathtubIconContainer 
                            key={index}
                            aria-hidden="true"
                        />
                    )
                })}
            </div>
            <div 
                className='water-used-for-1kg'
                aria-hidden="true"
                >
                <h3 className='food-type-title'>{food.numberOfBathtubs} {t('waterConsumption.bathtubs')}</h3>
                <p>{food.waterUsage} {t('waterConsumption.ltrs')}</p>
            </div>
        </motion.div>
    )
}

export default FoodTypeChart;