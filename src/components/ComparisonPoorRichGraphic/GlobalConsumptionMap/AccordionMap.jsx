import { useState } from 'react'
import AccordionItem from './AccordionItem'
import './AccordionMap.css'

const AccordionMap = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    return(
        <figure className="accordion-container-map">
            <AccordionItem 
                isOpen={isOpen}
                onClick={handleClick}
            />
                    
        </figure>
    )
}

export default AccordionMap;