import React, { useRef, useEffect } from 'react'; 
import { useAnimation, motion, useInView } from 'framer-motion'; 
import './ComparisonPoorRichGraphic.css';
import DevelopingConsumptionChart from './DevelopingConsumptionChart/DevelopingConsumptionChart';
import IndustrializedConsumptionChart from './IndustrializedConsumptionChart/IndustrializedConsumptionChart';
import SectionButton from '../SectionButton/SectionButton';

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
    <>
      <section className="comparison-rich-poor-countries">
        <div className="scroll-container"> 
          <div className="sticky-container">
            <div className="chart-container">
              <DevelopingConsumptionChart />
            </div>
            <div className="chart-container">
              <IndustrializedConsumptionChart />
            </div>
          </div>
        </div>
        <motion.div 
          animate={buttonControls} 
          ref={buttonRef}
          style={{
            width: '100%', // Ensure it takes full width of the parent container
            maxWidth: '400px', // Or set a fixed width (adjust as necessary)
            overflow: 'hidden', // Prevent overflow during scaling
            margin: '0 auto', // Center it within its container
          }}
        >
          <SectionButton 
            buttonText="What does it cost?"
            sectionLink="ressources-intro"
            buttonColor="#ff3e2c"
          />
        </motion.div>
      </section>
    </>
  );
};

export default ComparisonPoorRichGraphic;
