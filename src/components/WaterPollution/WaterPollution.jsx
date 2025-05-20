import React, { useState, useRef, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import { Scrollama, Step } from 'react-scrollama';
import { DeviceContext } from '../../context/deviceContext';
import './WaterPollution.css';

function WaterPollution() {

  const { t, i18n } = useTranslation();

  const [data, setData] = useState(0);
  const scrollRef = useRef(null)

  const steps = [10, 20, 30];

  const {mobile} = useContext(DeviceContext)

  const onStepEnter = ({ data, data: stepData }) => {
    setData(data);
  
  };

 

  return (

      <section id="scroll" className="water-scroll-section" ref={scrollRef} alt="polluted water">
        <h2 className="water-impacts-headline">{t('waterPollution.title')}</h2>
        <Element name='water-pollution'>
            <div className="water-scroller">
              <Scrollama 
                onStepEnter={onStepEnter} 
              >
                {steps.map(value => {

                  const stepText = value === 10 
                    ? t('waterPollution.article1')
                    : value === 20 
                    ? t('waterPollution.article2')
                    : value === 30 
                    ? t('waterPollution.article3')
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
