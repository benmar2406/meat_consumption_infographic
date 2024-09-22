import React, { useRef, useEffect } from 'react';
import { Element } from 'react-scroll';
import { motion, useAnimation, useInView } from 'framer-motion';
import './RessourcesIntro.css';
import MeatIcon from '../../assets/img/icons/meat_large.png';
import SectionButton from '../SectionButton/SectionButton';

const RessourcesIntro = () => {
    const ressourceInfoRef = useRef();
    const buttonRef = useRef(); // Ref for SectionButton
    const containerIsInView = useInView(ressourceInfoRef);
    const buttonIsInView = useInView(buttonRef); // Detect if button is in view
    const controls = useAnimation();
    const listControls = useAnimation();
    const buttonControls = useAnimation();

    // Controls for the container
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
        <Element name="ressources-intro">
            <section className="ressources-intro-container"> 
                <div className="ressources-intro">
                    <div className="ressources-graphic-container">
                        <motion.img
                            src={MeatIcon} 
                            alt="1kg meat icon"
                            className="ressources-intro-graphic"
                            initial={{ opacity: 0, x: -200, rotate: 180 }}
                            animate={controls}
                            ref={ressourceInfoRef} // Attach ref to image container
                        />
                        <motion.h1
                            className="ressources-1kg-title"
                            initial={{ opacity: 0, x: 200 }}
                            animate={controls}
                        >
                            1kg
                        </motion.h1>
                    </div>
                    <motion.h2
                        className="ressources-1kg-sub-title"
                        initial={{ opacity: 0, x: -200 }}
                        animate={controls}
                    >
                        What does it cost?
                    </motion.h2>
                    <motion.ul
                        initial={{ opacity: 0, y: 200 }}
                        animate={listControls}
                    >
                        <ul className="ressources-list">
                            <li className="ressources-list-item">water</li>
                            <li className="ressources-list-item">food</li>
                            <li className="ressources-list-item">land</li>
                            <li className="ressources-list-item">environment</li>
                        </ul>
                    </motion.ul>
                </div>
            </section>
            {/* Motion div around the button to control animation */}
            <motion.div animate={buttonControls} ref={buttonRef}>
                <SectionButton 
                    buttonText="Water" 
                    sectionLink="water-ressources"
                    buttonColor="#a2d3e2" 
                />
            </motion.div>
        </Element>
    );
}

export default RessourcesIntro;
