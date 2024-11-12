import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useAnimateOnView from '../../../hooks/useAnimateOnView';
import BathtubIconContainer from '../../../BathtubIconContainer/BathtubIconContainer';
import './FoodTypeChart.css'


const FoodTypeChart = ({ food }) => {

    const bathtubWidth = '30px'
    const bathtubHeight = '30px'
    const minbathtubHeight = '30px'
    const minbathtubWidth = '30px'
    const maxdbathtubHeight = '80px'
    const maxbathtubWidth  = '80px'
    const bathtubAltText = 'one filled bathtub'

    const bathtubProps = { bathtubWidth, bathtubHeight, minbathtubHeight, minbathtubWidth, maxdbathtubHeight, maxbathtubWidth, bathtubAltText };

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
            {Array.from({ length: food.numberOfBathtubs }, (_ ,index) => {
                return(
                    <BathtubIconContainer 
                        key={index}
                        alt={bathtubAltText}
                        aria-hidden="true"
                    />
                )
            })}
            </div>
            <div 
                className='water-used-for-1kg'
                aria-hidden="true"
                >
                <h3 className='food-type-title'>{food.numberOfBathtubs} bathtubs</h3>
                <p>{food.waterUsage} ltrs</p>
            </div>
        </motion.div>
    )
}

export default FoodTypeChart;