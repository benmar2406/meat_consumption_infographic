import React, { useRef } from 'react';
import { useInView, motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import '../WaterRessources.css'
import WaterIconContainer from '../../WaterIconContainer/WaterIconContainer'

const WaterRessourcesGraphic = ( {displayAgrUsage, displayMeatUsage} ) => {

    const { t, i18n } = useTranslation();

    const WaterGraphicRef = useRef()
    const isInView = useInView(WaterGraphicRef)
    
    const totalNumberDrops = 350 /* 11.43 billion cubic meters (4,000 ÷ 350 = 11.43).*/ 
    const agriculturalNumberDrops = 245;
    const meatNumberDrops = 100;

    const defaultDropFill = '#0078A0'; 
    const agriculturalDropFill = '#00ADEF'; 
    const meatDropFill = '#FF5733'; 
    const dropWidth = '100%';
    const dropHeight = '100%';
    const mindropHeight = '20px';
    const mindropWidth = '20px';
    const maxdropHeight = '60px';
    const maxdropWidth = '60px';
    const altText = t('waterConsumption.alt')
    const waterDropProps = { dropWidth, dropHeight, mindropHeight, mindropWidth, maxdropHeight, maxdropWidth, altText, defaultDropFill, agriculturalDropFill, meatDropFill };

    return(
        <>
        <motion.div aria-hidden="true">
            <div 
                className='water-ressources-icon-grid' 
                ref={WaterGraphicRef}
                style={{
                    transform: isInView ? "none" : "translateX(100px)", 
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