import React, { useState } from 'react'
import AccordionItem from './AccordionItem'
import './AccordionMap.css'

const AccordionMap = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    return(
        <div className="accordion-container-map">
            <AccordionItem 
                isOpen={isOpen}
                onClick={handleClick}
            />
                    
        </div>
    )
}

export default AccordionMap;