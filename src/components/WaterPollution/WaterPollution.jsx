import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import './WaterPollution.css';

function WaterPollution() {
  const [data, setData] = useState(0);
  const [textOpacity, setTextOpacity] = useState(1);

  const steps = [10, 20, 30, 40];

  const onStepEnter = ({ data, data: stepData }) => {
    setData(data);
    
    if (stepData != 40) {
      setTextOpacity(1);
    }
  
  };

  const onStepProgress = ({ progress, data: stepData }) => {
  
    if (stepData === data && progress >= 0.8) {
      setTextOpacity(0);
    }
    if (stepData === data && progress < 0.8 && stepData != 40) {
      setTextOpacity(1);
    }
  };


  const onStepExit = () => {
  };

  return (
      <section id="scroll" className="water-scroll-section">
        <h3 className="water-impacts-headline">Impacts on water quality</h3>
          <div className="water-scroller">
            <Scrollama 
              onStepEnter={onStepEnter} 
              onStepExit={onStepExit}
              progress 
              onStepProgress={onStepProgress}
            >
              {steps.map(value => {
                const isVisible = value === data;

                const stepText = value === 10 
                  ? "<p>Meat production is a major global contributor to water pollution. It discharges large amounts of pollutants into water systems each year. <p>These pollutants include manure, chemicals, and antibiotics from industrial farming practices. The pollution exacerbates water-quality degradation, threatening ecosystems and human health.</p>"
                  : value === 20 
                  ? "<pOne of the main sources of this water pollution comes from livestock waste, which contaminates nearby water bodies.</p><p>For example, runoff from industrial farms leads to nutrient pollution that can cause harmful algal blooms, which reduce oxygen levels in water and harm aquatic life.</p>"
                  : value === 30 
                  ? "<p>The scale of pollution linked to meat production has severe implications for global water security, with efforts to reduce these impacts remaining insufficient.</p>"
                  : "";

                return (
                  <Step data={value} key={value}>
                    <div className="water-step">
                      <article className='water-step-text'
                        style={{ opacity: isVisible ? textOpacity : 0, transition: 'opacity 1s ease-in-out'}} 
                        dangerouslySetInnerHTML={{ __html: stepText }}
                      ></article> 
                    </div>
                  </Step>
                );
              })}
            </Scrollama>
          </div>
      </section>
  );
}

export default WaterPollution;
