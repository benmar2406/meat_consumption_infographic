import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import MeatGridContainer from './MeatGridContainer/MeatGridContainer';
import Counter from './Counter/Counter';
import './MeatProducedGraphic.css';


const MeatProducedGraphic = () => {
  const [visibleSteps, setVisibleSteps] = useState(0);
  const itemsPerContainer = 20; 
  const containers = 18; 

  const handleStepEnter = ({ data }) => {
    setVisibleSteps((prevVisibleSteps) => Math.max(prevVisibleSteps, data + 1));
  };

  return (
    <section className="meat-production-layout" aria-hidden="true">
      <Counter count={visibleSteps * itemsPerContainer} />

      <div className="meat-production-wrapper">
        <Scrollama onStepEnter={handleStepEnter}>
          {Array.from({ length: containers }).map((_, containerIndex) => (
            <Step data={containerIndex} key={containerIndex}>
              <div
                className={`meat-step ${containerIndex < visibleSteps ? 'scrollama-step-active' : ''}`}
              >
                <MeatGridContainer containerIndex={containerIndex} itemsPerContainer={itemsPerContainer} />
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>
    </section>
  );
};

export default MeatProducedGraphic;
