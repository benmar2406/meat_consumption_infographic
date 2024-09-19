import React, { useRef } from 'react';
import { useInView, motion } from "framer-motion";
import '../WaterRessources.css'
import WaterIconContainer from '../../WaterIconContainer/WaterIconContainer'

const WaterRessourcesGraphic = ( {displayAgrUsage, displayMeatUsage} ) => {
    const WaterGraphicRef = useRef()
    const isInView = useInView(WaterGraphicRef)
    
    const totalNumberDrops = 350 /* 11.43 billion cubic meters (4,000 ÷ 350 = 11.43).*/ 
    const agriculturalNumberDrops = 245;
    const meatNumberDrops = 100;

    const defaultDropFill = '#0078A0'; 
    const agriculturalDropFill = '#00ADEF'; 
    const meatDropFill = '#FF5733'; 
    const dropWidth = '5%';
    const dropHeight = '5%';
    const mindropHeight = '20px';
    const mindropWidth = '20px';
    const maxdropHeight = '40px';
    const maxdropWidth = '40px';
    const altText = '11.43 billion cubic meters of water'
    const waterDropProps = { dropWidth, dropHeight, mindropHeight, mindropWidth, maxdropHeight, maxdropWidth, altText, defaultDropFill, agriculturalDropFill, meatDropFill };

    return(
        <>
        <motion.div>
            <div 
                className='water-ressources-icon-grid' 
                ref={WaterGraphicRef}
                style={{
                    transform: isInView ? "none" : "translateX(+200px)", 
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                >
                {Array.from({ length: totalNumberDrops }, (_, index) => {
                    
                    let fillColor = defaultDropFill;
                    if (displayAgrUsage && index < agriculturalNumberDrops) {
                        fillColor = agriculturalDropFill;
                    }
                    if (displayMeatUsage && index < meatNumberDrops) {
                        fillColor = meatDropFill;
                    }

                    return(
                    <WaterIconContainer 
                        key={index}
                        {...waterDropProps}
                        dropFill={fillColor}
                    />)
                }
            )}
            </div>
            </motion.div>
        </>
    )

};

export default WaterRessourcesGraphic;