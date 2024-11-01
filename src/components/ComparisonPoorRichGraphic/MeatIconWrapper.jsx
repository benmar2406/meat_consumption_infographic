import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import MeatIconContainer from './MeatIconContainer/MeatIconContainer';
import useInViewAnimation from '../hooks/useInViewAnimation';

const MeatIconWrapper = ({ index, onLastIconRendered, kgConsumed }) => {
  
  const { ref, controls } = useInViewAnimation(
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