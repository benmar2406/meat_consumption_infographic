  import React, { useRef, useEffect, useState } from 'react';
  import { motion, useAnimation, useInView } from 'framer-motion'
  import FoodTypeChart from './FoodTypeChart/FoodTypeChart';
  import updatePath from './updatePath'
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
        {type: 'meat', color: '#ff3e2c', text: 'feeds', marginTop: '0'},
        {type: 'vegetarian', color: '#a8d5ba', text: 'feed', marginTop: '0'},
      ]

      const foodUsageRef = useRef(null)
      const chartRef = useRef(null);
      const meatIconRef = useRef(null); 
      const infoCircle1Ref = useRef(null); 
      const humansFed1Ref = useRef(null);
      const infoCircle2Ref = useRef(null); 
      const humansFed2Ref = useRef(null);
      
      const [path1, setPath1] = useState('');
      const [path2, setPath2] = useState('');
      const [path3, setPath3] = useState('');
      const [path4, setPath4] = useState('');
      const [path5, setPath5] = useState('');

      const isInView = useInView(chartRef, { once: true })

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


      useEffect(() => {
        updatePath(
            chartRef, meatIconRef, infoCircle1Ref, humansFed1Ref, infoCircle2Ref, humansFed2Ref, setPath1, setPath2, setPath3, setPath4, setPath5
        );

        window.addEventListener('resize', () =>
            updatePath(
              chartRef, meatIconRef, infoCircle1Ref, humansFed1Ref, infoCircle2Ref, humansFed2Ref, setPath1, setPath2, setPath3, setPath4, setPath5
            )
        );
        window.addEventListener('scroll', () =>
            updatePath(
              chartRef, meatIconRef, infoCircle1Ref, humansFed1Ref, infoCircle2Ref, humansFed2Ref, setPath1, setPath2, setPath3, setPath4, setPath5
            )
        );

        return () => {
            window.removeEventListener('resize', updatePath);
            window.removeEventListener('scroll', updatePath);
        };
    }, []);


      return (
          <section className="food-usage-1kg">
              <h2 className='food-usage-chart-title'>Food required to produce 1kg of meat</h2>
              <div 
                className='food-usage-1kg-chart'
                ref={foodUsageRef}
              >
                  {ressourceUsage.map((ressource, index) => (
                      <FoodTypeChart 
                        key={index} 
                        ressource={ressource}  
                        ref={chartRef} 
                      />
                  ))}
              </div>
              <div className="food-produced-container">
                <div className="meat-based-container"
                >
                  <div 
                    className='one-kg-meat-container'
                    >
                      <OneKgMeatContainer ref={meatIconRef}/>
                  </div>

                  <div>
                    <InfoCircle 
                      infoCircle={infoCircles[0]}
                      ref={infoCircle1Ref}
                    />
                  </div>
                  <div 
                    className='humans-fed-container'>
                      <HumansFedContainer 
                        humansFed={ressourceUsage[0].humansFedwithMeat} 
                        ref={humansFed1Ref} 
                        display={'inline-grid'}
                        />
                  </div>
                </div>

                <div className="plant-based-container">
                    <InfoCircle 
                      infoCircle={infoCircles[1]} 
                      ref={infoCircle2Ref}
                />
                <div className='humans-fed-container-2'>
                    <HumansFedContainer 
                      humansFed={ressourceUsage[0].humansFedAlternative}
                      ref={humansFed2Ref} 
                      display={'grid'}
                    />
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
            <motion.path
                d={path3}
                id="path3"
                stroke="#ff3e2c"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="8, 16" 
                style={{
                    animation: 'dashReverseAnimation 2s linear infinite'
                }}  
            />
            <motion.path
                d={path4}
                id="path4"
                stroke="#a8d5ba"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="8, 16"
                style={{
                    animation: 'dashReverseAnimation 2s linear infinite'
                }}
            />

            <motion.path
                d={path5}
                id="path5"
                stroke="#a8d5ba"
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
