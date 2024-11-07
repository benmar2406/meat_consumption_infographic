import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './FoodRessourcesConclusion2.css';
import useAnimateTitleOnView from '../../hooks/useAnimateTitleOnView';

const FoodRessourcesConclusion2 = () => {
    const headline1 = "The ressources required for 1kg of beef could feed 36 times as much people when consumed directly.";
    const headline2 = "Producing meat is inefficient compared to eating plant-based foods directly.";

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
