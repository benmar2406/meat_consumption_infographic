import React, { useState } from "react";
import './Navigation.css';
import NavigationButton from "./NavigationButton/NavigationButton";
import SectionList from './SectionList/SectionList'

const Navigation = () => {

    const [navIsOpen, setNavIsOpen] = useState(false)
    
    const sectionsToNavigate = [
        {name: 'ressources used', link: 'ressources-intro'}
    ];

    const toggleNavigation = () => {
        if(navIsOpen === false) {
            setNavIsOpen(true)
            console.log('open menu')
        } else {
            setNavIsOpen(false)
            console.log('close menu')
        }
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