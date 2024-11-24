import React, { useRef, useEffect } from 'react'; 
import { Element } from 'react-scroll';
import { useAnimation, useInView } from 'framer-motion'; 
import './ComparisonPoorRichGraphic.css';
import DevelopingConsumptionChart from './DevelopingConsumptionChart/DevelopingConsumptionChart';
import IndustrializedConsumptionChart from './IndustrializedConsumptionChart/IndustrializedConsumptionChart';

const ComparisonPoorRichGraphic = () => {
  const buttonRef = useRef(null); 
  const buttonIsInView = useInView(buttonRef);  
  const buttonControls = useAnimation();  

  useEffect(() => {
    if (buttonIsInView) {
      buttonControls.start({
        scale: [1, 1.3, 1, 1.3, 1],
        transition: { duration: 2.5 },
        opacity: [0, 1, 1, 1, 1 ]
      });
    } 
  }, [buttonIsInView, buttonControls]);

  return (
    
      <section className="comparison-rich-poor-countries">
        <Element name='comparison-rich-poor-countries'>
          <h2>Where is meat consumed?</h2>
          <div className="scroll-container"> 
              <div className="sticky-container">
              <div className="chart-container">
                <DevelopingConsumptionChart />
              </div>
              <div className="chart-container">
                <IndustrializedConsumptionChart />
              </div>
            </div>
            <span className="sr-only">In the high and higher income countries on average around 5 times more meat is consumed than in low and lower income countries</span>
          </div>
        </Element>
      </section>
  );
};

export default ComparisonPoorRichGraphic;
