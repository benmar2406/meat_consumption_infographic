import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './Conclusion.css';
import useAnimateTitleOnView from '../../hooks/useAnimateTitleOnView';

const FoodRessourcesConclusion1 = ({ conclusionText }) => {

    const inViewRef = useRef(null);

    const initial = { opacity: 0, scale: 0.8, x: "-300px" };

    const { inViewControls } = useAnimateTitleOnView(inViewRef);

    return (
        <section className='conclusions-headline-section'>
            <div className='conclusions-headline-container'>  
                <motion.p 
                    className='conclusion-headline'
                    initial={initial}   
                    animate={inViewControls}   
                    style={{ transformOrigin: 'center' }}
                >{conclusionText}
                </motion.p>
                <div className='placeholder' ref={inViewRef}></div>
            </div>
        </section>
    );
};

export default FoodRessourcesConclusion1;
