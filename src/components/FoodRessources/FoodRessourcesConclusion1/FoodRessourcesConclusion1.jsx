import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './FoodRessourcesConclusion1.css';
import useAnimateTitleOnView from '../../hooks/useAnimateTitleOnView';

const FoodRessourcesConclusion1 = () => {
    const headline = "Food used for meat production isn’t available for direct human consumption.";

    const inViewRef = useRef(null);

    const initial = { opacity: 0, scale: 0.8, x: "-300px" };

    const { inViewControls } = useAnimateTitleOnView(inViewRef);

    return (
        <section className='conclusions-headline-section'>
            <div className='conclusions-headline-container'>  
                <motion.h2 
                    className='food-conclusion-headline'
                    initial={initial}   
                    animate={inViewControls}   
                    style={{ transformOrigin: 'center' }}
                >{headline}
                </motion.h2>
                <div className='placeholder' ref={inViewRef}></div>
            </div>
        </section>
    );
};

export default FoodRessourcesConclusion1;
