import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion'
import SectionListElement from './SectionListElement/SectionListElement'
import SectionDot from './SectionDot/SectionDot';

const SectionList = ({ sectionsToNavigate, navIsOpen }) => {  
    
    const [clickedIndex, setClickedIndex] = useState(null)

    sectionsToNavigate = [
        {title: 'Environmental Impacts', link: 'environmental-impacts'},
        {title: 'Impact on soil', link: 'soil-impact'},
        {title: 'Impacts on water quality', link: 'water-pollution'},
        {title: 'Production: historical developement', link: 'development-production'},   
        {title: 'Where is meat consumed?', link: 'comparison-rich-poor-countries'},
        {title: 'Ressources: 1kg', link: 'ressources-intro'},
        {title: 'Ressource: water', link: 'water-ressources'},
        {title: 'Ressource: food', link: 'food-ressources'},
        {title: 'Sources', link: '/sources'},
    ]

    const controls = useAnimation();

    const transitionSettings = {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 1
    };

    useEffect(() => {
        if (navIsOpen) {
            controls.start({
                display: 'block',
                opacity: 1,
                height: 1,
                transition: transitionSettings
            })
        } else {
            controls.start({
                opacity: 0,
                height: 0,
                transition: transitionSettings,
                display: 'none'
            })
        }
    }, [navIsOpen])


    const handleIndexClick = (index) => {
        setClickedIndex(index)
    }


    return(
        <motion.div 
            className='section-list-container'
            id='section-list'
            initial={{ opacity: 0, height: 0, display: 'none' }}
            animate={controls}
            role='presentation'
        >
            
            <div className='nav-line'>
                <div className="start-dot"></div>
                <div className="end-dot"></div>

                {sectionsToNavigate.map((section, index) => {
                    return(
                        <SectionDot index={index} key={index} />
                    )
                })}
                
            </div>
            {sectionsToNavigate.map((section, index) => {

                return(
                    <SectionListElement 
                        index={index}
                        key={index}
                        title={section.title}
                        link={section.link}
                        clickedIndex={clickedIndex}
                        onLinkClick={handleIndexClick}
                    />)
            })}
        </motion.div>
    )
}

export default SectionList;

