import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const SectionListElement = ({ title, link, index, onLinkClick }) => {

    const isRouteLink = link.startsWith('/');
    
    return(
        <div 
            className='section-list-element' 
            style={{
                top: `${90 + (index * 35)}px`,
            }}>
            {isRouteLink ? (<a
                    href={link}
                    className='navigation-link'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {title}
                </a>
                ) : (
                <Link 
                    className='navigation-link'
                    to={link}
                    spy={true}
                    smooth={true}
                    duration={700}
                    onClick={() => onLinkClick(index)}
                >{title}</Link>
                )}
        </div>
    )

}

export default SectionListElement;

