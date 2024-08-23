import React from 'react';
import './ComparisonPoorRichGraphic.css';
import DevelopingConsumptionChart from './DevelopingConsumptionChart/DevelopingConsumptionChart';
import IndustrializedConsumptionChart from './IndustrializedConsumptionChart/IndustrializedConsumptionChart';

const ComparisonPoorRichGraphic = () => {
  return (
    <div className="scroll-container">
      <div className='background-overlay'>
      <div className="sticky-container">
        <div className="chart-container">
          <DevelopingConsumptionChart />
        </div>
        <div className="chart-container">
          <IndustrializedConsumptionChart />
        </div>
      </div>
      </div>
    </div>
  );
};

export default ComparisonPoorRichGraphic;
