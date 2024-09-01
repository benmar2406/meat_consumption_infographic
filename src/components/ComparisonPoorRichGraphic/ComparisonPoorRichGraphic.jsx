import React, { useRef } from 'react'; 
import { useInView } from 'framer-motion'; 
import './ComparisonPoorRichGraphic.css';
import DevelopingConsumptionChart from './DevelopingConsumptionChart/DevelopingConsumptionChart';
import IndustrializedConsumptionChart from './IndustrializedConsumptionChart/IndustrializedConsumptionChart';

const ComparisonPoorRichGraphic = () => {
  
  const ref = useRef(null); 
  const isInView = useInView(ref); 
  
  return (
    <div className="scroll-container" ref={ref}> 
      <div className="sticky-container">
        <div className="chart-container">
          <DevelopingConsumptionChart 
            isInView={isInView}
          />
        </div>
        <div className="chart-container">
          <IndustrializedConsumptionChart />
        </div>
      </div>
    </div>
  );
};

export default ComparisonPoorRichGraphic;
