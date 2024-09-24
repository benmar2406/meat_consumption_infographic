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
    } else {
      buttonControls.start({
        scale: 1,
        rotate: 0,
        borderRadius: "0%",
        transition: { duration: 0.5 }
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
        {/* Motion div around the button to control animation */}
        <motion.div animate={buttonControls} ref={buttonRef}>
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
