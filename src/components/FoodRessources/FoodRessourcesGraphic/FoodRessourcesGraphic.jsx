import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import '../FoodRessources.css';
import FoodIconContainer from './FoodIconContainer/FoodIconContainer';
import useAnimateOnView from '../../../hooks/useAnimateOnView';

const FoodRessourcesGraphic = ({ name, numberOfIcons, tonnes, displayMeatWhen, usedForMeat, percentageForMeat }) => {

    const { t, i18n } = useTranslation();

    const ref = useRef();
    const { inViewControls, initial } = useAnimateOnView(ref)

    return (
        <motion.div 
            className='food-container'
            initial={initial}
            animate={inViewControls}
            aria-description={`In 2022 ${tonnes} tonnes of ${name} were produced worldwide. ${percentageForMeat} percent were consumed through livestock breeding`}
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
                        altText={t('foodConsumption.altFoodIcons') + name}
                        name={name}
                        meatColor={meatColor}
                    />
                );
                })}
            </div>
            <p className='food-ressources-text' aria-hidden="true"> {tonnes + t('foodConsumption.tonnesProduced')}</p>
        </motion.div>
    );
};

export default FoodRessourcesGraphic;
