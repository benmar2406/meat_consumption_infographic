import React from 'react';

const NavigationButton = ({ onClick, navIsOpen, onKeyDown }) => {
    
    return(
        <div 
            className={`navigation-button ${navIsOpen ? 'active' : ''}`}
            onClick={onClick}
            role="button"
            tabIndex="0"
            aria-label={navIsOpen ? 'Click to close navigation' : 'Click to open navigation'}
            aria-controls='section-list'
            onKeyDown={onKeyDown}
        >
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
        </div>
    )
}

export default NavigationButton;