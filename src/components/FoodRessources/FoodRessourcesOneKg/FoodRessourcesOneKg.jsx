import React, { useRef, useEffect } from 'react';
import { useScroll, useTransform, motion, useAnimation } from "framer-motion";
import Xarrow from 'react-xarrows';
import FoodTypeChart from './FoodTypeChart/FoodTypeChart';
import './FoodRessourcesOneKg.css';
import cowIcon from '../../../assets/img/icons/cow.png';
import OneKgMeatContainer from './OneKgMeatContainer/OneKgMeatContainer';
import HumansFedContainer from './HumansFedContainer/HumansFedContainer';

const FoodRessourcesOneKg = () => {
  const ressourceUsage = [
    {
      type: "beef",
      foodUsageKg: 25,
      AnimalIcon: cowIcon,
      humansFedwithMeat: 1,
      humansFedAlternative: 36
    },
  ];

  // References for all elements involved in the paths
  const chartRef = useRef(null);
  const meatIconBorderRef = useRef(null);
  const humansFedRef = useRef(null);
  const humansFedAltRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const svgRef = useRef(null);

  const controlsArray = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
  });

  const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const unsubscribe = scrollPercentage.on("change", (latestPercentage) => {
      const scrollBreakpoints = [10, 40, 60, 80];
      scrollBreakpoints.forEach((breakpoint, index) => {
        if (latestPercentage >= breakpoint) {
          controlsArray[index].start({
            opacity: 1,
            transition: {
              type: 'spring',
              stiffness: 600,
              damping: 20,
            },
          });
        }
      });
    });

    const updateSVGPaths = () => {
      if (
        chartRef.current &&
        meatIconBorderRef.current &&
        humansFedRef.current &&
        humansFedAltRef.current &&
        svgRef.current
      ) {
        const svgElement = svgRef.current;

        const getElementCenter = (element) => {
          const rect = element.getBoundingClientRect();
          return {
            x: rect.left + rect.width / 2 + window.scrollX,
            y: rect.top + rect.height / 2 + window.scrollY,
          };
        };

        const chartCoords = getElementCenter(chartRef.current);
        const meatCoords = getElementCenter(meatIconBorderRef.current);
        const humansFedCoords = getElementCenter(humansFedRef.current);
        const humansFedAltCoords = getElementCenter(humansFedAltRef.current);

        // Get SVG's position relative to the document
        const svgRect = svgElement.getBoundingClientRect();
        const svgX = svgRect.left + window.scrollX;
        const svgY = svgRect.top + window.scrollY;

        // Adjust coordinates to SVG coordinate system
        const adjustCoords = (coords) => ({
          x: coords.x - svgX,
          y: coords.y - svgY,
        });

        const adjustedChartCoords = adjustCoords(chartCoords);
        const adjustedMeatCoords = adjustCoords(meatCoords);
        const adjustedHumansFedCoords = adjustCoords(humansFedCoords);
        const adjustedHumansFedAltCoords = adjustCoords(humansFedAltCoords);

        // Update paths
        const path1 = svgElement.querySelector('#path1');
        path1.setAttribute(
          'd',
          `M${adjustedChartCoords.x},${adjustedChartCoords.y} L${adjustedMeatCoords.x},${adjustedMeatCoords.y}`
        );

        const path2 = svgElement.querySelector('#path2');
        path2.setAttribute(
          'd',
          `M${adjustedChartCoords.x},${adjustedChartCoords.y} L${adjustedHumansFedAltCoords.x},${adjustedHumansFedAltCoords.y}`
        );

        const path3 = svgElement.querySelector('#path3');
        path3.setAttribute(
          'd',
          `M${adjustedMeatCoords.x},${adjustedMeatCoords.y} L${adjustedHumansFedCoords.x},${adjustedHumansFedCoords.y}`
        );
      }
    };

    // Update SVG paths on scroll and resize
    window.addEventListener('scroll', updateSVGPaths);
    window.addEventListener('resize', updateSVGPaths);

    // Initial update
    updateSVGPaths();

    return () => {
      unsubscribe();
      window.removeEventListener('scroll', updateSVGPaths);
      window.removeEventListener('resize', updateSVGPaths);
    };
  }, [scrollPercentage, controlsArray]);

  return (
    <section className="food-usage-1kg">
      <h2 className='food-usage-chart-title'>Food required to produce 1kg of meat</h2>
      <div className='food-usage-scroll-container' ref={scrollContainerRef}>
        <div className="food-usage-chart-grid">
          <motion.div
            className='food-usage-1kg-charts'
            ref={chartRef}
            initial={{ opacity: 0 }}
            animate={controlsArray[0]}
          >
            {ressourceUsage.map((ressource, index) => (
              <FoodTypeChart
                key={index}
                ressource={ressource}
              />
            ))}
          </motion.div>

          <motion.div
            className='one-kg-meat-container'
            ref={meatIconBorderRef}
            initial={{ opacity: 0 }}
            animate={controlsArray[1]}
          >
            <OneKgMeatContainer />
          </motion.div>

          <motion.div
            className='humans-fed-container'
            ref={humansFedRef}
            initial={{ opacity: 0 }}
            animate={controlsArray[2]}
          >
            <HumansFedContainer humansFed={ressourceUsage[0].humansFedwithMeat} />
          </motion.div>
          <motion.div
            className='humans-fed-container-2'
            ref={humansFedAltRef}
            initial={{ opacity: 0 }}
            animate={controlsArray[3]}
          >
            <HumansFedContainer humansFed={ressourceUsage[0].humansFedAlternative} />
          </motion.div>

          {/* SVG with motion paths for animated connections */}
          <svg className="svg-connection-lines" ref={svgRef}>
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a8d5ba" />
                <stop offset="100%" stopColor="#ff3e2c" />
              </linearGradient>
            </defs>

            {/* Chart to Meat Container Path */}
            <motion.path
              id="path1"
              stroke="url(#flowGradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Chart to Humans Fed Alternative Container Path */}
            <motion.path
              id="path2"
              stroke="url(#flowGradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Meat Container to Humans Fed Container Path */}
            <motion.path
              id="path3"
              stroke="url(#flowGradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default FoodRessourcesOneKg;
