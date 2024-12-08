import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import FoodRessourcesGraphic from './FoodRessourcesGraphic/FoodRessourcesGraphic'
import './FoodRessources.css'
import Conclusion from '../Conclusion/Conclusion'

const FoodRessources = () => {

    const { t } = useTranslation();
    
    const [stepOne, setStepOne] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepThree, setStepThree] = useState(false);
    const [stepFour, setStepFour] = useState(false);

    const foodRessources = [
        {name: t('types.wheat'), tonnes: t('foodConsumption.780'), numberOfIcons: 20, usedForMeat: 4, percentageForMeat: 20, displayWhen: stepOne, displayMeatWhen: stepTwo },
        {name: t('types.corn'), tonnes: t('foodConsumption.1.2'), numberOfIcons: 30, usedForMeat: 20, percentageForMeat: 65, displayWhen: stepOne, displayMeatWhen: stepThree },
        {name: t('types.soy'), tonnes: t('foodConsumption.380'), numberOfIcons: 10, usedForMeat: 8, percentageForMeat: 80, displayWhen: stepOne, displayMeatWhen: stepFour }
    ]

    const article1 = t('foodConsumption.article1');
    const article2 = t('foodConsumption.article2');
    const article3 = t('foodConsumption.article3');
    const article4 = t('foodConsumption.article4');

    const steps = [[10, article1], [20, article2], [30, article3], [40, article4], [50, "placeholder"]]; // Last step is not displayed and only used for controlling behaviour after last actual step 
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
        <section className='food-ressources'>
            <Element name='food-ressources'>
                <h2 className='food-usage-title'>{t('foodConsumption.title')}</h2>
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
                <Conclusion conclusionText={t('foodConsumption.conclusionText1')} />
            </Element>
        </section>

    )
};

export default FoodRessources;