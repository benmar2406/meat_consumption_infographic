import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MeatIconWrapper from '../MeatIconWrapper';
import HumanIndustrializedCountries from './HumanIndustrializedCountries/HumanIndustrializedCountries';
import KgConsumed from '../KgConsumed/KgConsumed';

const kgConsumed = 76;

const IndustrializedConsumptionChart = (isInView) => {
  const [isLastIconRendered, setIsLastIconRendered] = useState(false);

  return (
    <div style={{transform: isInView ? "none" : "translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
      <HumanIndustrializedCountries />
      <div className="meat-icon-grid" aria-hidden="true">
        {Array.from({ length: kgConsumed }).map((_, index) => (
          <MeatIconWrapper 
            key={index} 
            index={index} 
            kgConsumed={kgConsumed}
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

export default IndustrializedConsumptionChart;
