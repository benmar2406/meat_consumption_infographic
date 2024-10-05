import React, { useState, useEffect } from "react";
import './Navigation.css';
import NavigationButton from "./NavigationButton/NavigationButton";
import SectionList from './SectionList/SectionList'

const Navigation = () => {

    const [navIsOpen, setNavIsOpen] = useState(false)

        // Handle closing the nav when clicking outside
        useEffect(() => {
            const handleWindowClick = (event) => {
                if (navIsOpen) {
                    setNavIsOpen(false);
                }
            };
            window.addEventListener('click', handleWindowClick);

            return () => {
                window.removeEventListener('click', handleWindowClick);
            };
        }, [navIsOpen]);


    const toggleNavigation = (event) => {
        event.stopPropagation(); 
        setNavIsOpen((prevState) => !prevState); 
    }


    return(
        <nav className='navigation'>
            <NavigationButton  
                onClick={toggleNavigation}
                navIsOpen={navIsOpen}
            />
            <SectionList 
                navIsOpen={navIsOpen}
            />
        </nav>
    )
}

export default Navigation