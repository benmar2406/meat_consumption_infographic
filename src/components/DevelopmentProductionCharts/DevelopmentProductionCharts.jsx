import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { Scrollama, Step } from 'react-scrollama';
import ProductionWorldwideChart from './ProductionWorldwideChart/ProductionWorldwideChart';
import ProductionEuropeChart from './ProductionEuropeChart/ProductionEuropeChart'
import './DevelopmentProductionCharts.css';

function DevelopmentProductionCharts() {
  const [data, setData] = useState(0);
  const [progress, setProgress] = useState(0);
  const [chartOpacity, setChartOpacity] = useState(1); 
  const [textOpacity, setTextOpacity] = useState(0);
  const [displayEuropeChart, setDisplayEuropeChart] = useState(false);

  const steps = [10, 20, 30, 40];

  const onStepEnter = ({ data, data: stepData }) => {
    setData(data);
    
    if (stepData != 40) {
      setTextOpacity(1);
    }

    if (stepData === 20) {
      setDisplayEuropeChart(true)
    }
  
  };

  const onStepProgress = ({ progress, data: stepData }) => {
    setProgress(progress);
  
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
    <>
      <Element name="development-production">
      <section id="scroll" className="scroll-section">
        <div className="graphic-container">
          <div className="scroller">
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
                    <div className="step">
                      <article className='step-text'
                        style={{ opacity: isVisible ? textOpacity : 0, transition: 'opacity 1s ease-in-out'}} 
                        dangerouslySetInnerHTML={{ __html: stepText }}
                      ></article> 
                    </div>
                  </Step>
                );
              })}
            </Scrollama>
          </div>
          <div 
            className="graphic" 
            style={{ opacity: chartOpacity, transition: 'opacity 1s ease-in-out' }} 
          >
            {!displayEuropeChart &&<ProductionWorldwideChart />}
            {displayEuropeChart && <ProductionEuropeChart />}
            
          </div>
        </div>
      </section>
      </Element>
    </>
  );
}

export default DevelopmentProductionCharts;
