import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import HumanIndustrializedCountries from './HumanIndustrializedCountries/HumanIndustrializedCountries';
import MeatIconContainer from '../MeatIconContainer/MeatIconContainer';
import KgConsumed from '../KgConsumed/KgConsumed';

const kgConsumed = 76;

const IndustrializedConsumptionChart = (isInView) => {
  const [isLastIconRendered, setIsLastIconRendered] = useState(false);

  return (
    <div style={{transform: isInView ? "none" : "translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
      <HumanIndustrializedCountries />
      <div className="meat-icon-grid">
        {Array.from({ length: kgConsumed }).map((_, index) => (
          <MeatIconWrapper 
            key={index} 
            index={index} 
            onLastIconRendered={() => {
              if (index === kgConsumed - 1) {
                setIsLastIconRendered(true);
              }
            }} 
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLastIconRendered ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <KgConsumed kgConsumed={kgConsumed} color="#a2d3e2"/>
      </motion.div>
    </div>
  );
};    

const MeatIconWrapper = ({ index, onLastIconRendered }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        transform: 'translateY(0px)',
        transition: { delay: index * 0.02, duration: 0.07 },
      }).then(() => {
        if (index === kgConsumed - 1) {
          onLastIconRendered();
        }
      });
    }
  }, [isInView, controls, index, onLastIconRendered]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, transform: 'translateY(20px)' }}
    >
      <MeatIconContainer />
    </motion.div>
  );
};

export default IndustrializedConsumptionChart;
