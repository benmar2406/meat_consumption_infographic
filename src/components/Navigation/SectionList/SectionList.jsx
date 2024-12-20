import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion'
import SectionListElement from './SectionListElement/SectionListElement'
import SectionDot from './SectionDot/SectionDot';

import { useTranslation } from 'react-i18next';

const SectionList = ({ sectionsToNavigate, navIsOpen }) => {  

    const { t, i18n } = useTranslation();
    
    const [clickedIndex, setClickedIndex] = useState(null)

    sectionsToNavigate = [
        {title: t('navigation.title1'), link: 'environmental-impacts'},
        {title: t('navigation.title2'), link: 'soil-impact'},
        {title: t('navigation.title3'), link: 'water-pollution'},
        {title: t('navigation.title4'), link: 'development-production'},   
        {title: t('navigation.title5'), link: 'comparison-rich-poor-countries'},
        {title: t('navigation.title6'), link: 'ressources-intro'},
        {title: t('navigation.title7'), link: 'water-ressources'},
        {title: t('navigation.title8'), link: 'food-ressources'},
        {title: t('navigation.title9'), link: 'personal-consumption-dashboard'},
        {title: t('navigation.title10'), link: '/sources'},
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

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onLinkClick(index); 
        }
    };


    return(
        <motion.div 
            className='section-list-container'
            id='section-list'
            initial={{ opacity: 0, height: 0, display: 'none' }}
            animate={controls}
            role='presentation'
            aria-label={t('navigation.ariaLabel')}
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
                        onKeyDown={handleKeyDown}
                    />)
            })}
        </motion.div>
    )
}

export default SectionList;

