import React, { useState } from 'react';
import { Element } from 'react-scroll'
import { Scrollama, Step } from 'react-scrollama';
import WaterRessourcesGraphic from './WaterRessourcesGraphic/WaterRessourcesGraphic';
import './WaterRessources.css'


const WaterRessources = () => {

    const article1 = '<p>Globally, about 4,000 to 4,500 billion cubic meters of freshwater are withdrawn each year to meet the needs of households, industries, and agriculture.</p>'
    const article2 = "<p>Agriculture alone uses around <span className='highlight'>70%</span> (2,800 to 3,150 billion cubic meters) of the world's freshwater annually.</p><p>The high water demand in agriculture places enormous pressure on global water resources​</p>"
    const article3 = "<p>Meat production is responsible for a substantial share of this agricultural water use. Around 41% of agricultural water is allocated to growing feed for livestock and supporting animal farming.</p><p>Beef production has the largest water footprint, highlighting the significant water cost behind meat consumption.</p>"
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
            <h2>Water consumption</h2>
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
                        <WaterRessourcesGraphic displayAgrUsage={displayAgrUsage} displayMeatUsage={displayMeatUsage}/>
                    </div>
                </div>
            </Element>
        </section>
    )
};

export default WaterRessources;