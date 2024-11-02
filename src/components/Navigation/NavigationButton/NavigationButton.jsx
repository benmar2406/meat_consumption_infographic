import React from 'react';

const NavigationButton = ({ onClick, navIsOpen }) => {
    
    return(
        <div 
            className={`navigation-button ${navIsOpen ? 'active' : ''}`}
            onClick={onClick}
            role="button"
            aria-label={navIsOpen ? 'Click to close navigation' : 'Click to open navigation'}
            aria-controls='section-list'

        >
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
        </div>
    )
}

export default NavigationButton;