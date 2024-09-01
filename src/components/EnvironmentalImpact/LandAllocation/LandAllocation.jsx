import React, { useRef } from 'react';
import { useScroll, useTransform, motion, useMotionValue, useMotionValueEvent, useInView } from "framer-motion";
import './LandAllocation.css';

const LandAllocation = () => {
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Using useScroll to track the scroll position of the target element
  const { scrollYProgress } = useScroll({
    target: ref
  });

  // Convert the scrollYProgress to a width value for the progress bar
  const width = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  
  // Convert scrollYProgress to a percentage for display
  const percentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Use useMotionValue to get the latest value of the percentage
  const percentageValue = useMotionValue(0);

  // Update the percentage value as the scrollYProgress changes
  useMotionValueEvent(percentage, "change", (latest) => {
    percentageValue.set(latest.toFixed(0)); // Round to nearest integer
  });

  return (
    <div className='landuse-scroll-container' ref={ref}>
        <div className='landuse-chart-container'>
          <div className='landuse-chart'
            style={{transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}
          >
            <div className='landuse-chart-meat'>
              <motion.div 
                className='landuse-chart-fill' 
                style={{ width }} 
              />
            </div>
            <article className='landuse-text'>
              {percentageValue.get()}% wird für...
            </article>
          </div>
        </div>
      </div>
  );
}

export default LandAllocation;
