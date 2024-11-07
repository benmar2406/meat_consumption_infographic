import React, { useState, useEffect } from "react";
import './Navigation.css';
import NavigationButton from "./NavigationButton/NavigationButton";
import SectionList from './SectionList/SectionList'

const Navigation = () => {

    const [navIsOpen, setNavIsOpen] = useState(false)

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

    //Handler for "Enter" and "Space" keys
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            if (navIsOpen === false) {
                setNavIsOpen(true)
            } else {
                setNavIsOpen(false)
            }
        }
    };


    return(
        <header>
            <nav className='navigation'>
                <NavigationButton  
                    onClick={toggleNavigation}
                    navIsOpen={navIsOpen}
                    onKeyDown={handleKeyDown}
                />
                <SectionList 
                    navIsOpen={navIsOpen}
                />
            </nav>
        </header>
    )
}

export default Navigation