import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HumanDevelopingCountries from './HumanDevelopingCountries/HumanDevelopingCountries';
import KgConsumed from '../KgConsumed/KgConsumed';
import MeatIconWrapper from '../MeatIconWrapper';

const kgConsumed = 15;

const DevelopingConsumptionChart = () => {
  const [isLastIconRendered, setIsLastIconRendered] = useState(false);

  const handleLastIconRendered = () => {
    if (!isLastIconRendered) {
      setIsLastIconRendered(true);
    }
  };

  return (
    <>
      <HumanDevelopingCountries />
      <div className="meat-icon-grid" role="group" aria-label="Depicts">
        {Array.from({ length: kgConsumed }).map((_, index) => (
          <MeatIconWrapper 
            key={index} 
            index={index} 
            onLastIconRendered={handleLastIconRendered} 
            kgConsumed={kgConsumed}
            aria-hidden="true"
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLastIconRendered ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <KgConsumed kgConsumed={kgConsumed} color="#a8d5ba"/>
      </motion.div>
    </>
  );
};


export default DevelopingConsumptionChart;
