
import React from 'react';

const NavigationButton = ({ onClick, navIsOpen }) => {
    
    return(
        <div 
            className={`navigation-menu ${navIsOpen ? 'active' : ''}`}
            onClick={onClick}
        >
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
        </div>
    )
}

export default NavigationButton;