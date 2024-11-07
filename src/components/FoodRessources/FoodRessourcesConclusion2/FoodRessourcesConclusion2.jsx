import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './FoodRessourcesConclusion2.css';
import useAnimateTitleOnView from '../../hooks/useAnimateTitleOnView';

const FoodRessourcesConclusion2 = () => {
    const headline1 = "The resources needed for 1 kg of beef could feed 36 times more people if consumed directly.";
    const headline2 = "Meat production is much less efficient than directly consuming plant-based foods.";

    const inViewRef = useRef(null);

    const initial1 = { opacity: 0, scale: 0.8, x: "-300px" };
    const initial2 = { opacity: 0, scale: 0.8, x: "200px" };

    const headlines = [
        { text: headline1, initial: initial1, delay: 1 },
        { text: headline2, initial: initial2, delay: 2 },
    ];

    const { inViewControls } = useAnimateTitleOnView(inViewRef);

    return (
        <section className='conclusions-headline-section-2'>
            <div className='conclusions-headline-container-2'>  
                {headlines.map((headline, index) => (
                    <motion.h2 
                        className='food-conclusion-headline-2'
                        key={'headline-' + index}
                        initial={headline.initial}   
                        animate={inViewControls}   
                        style={{ transformOrigin: 'center' }}
                    >
                        {headline.text}
                    </motion.h2>
                ))}
                <div className='placeholder' ref={inViewRef}></div>
            </div>
        </section>
    );
};

export default FoodRessourcesConclusion2;
