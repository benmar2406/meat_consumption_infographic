import React, { useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const SectionListElement = ({ title, link, index, onLinkClick, clickedIndex }) => {

    
    return(
        <div 
            className='section-list-element' 
            style={{
                top: `${90 + (index * 35)}px`,
            }}>
            <Link 
                className='navigation-link'
                to={link}
                spy={true}
                smooth={true}
                duration={700}
                onClick={() => onLinkClick(index)}
            >{title}</Link>
        </div>
    )

}

export default SectionListElement;

