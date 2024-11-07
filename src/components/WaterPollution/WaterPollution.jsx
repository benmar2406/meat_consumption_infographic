import React, { useState, useRef } from 'react';
import { Element } from 'react-scroll';
import { Scrollama, Step } from 'react-scrollama';
import './WaterPollution.css';

function WaterPollution() {

  const [data, setData] = useState(0);
  const scrollRef = useRef(null)

  const steps = [10, 20, 30];

  const onStepEnter = ({ data, data: stepData }) => {
    setData(data);
  
  };
 

  return (

      <section id="scroll" className="water-scroll-section" ref={scrollRef} alt="polluted water">
        <Element name='water-pollution'>
            <div className="water-scroller">
              <h3 className="water-impacts-headline">Impacts on water quality</h3>
              <Scrollama 
                onStepEnter={onStepEnter} 
              >
                {steps.map(value => {

                  const stepText = value === 10 
                    ? "<p>Meat production is a major contributor to water pollution worldwide, dumping tons of pollutants into rivers and lakes every year.</p><p>These pollutants include manure, chemicals, and antibiotics from industrial farming practices. The pollution exacerbates water-quality degradation, threatening ecosystems and human health.</p>"
                    : value === 20 
                    ? "<p>For instance, farm runoff leads to nutrient pollution that triggers algal blooms, reducing oxygen in the water and endangering aquatic life.</p>"
                    : value === 30 
                    ? "<p>The sheer scale of pollution from meat production threatens global water security—and efforts to tackle it just aren’t keeping up.</p>"
                    : "";

                  return (
                    <Step data={value} key={value}>
                      <div className="water-step">
                        <article className='water-step-text'
                          dangerouslySetInnerHTML={{ __html: stepText }}
                        ></article> 
                      </div>
                    </Step>
                  );
                })}
              </Scrollama>
            </div>
      
        </Element>
      </section>
  );
}

export default WaterPollution;
