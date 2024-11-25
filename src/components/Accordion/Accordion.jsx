import React, { useState } from 'react'
import AccordionItem from './AccordionItem/AccordionItem'
import './Accordion.css'

const data = [
    { question: "How was this calculated?", answer: "<p>Calculations of these statements were based on required caloric intake and the calories included in fed food and in 1kg od meat.</p><ul><li>Producing 1 kg of beef requires about 25 kg of feed, including grains like corn and soy, which are fed to cattle over their lifetime.</li><li>This 1 kg of beef provides around 2,500 calories, which is enough to meet the daily calorie needs of 1 person.</li><li>However, the same 25 kg of feed used to produce the beef contains around 95,000 calories. If consumed directly as grains or soy, it could meet the daily calorie needs of 38 people.</li></ul>" }
]

const Accordion = () => {

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