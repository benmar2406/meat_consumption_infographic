import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import '../FoodRessources.css';
import FoodIconContainer from './FoodIconContainer/FoodIconContainer';

const FoodRessourcesGraphic = ({ index, name, numberOfIcons, displayWhen, tonnes, displayMeatWhen, usedForMeat }) => {

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
        >
            <p className="food-ressources-title">{name}</p>
            <div 
                className='food-icon-grid'
                ref={ref}
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
                        altText={name}
                        name={name}
                        meatColor={meatColor}
                    />
                );
                })}
            </div>
            <p className='food-ressources-text'> {tonnes} tonnes produced worldwide</p>
        </motion.div>
    );
};

export default FoodRessourcesGraphic;
