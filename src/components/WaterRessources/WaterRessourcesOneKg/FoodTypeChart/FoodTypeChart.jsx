import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
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
    const isInView = useInView(gridRef, { once: true }); 
    const controls = useAnimation();


    useEffect(() => {
        if (isInView) {
            controls.start({
                scale: 1,
                opacity: 1,
                transition: {
                    type: 'spring',
                    stiffness: 600,
                    damping: 20,
                    delay: 0.3 * chartIndex 
                }
            })
        }
    }, [isInView, controls])


    return(
        <motion.div 
            className='food-chart-container' 
            aria-labelledby="chart-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
        >
            <div 
                className={food.cssSelector}
            >
                <img className='type-water-ressources-icon' src={food.icon} alt={`${food.type}-icon`}/>
            </div>
            <h2 className='food-type-water-usage'>1kg of {food.type}</h2>
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
                    />
                )
            })}
            </div>
            <div className='water-used-for-1kg'>
                <h3 className='food-type-title' aria-description={`Amount of water required for producing 1kg of ${food.type}: `}>{food.waterUsage} ltrs</h3>
            </div>
        </motion.div>
    )
}

export default FoodTypeChart;