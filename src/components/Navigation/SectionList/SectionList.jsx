import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'

const SectionList = ({ sectionsToNavigate, navIsOpen }) => {

    const controls = useAnimation();

    useEffect(() => {
        if (navIsOpen) {
            controls.start({
                scale: 1,
                opacity: 1,
                transition: {
                    type: 'spring',
                    stiffness: 600,
                    damping: 20 
        }})
        } 
    }, [navIsOpen])

    return(
        <motion.div 
            className='section-list-container'
            initial={{ opacity: 0, scale: 0 }}
            animate={controls}
        >
            <div className='nav-line'></div>
        </motion.div>
    )
}

export default SectionList;

