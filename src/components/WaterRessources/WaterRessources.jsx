import React, { useState } from 'react';
import { Element } from 'react-scroll'
import { Scrollama, Step } from 'react-scrollama';
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';
import WaterRessourcesGraphic from './WaterRessourcesGraphic/WaterRessourcesGraphic';
import './WaterRessources.css'


const WaterRessources = ({ mobile }) => {

    const { t, i18n } = useTranslation();

    const article1 = t('waterConsumption.article1')
    const article2 = t('waterConsumption.article2')
    const article3 = t('waterConsumption.article3')
    const steps = [[10, article1], [20, article2], [30, article3], [40, "placeholder"]]; // Last step is not displayed and only used for controlling behaviour after last actual step 
    const lastStep = steps[steps.length - 1][0];
    const [currentStep, setCurrentStep] = useState(null);
    const [displayAgrUsage, setDisplayAgrUsage] = useState(false)
    const [displayMeatUsage, setDisplayMeatUsage] = useState(false)
    
    const handleStepEnter = ({ data, data: stepData }) => {
        setCurrentStep(data);

        if(stepData === 20) {
            setDisplayAgrUsage(true)
        }
        if(stepData === 30) {
            setDisplayMeatUsage(true)
        }
    }

    return(
        <section className='water-ressources'>
            <Element name='water-ressources'>
            <h2>{t('waterConsumption.title')}</h2>
                <div className='water-ressources-scroll-container'>
                    <div className='scroller-water-ressources'>
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
                                    className='step-water-ressources'
                                    style={{opacity: isVisible ? "1" : "0", transition: 'opacity 1s ease-in-out'}}
                                >
                                    <article 
                                        className='water-ressources-article'
                                        dangerouslySetInnerHTML={{__html: step[1]}}>
                                    </article>
                                </div>
                            </Step>)})}
                        </Scrollama>
                    </div>
                    <div className='water-ressources-chart'>
                        <LazyLoad height={400} offset={100}>
                            <WaterRessourcesGraphic displayAgrUsage={displayAgrUsage} displayMeatUsage={displayMeatUsage} mobile={mobile}/>
                        </LazyLoad>
                    </div>
                </div>
            </Element>
        </section>
    )
};

export default WaterRessources;