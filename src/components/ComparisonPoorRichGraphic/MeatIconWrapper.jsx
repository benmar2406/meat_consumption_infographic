import React from 'react';
import { motion } from 'framer-motion';
import MeatIconContainer from './MeatIconContainer/MeatIconContainer';
import useInfoBoxAnimation from '../hooks/useInfoBoxAnimation';

const MeatIconWrapper = ({ index, onLastIconRendered, kgConsumed }) => {
  
  const { ref, controls } = useInfoBoxAnimation(
    index, 
    onLastIconRendered, 
    index === kgConsumed - 1
  );


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

export default MeatIconWrapper;