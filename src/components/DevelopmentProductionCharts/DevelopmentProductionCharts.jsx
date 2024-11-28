import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { Scrollama, Step } from 'react-scrollama';
import { useTranslation } from 'react-i18next';
import ProductionWorldwideChart from './ProductionWorldwideChart/ProductionWorldwideChart';
import ProductionEuropeChart from './ProductionEuropeChart/ProductionEuropeChart'
import './DevelopmentProductionCharts.css';

function DevelopmentProductionCharts() {

  const { t, i18n } = useTranslation();

  const [data, setData] = useState(0);
  const [chartOpacity] = useState(1); 
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
      <section id="scroll" className="production-development-scroll-section">
        <Element name="development-production">
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
                    ? t('developmentCharts.article1')
                    : value === 20 
                    ? t('developmentCharts.article2')
                    : value === 30 
                    ? t('developmentCharts.article3')
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
              aria-description="Two charts the depicting the increase of meat production globally and in Western Europe over the decades."
            >
              {!displayEuropeChart &&<ProductionWorldwideChart />}
              {displayEuropeChart && <ProductionEuropeChart />}
              
            </div>
          </div>
          </Element>
      </section>
  );
}

export default DevelopmentProductionCharts;
