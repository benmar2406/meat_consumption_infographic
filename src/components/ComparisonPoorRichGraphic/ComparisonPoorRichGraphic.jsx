import React, { useRef } from 'react'; 
import { useInView } from 'framer-motion'; 
import './ComparisonPoorRichGraphic.css';
import DevelopingConsumptionChart from './DevelopingConsumptionChart/DevelopingConsumptionChart';
import IndustrializedConsumptionChart from './IndustrializedConsumptionChart/IndustrializedConsumptionChart';
import SectionButton from '../SectionButton/SectionButton';

const ComparisonPoorRichGraphic = () => {
  
  const ref = useRef(null); 
  const isInView = useInView(ref); 
  
  return (
    <>
    <section className="comparison-rich-poor-countries">
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
    <SectionButton 
        buttonText="What does it cost?"
        sectionLink="ressources-intro"
        buttonColor="#ff3e2c"
        isInView={isInView}
        />
      </section>
    </>

  );
};

export default ComparisonPoorRichGraphic;
