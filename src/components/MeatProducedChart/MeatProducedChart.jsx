import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import MeatGridContainer from './MeatGridContainer/MeatGridContainer';
import Counter from './Counter/Counter';
import './MeatProducedChart.css';

const MeatProducedChart = () => {
  const [visibleSteps, setVisibleSteps] = useState(0);
  const itemsPerContainer = 20; 
  const containers = 18; 

  const handleStepEnter = ({ data }) => {
    setVisibleSteps((prevVisibleSteps) => Math.max(prevVisibleSteps, data + 1));
  };

  return (
    <div className="meat-production-layout">
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
    </div>
  );
};

export default MeatProducedChart;
