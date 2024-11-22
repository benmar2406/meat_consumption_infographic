import React from 'react';
import { motion } from 'framer-motion'
import './CarContainer.css'
import carIcon from '../../../assets/img/icons/car.png'

const CarContainer = () => {

    return(
        <div className='car-chart-container'>
            <div className='car-distance-container'>
                <motion.div 
                    className='car-distance'
                    initial={{width: '0', opacity: 0}}
                    animate={{width: '100%', opacity: 1}}
                    transition={{ 
                        width: { duration: 1, ease: "linear" },
                        opacity: { duration: 1, ease: "easeIn" } }}
                    >
                 <span>212km</span>
                </motion.div>
                <div className='car-container'>
                    <img src={carIcon} />
                </div>
            </div>
        </div>
    )
}
export default CarContainer; 