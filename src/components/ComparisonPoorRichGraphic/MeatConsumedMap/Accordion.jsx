import React, { useState } from 'react'
import AccordionItem from './AccordionItem/AccordionItem'
import './Accordion.css'

const Accordion = ({ accordion }) => {

    const data = [
        { question: accordion.question, answer: accordion.answer }
    ]

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    return(
        <div className="accordion-container">
            {data.map((accordionItem, index) => {
                return(
                    <AccordionItem 
                        key={`accordion-${index}`}
                        question={accordionItem.question}
                        answer={accordionItem.answer}
                        isOpen={isOpen}
                        onClick={handleClick}
                    />
                    )
            })}
        </div>
    )
}

export default Accordion;