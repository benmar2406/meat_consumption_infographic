import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import './LandAllocation.css';

const LandAllocation = () => {
  
  const refScrollContainer = useRef(null);
  const isInView = useInView(refScrollContainer, { once: true });

  const { scrollYProgress } = useScroll({
    target: refScrollContainer
  });

  const width = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);
  const percentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [displayChartText, setDisplayChartText] = useState(false);

  useEffect(() => {
    const unsubscribe = percentage.onChange((latestPercentage) => {
      if (latestPercentage >= 40) { 
        setDisplayChartText(true);
      } else {
        setDisplayChartText(false);
      }
    });
  
    return () => unsubscribe(); 
  }, [percentage]);

  return (
    <section className='landuse-scroll-container' ref={refScrollContainer}>
      <div className='landuse-chart-container'>
      <h2 className='landuse-headline'>Allocation of farmland (European Union)</h2>
        <div className='landuse-chart'
          style={{transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}
        >
          <div className='landuse-chart-meat'>
            <motion.div 
              className='landuse-chart-fill' 
              style={{ width }} 
            >
              <motion.span className='landuse-chart-fill-text'
                style={{ 
                  opacity: displayChartText ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out"}}
              >
                between 60% and 70% of farmland<br /> utilized for meat production.
              </motion.span>
            </motion.div>
          </div>
          <article className='landuse-text'>
          </article>
        </div>
      </div>
    </section>
  );
}

export default LandAllocation;
