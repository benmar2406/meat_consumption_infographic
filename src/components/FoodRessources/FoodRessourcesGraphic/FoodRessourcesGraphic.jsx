import React, { useRef } from 'react';
import { motion } from "framer-motion";
import '../FoodRessources.css';
import FoodIconContainer from './FoodIconContainer/FoodIconContainer';
import useAnimateOnView from '../../hooks/useAnimateOnView';

const FoodRessourcesGraphic = ({ name, numberOfIcons, tonnes, displayMeatWhen, usedForMeat, percentageForMeat }) => {

    const ref = useRef();
    
    const { inViewControls, initial } = useAnimateOnView(
        ref
      )

    return (
        <motion.div 
            className='food-container'
            initial={initial}
            animate={inViewControls}
            aria-details={`In 2022 ${tonnes} tonnes of ${name} were produced worldwide. ${percentageForMeat} percent were consumed through livestock breeding`}
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
