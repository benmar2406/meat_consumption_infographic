  import React, { useRef, useEffect, useState } from 'react';
  import { motion, useAnimation, useTransform, useScroll, useInView } from 'framer-motion'
  import FoodTypeChart from './FoodTypeChart/FoodTypeChart';
  import './FoodRessourcesOneKg.css';
  import cowIcon from '../../../assets/img/icons/cow.png';
  import OneKgMeatContainer from './OneKgMeatContainer/OneKgMeatContainer';
  import HumansFedContainer from './HumansFedContainer/HumansFedContainer';
  import InfoCircle from './InfoCircle/InfoCircle';

  const FoodRessourcesOneKg = () => {
      const ressourceUsage = [
          { type: "beef", foodUsageKg: 25, AnimalIcon: cowIcon, humansFedwithMeat: 1, humansFedAlternative: 36, cssSelector: "type-meat-water-container" }
      ];

      const infoCircles = [
        {type: 'meat', color: '#ff3e2c', text: 'feeds'},
        {type: 'vegetarian', color: '#a8d5ba', text: 'feed'},
      ]


      const foodUsageRef = useRef(null)
      const chartRef = useRef(null);
      const meatIconBorderRef = useRef(null); 
      const infoCircle1Ref = useRef(null); 
      const [path1, setPath1] = useState('');
      const [path2, setPath2] = useState('');
      const isInView = useInView(chartRef, { once: true })
      const scrollContainerRef = useRef(null);
      

      const inViewControls = useAnimation()

      useEffect(() => {
        if (isInView) {
          inViewControls.start({
              scale: 1,
              opacity: 1,
              transition: {
                  type: 'spring',
                  stiffness: 600,
                  damping: 20,
              }
            })
        }
      }, [inViewControls, isInView])



      const controlsArray = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

      const { scrollYProgress } = useScroll({
          target: scrollContainerRef
      });

      const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

      useEffect(() => {
          const unsubscribe = scrollPercentage.on("change", (latestPercentage) => {
              const scrollBreakpoints = [40, 80, 80, 80];
              scrollBreakpoints.forEach((breakpoint, index) => {
                  if (latestPercentage >= breakpoint) {
                      controlsArray[index].start({
                          scale: 1,
                          opacity: 1,
                          transition: {
                              type: 'spring',
                              stiffness: 600,
                              damping: 20,
                          }
                      });
                  }
              });
          });

      }, [scrollPercentage, controlsArray]);



      const updatePath = () => {
          if (chartRef.current && meatIconBorderRef.current) {
              const chartRect = chartRef.current.getBoundingClientRect();
              const meatRect = meatIconBorderRef.current.getBoundingClientRect();

              // Calculate path from the bottom center of chartRef to the top center of meatIconBorderRef
              const startX = chartRect.left + chartRect.width / 2;
              const startY = chartRect.bottom;
              const endX = meatRect.left + meatRect.width / 2;
              const endY = meatRect.top;

              // Define the SVG path for a smooth curve
              setPath1(`M ${startX},${startY} C ${startX},${startY + 50} ${endX},${endY - 50} ${endX},${endY}`);
          }

          if (meatIconBorderRef.current && infoCircle1Ref.current) {
            const meatRect = meatIconBorderRef.current.getBoundingClientRect();
            const infoCircle1Rect = infoCircle1Ref.current.getBoundingClientRect();

            // Calculate path from the bottom center of chartRef to the top center of meatIconBorderRef
            const startX2 = meatRect.left + meatRect.width / 2;
            const startY2 = meatRect.bottom;
            
            const endX2 = infoCircle1Rect.left + infoCircle1Rect.width / 2;
            const endY2 = infoCircle1Rect.top;

            // Define the SVG path for a smooth curve
            setPath2(`M ${startX2},${startY2} C ${startX2},${startY2 + 50} ${endX2},${endY2 - 50} ${endX2},${endY2}`);
        }
      };

      useEffect(() => {
          updatePath(); // Initial path calculation
          window.addEventListener('resize', updatePath);
          window.addEventListener('scroll', updatePath);

          return () => {
              window.removeEventListener('resize', updatePath);
              window.removeEventListener('scroll', updatePath);
          };
      }, []);



      return (
          <section className="food-usage-1kg" ref={scrollContainerRef}>
              <h2 className='food-usage-chart-title'>Food required to produce 1kg of meat</h2>
              <motion.div 
                className='food-usage-1kg-chart'
                ref={foodUsageRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inViewControls}  
              >
                  {ressourceUsage.map((ressource, index) => (
                      <FoodTypeChart 
                        key={index} 
                        ressource={ressource}  
                        ref={chartRef} 
                      />
                  ))}
              </motion.div>

              <div className="food-produced-container">
                  <div className="meat-based-container">
                      <div className='one-kg-meat-container' ref={meatIconBorderRef}>
                          <OneKgMeatContainer />
                      </div>
                      <InfoCircle 
                        infoCircle={infoCircles[0]}
                        ref={infoCircle1Ref}
                      />
                      <div className='humans-fed-container'>
                          <HumansFedContainer humansFed={ressourceUsage[0].humansFedwithMeat} />
                      </div>
                  </div>

                  <div className="plant-based-container">
                      <InfoCircle infoCircle={infoCircles[1]} />
                      <div className='humans-fed-container-2'>
                          <HumansFedContainer humansFed={ressourceUsage[0].humansFedAlternative} />
                      </div>
                  </div>
              </div>
        <svg
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 10,
            }}
        >
            <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff3e2c" />
                    <stop offset="100%" stopColor="#a8d5ba" />
                </linearGradient>
            </defs>

            {/* Path from food-usage-1kg-chart to one-kg-meat-container */}
            <motion.path
                d={path1}
                id="path1"
                stroke="url(#flowGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="8, 16"
                style={{
                    animation: 'dashReverseAnimation 2s linear infinite'
                }}
                
            />
            <motion.path
                d={path2}
                id="path2"
                stroke="#ff3e2c"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="8, 16"
                style={{
                    animation: 'dashReverseAnimation 2s linear infinite'
                }}
                
            />
    
        </svg>

        <style>
            {`
            @keyframes dashReverseAnimation {
                0% {
                    stroke-dashoffset: 24;
                }
                100% {
                    stroke-dashoffset: 0;
                }
            }
            `}
        </style>

            </section>
        );
    };

  export default FoodRessourcesOneKg;
