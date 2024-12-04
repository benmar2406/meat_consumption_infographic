import React, { forwardRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'
import './CarContainer.css'
import carIcon from '../../../assets/img/icons/car.png'

const CarContainer = forwardRef(({ food, isInView }, ref) => {

    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start({ width: food.kmPercentage, opacity: 1 }); 
        }
    }, [isInView, controls]);


    return(
        <div className='car-chart-container'>
            <div className='car-food-type'><span>{food.name}</span><span className="mobile-version">: {food.carKm}km</span></div>
            <div className='car-distance-container' ref={ref}>
                <motion.div 
                    className='car-distance'
                    initial={{width: '0', opacity: 0}}
                    animate={controls}
                    transition={{ 
                        width: { duration: 1, ease: "linear" },
                        opacity: { duration: 1, ease: "easeIn" } }}
                    >
                 <span className="desktop-version">{food.carKm}km</span>
                </motion.div>
                <div className='car-container'>
                    <img src={carIcon} />
                </div>
            </div>
        </div>
    )
})

export default CarContainer; 