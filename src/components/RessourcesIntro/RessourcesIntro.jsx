import React, { useRef, useEffect } from 'react';
import { Element } from 'react-scroll';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './RessourcesIntro.css';
import MeatIcon from '../../assets/img/icons/meat_large.png';

const RessourcesIntro = () => {

    const { t, i18n } = useTranslation();

    const ressourceInfoRef = useRef();
    const buttonRef = useRef(); 
    const containerIsInView = useInView(ressourceInfoRef);
    const buttonIsInView = useInView(buttonRef); 
    const controls = useAnimation();
    const listControls = useAnimation();
    const buttonControls = useAnimation();

    useEffect(() => {
        if (containerIsInView) {
            controls.start({
                opacity: 1,
                translateY: 0,
                transition: { duration: 1, ease: 'easeInOut' },
                x: 0,
                rotate: 0
            });
            
            listControls.start({
                opacity: 1,
                translateY: 0,
                transition: { duration: 1, ease: 'easeInOut' },
                y: 0
            });
        }
    }, [containerIsInView, controls, listControls]);

    useEffect(() => {
        if (buttonIsInView) {
            buttonControls.start({
                scale: [1, 1.2, 1.2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                transition: { duration: 2 }
            });
        } else {
            buttonControls.start({
                scale: 1,
                rotate: 0,
                borderRadius: "0%",
                transition: { duration: 0.5 }
            });
        }
    }, [buttonIsInView, buttonControls]);

    return (
        
        <div className="ressources-intro-container"> 
            <Element name="ressources-intro">
                <div className="ressources-intro">
                    <div className="ressources-graphic-container">
                        <motion.img
                            src={MeatIcon} 
                            alt="1kg of meat icon"
                            className="ressources-intro-graphic"
                            initial={{ opacity: 0, x: -200, rotate: 180 }}
                            animate={controls}
                            ref={ressourceInfoRef} 
                        />
                        <motion.h1
                            className="ressources-1kg-title"
                            initial={{ opacity: 0, x: 200 }}
                            animate={controls}
                            aria-hidden="true"
                        >
                            1kg
                        </motion.h1>
                    </div>
                    <motion.h2
                        className="ressources-1kg-sub-title"
                        initial={{ opacity: 0, x: -200 }}
                        animate={controls}
                    >
                        {t('OneKgIntro.subTitle')}
                    </motion.h2>
                </div> 
            </Element>           
        </div>

    );
}

export default RessourcesIntro;
