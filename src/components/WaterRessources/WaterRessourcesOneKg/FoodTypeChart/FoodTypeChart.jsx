import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useAnimateOnView from '../../../hooks/useAnimateOnView';
import WaterIconContainer from '../../../WaterIconContainer/WaterIconContainer';
import './FoodTypeChart.css'


const FoodTypeChart = ({ food, chartIndex }) => {

    const dropWidth = '35%'
    const dropHeight = '35%'
    const mindropHeight = '25px'
    const mindropWidth = '25px'
    const maxdropHeight = '50px'
    const maxdropWidth  = '50px'
    const altText = '1 litre of water'
    const dropFill = '#a2d3e2'

    const waterDropProps = { dropWidth, dropHeight, mindropHeight, mindropWidth, maxdropHeight, maxdropWidth, altText, dropFill };

    const gridRef = useRef();

    const { initial, inViewControls } = useAnimateOnView(gridRef)

    return(
        <motion.div 
            className='food-chart-container' 
            initial={initial}
            animate={inViewControls}
            aria-description={`Producing 1kg of ${food.type} requires ${food.waterUsage} litres of water.`}
        >
            <div 
                className={food.cssSelector} 
            >
                <img className='type-water-ressources-icon' src={food.icon} alt={`${food.type}-icon`}/>
            </div>
            <h2 
                aria-hidden="true"
                className='food-type-water-usage'>1kg of {food.type}
            </h2>
            <div className='grid-water-usage-1kg'
                role="img" 
                aria-hidden="true"
                ref={gridRef}
            >
            {Array.from({ length: food.numberOfDrops }, (_ ,index) => {
                return(
                    <WaterIconContainer 
                        key={index}
                        {...waterDropProps}
                        alt={altText}
                        aria-hidden="true"
                    />
                )
            })}
            </div>
            <div 
                className='water-used-for-1kg'
                aria-hidden="true"
                >
                <h3 className='food-type-title'>{food.waterUsage} ltrs</h3>
            </div>
        </motion.div>
    )
}

export default FoodTypeChart;