import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import SectionListElement from './SectionListElement/SectionListElement';
import SectionDot from './SectionDot/SectionDot';
import { useTranslation } from 'react-i18next';

const SectionList = ({ sectionsToNavigate, navIsOpen }) => {
    const { t } = useTranslation();
    const [clickedIndex, setClickedIndex] = useState(null);

    const sections = [
        { title: t('navigation.title1'), link: 'environmental-impacts' },
        { title: t('navigation.title2'), link: 'soil-impact' },
        { title: t('navigation.title3'), link: 'water-pollution' },
        { title: t('navigation.title4'), link: 'development-production' },
        { title: t('navigation.title5'), link: 'comparison-rich-poor-countries' },
        { title: t('navigation.title6'), link: 'ressources-intro' },
        { title: t('navigation.title7'), link: 'water-ressources' },
        { title: t('navigation.title8'), link: 'food-ressources' },
        { title: t('navigation.title9'), link: 'personal-consumption-dashboard' },
        { title: t('navigation.title10'), link: '/sources' },
    ];

    const controls = useAnimation();
    const transitionSettings = {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 1,
    };

    useEffect(() => {
        if (navIsOpen) {
            controls.start({
                display: 'block',
                opacity: 1,
                height: 'auto',
                transition: transitionSettings,
            });
        } else {
            controls.start({
                opacity: 0,
                height: 0,
                transition: transitionSettings,
                display: 'none',
            });
        }
    }, [navIsOpen, controls]);

    const handleIndexClick = (index) => {
        console.log('Clicked index:', index);
        setClickedIndex(index);
    };

    const handleKeyDown = (event, index) => {
        if (event.key === 'Enter' || event.key === ' ') {
            setClickedIndex(index);
            event.currentTarget.click();
        }
    };

    return (
        <motion.div
            className="section-list-container"
            id="section-list"
            initial={{ opacity: 0, height: 0, display: 'none' }}
            animate={controls}
            role="list"
            aria-label={t('navigation.ariaLabel')}
        >
            <div className="nav-line">
                <div className="start-dot"></div>
                <div className="end-dot"></div>
                {sections.map((section, index) => (
                    <SectionDot index={index} key={index} />
                ))}
            </div>
            {sections.map((section, index) => (
                <SectionListElement
                    index={index}
                    key={index}
                    title={section.title}
                    link={section.link}
                    clickedIndex={clickedIndex}
                    onLinkClick={handleIndexClick}
                    onKeyDown={handleKeyDown}
                    tabIndex="0"
                />
            ))}
        </motion.div>
    );
};

export default SectionList;
