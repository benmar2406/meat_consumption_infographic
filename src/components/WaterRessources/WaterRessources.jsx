import React, { useState } from 'react';
import './WaterRessources.css'
import { Scrollama, Step } from 'react-scrollama';


const WaterRessources = () => {

    const article1 = 'Über die Herkunft des Textes lässt sich keine Klarheit mehr gewinnen. Auch finden sich viele leicht voneinander abweichende Varianten dieses Textes. In der 1914 herausgegebenen lateinisch-englischen Cicero-Werkausgabe findet sich der Text auf Seite 36 oben beginnend mit lorem ipsum…, da das Wort dolorem getrennt umbrochen wurde.[3]'
    const article2 = 'Über die Herkunft des Textes lässt sich keine Klarheit mehr gewinnen.'
    const article3 = 'Auch finden sich viele leicht voneinander abweichende Varianten dieses Textes. In der 1914 herausgegebenen lateinisch-englischen Cicero-Werkausgabe findet sich der Text auf Seite 36 oben beginnend mit lorem ipsum…, da das Wort dolorem getrennt umbrochen wurde.[3]'
    const steps = [[10, article1], [20, article2], [30, article3]]

    const [currentStep, setCurrentStep] = useState(null);

    const handleStepEnter = ({ data }) => {
        setCurrentStep(data);
    }

    return(
        <section className='water-ressources'>
            <div className='water-ressources-scroll-container'>
                    <div className='scroller-water-ressources'>
                        <Scrollama
                            onStepEnter={handleStepEnter}
                        >
                        {steps.map((step) => {
                            const isVisible = currentStep === step[0];
                            return(
                            <Step data={step[0]} key={step[0]}>
                                <div 
                                    className='step-water-ressources'
                                    style={{opacity: isVisible ? "1" : "0.5", transition: 'opacity 1s ease-in-out'}}
                                >
                                    <article className='water-ressources-article'>{step[1]}</article>
                                </div>
                            </Step>)})}
                        </Scrollama>
                    </div>
                <div className='water-ressources-chart'></div>
            </div>
        </section>
    )

};

export default WaterRessources;