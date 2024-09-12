import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import './WaterPollution.css';

function DevelopmentProductionCharts() {
  const [data, setData] = useState(0);
  const [textOpacity, setTextOpacity] = useState(0);

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
                  ? "<p>Since the 1960s, global meat production has been steadily increasing.</p><p>This growth is closely linked to the rise of mass meat production and the expansion of the fast food industry.</p>"
                  : value === 20 
                  ? "<p>In Western Europe and many industrialized regions meat production and consumption are declining for the last few years.</p><aside><p>he short-term downturn in the 1990s and 2000s in the popularity of meat cravings was due to to increasing health, ethical and sustainable awareness, but also to the outbreak of BSE.</p><p>The subsequent increase can be related to marketing strategies and new (to-go) products/snacks, globalization effects and thus increased availability.</p>"
                  : value === 30 
                  ? "<p>But the decline in meat consumption in industrialized regions doesn't mean that rich countries have given up meat, nor that developing countries are now the primary consumers of it...</p>"
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

export default DevelopmentProductionCharts;
