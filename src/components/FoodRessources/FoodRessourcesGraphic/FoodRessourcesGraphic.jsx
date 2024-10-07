import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import '../FoodRessources.css';
import FoodIconContainer from './FoodIconContainer/FoodIconContainer';

const FoodRessourcesGraphic = ({ index, name, numberOfIcons, displayWhen, tonnes, displayMeatWhen, usedForMeat, percentageForMeat }) => {

    const ref = useRef();
    const controls = useAnimation();

    useEffect(() => {
        if (displayWhen) {
            controls.start({
                scale: 1,
                opacity: 1,
                transition: {
                    type: 'spring',
                    stiffness: 600,
                    damping: 20,
                    delay: 0.3 * index 
                }
            });
        }
    }, [displayWhen, index, controls]); 

    return (
        <motion.div 
            className='food-container'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            aria-label={`In 2022 ${tonnes} tonnes of ${name} were produced. ${percentageForMeat} percent were consumed through livestock breeding`}
        >
            <p className="food-ressources-title" aria-hidden="true">{name}</p>
            <div 
                className='food-icon-grid'
                ref={ref}
                aria-hidden="true"
            >
            {Array.from({ length: numberOfIcons }, (_, index) => {

                const meatColor = displayMeatWhen && index < usedForMeat;

                return (
                    <FoodIconContainer 
                        key={index}
                        wheatWidth="30px"
                        wheatHeight="30px"
                        minWheatHeight="10px"
                        minWheatWidth="10px"
                        maxWheatHeight="50px"
                        maxWheatWidth="50px"
                        altText={`40 million tonnes of ${name}`}
                        name={name}
                        meatColor={meatColor}
                    />
                );
                })}
            </div>
            <p className='food-ressources-text' aria-hidden="true"> {tonnes} tonnes produced worldwide</p>
        </motion.div>
    );
};

export default FoodRessourcesGraphic;
