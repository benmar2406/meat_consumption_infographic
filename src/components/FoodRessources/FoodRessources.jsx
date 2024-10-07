import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { Element } from 'react-scroll';
import FoodRessourcesGraphic from './FoodRessourcesGraphic/FoodRessourcesGraphic'
import './FoodRessources.css'


const FoodRessources = () => {
    
    const [stepOne, setStepOne] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepThree, setStepThree] = useState(false);
    const [stepFour, setStepFour] = useState(false);


    const foodRessources = [
        {name: "wheat", tonnes: "780 mio.", numberOfIcons: 20, usedForMeat: 4, percentageForMeat: 20, displayWhen: stepOne, displayMeatWhen: stepTwo },
        {name: "corn", tonnes: "1.2 bn", numberOfIcons: 30, usedForMeat: 20, percentageForMeat: 65, displayWhen: stepOne, displayMeatWhen: stepThree },
        {name: "soy", tonnes: "380 mio.", numberOfIcons: 10, usedForMeat: 8, percentageForMeat: 80, displayWhen: stepOne, displayMeatWhen: stepFour }
    ]

    const article1 = '<p>A large faction of food produced worldwide is consumed through livestock breeding.</p>'
    const article2 = "<p>​20% of all wheat produced worldwide is used by the meat industry indirectly as animal food.</p>"
    const article3 = "<p>For corn the picture is different: 65% of all corn produced worldwide is used to feed animals.</p>"
    const article4 = "<p>For soy it is even more crass: 80% of soy is consumed through livestock breeding</p>"
    const article5 = "<p>Food used for meat production is not available to be directly consumed by humans.</p><p>Producing meat is inefficient compared to eating plant-based foods directly. </p>"
    const steps = [[10, article1], [20, article2], [30, article3], [40, article4], [50, article5], [60, "placeholder"]]; // Last step is not displayed and only used for controlling behaviour after last actual step 
    const lastStep = steps[steps.length - 1][0];
    const [currentStep, setCurrentStep] = useState(null);
    
    const handleStepEnter = ({ data, data: stepData }) => {
        setCurrentStep(data);
        switch(stepData) {
            case 10: setStepOne(true)
            break;
            case 20: setStepTwo(true)
            break;
            case 30: setStepThree(true)
            break;
            case 40: setStepFour(true)
            break;
            default:
        }};

    return(
        <Element name='food-ressources'>
            <section className='food-ressources'>
                <h2 className='food-usage-title'>Food ressources: factions consumed by the meat industry</h2>
                <div className='food-ressources-scroll-container'>
                        <div className='scroller-food-ressources'>
                            <Scrollama
                                onStepEnter={handleStepEnter}
                            >
                            {steps.map((step) => {
                                let isVisible;
                                if(currentStep === step[0] && currentStep !== lastStep) {
                                    isVisible = true
                                } else {
                                    isVisible = false
                                }
                                
                                
                                return(
                                <Step data={step[0]} key={step[0]}>
                                    <div 
                                        className='step-food-ressources'
                                        style={{opacity: isVisible ? "1" : "0", transition: 'opacity 1s ease-in-out'}}
                                    >
                                        <article 
                                            className='food-ressources-article'
                                            dangerouslySetInnerHTML={{__html: step[1]}}>
                                        </article>
                                    </div>
                                </Step>)})}
                            </Scrollama>
                        </div>
                    <div 
                        className='food-ressources-chart'
                    >   
                    {foodRessources.map((foodType, index) => {
                    return(
                        <FoodRessourcesGraphic 
                            key={index}
                            index={index}
                            name={foodType.name}
                            numberOfIcons={foodType.numberOfIcons}
                            displayWhen={foodType.displayWhen}
                            tonnes={foodType.tonnes}
                            icon={foodType.icon}
                            displayMeatWhen={foodType.displayMeatWhen}
                            usedForMeat={foodType.usedForMeat}
                            percentageForMeat={foodType.percentageForMeat}
                        />
                    )})}
                                
                    </div>
                </div>
            </section>
        </Element>
    )
};

export default FoodRessources;