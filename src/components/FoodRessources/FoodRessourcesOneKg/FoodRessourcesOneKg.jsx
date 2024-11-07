  import React, { useRef, useEffect, useState } from 'react';
  import { motion, useAnimation, useInView } from 'framer-motion'
  import FoodTypeChart from './FoodTypeChart/FoodTypeChart';
  import useDrawPath from '../../hooks/useDrawPath';
  import useAnimateOnView from '../../hooks/useAnimateOnView';
  import './FoodRessourcesOneKg.css';
  import cowIcon from '../../../assets/img/icons/cow.png';
  import OneKgMeatContainer from './OneKgMeatContainer/OneKgMeatContainer';
  import HumansFedContainer from './HumansFedContainer/HumansFedContainer';
  import InfoCircle from './InfoCircle/InfoCircle';

  const ressourceUsage = [
    { type: "beef", foodUsageKg: 25, AnimalIcon: cowIcon, humansFedwithMeat: 1, humansFedAlternative: 36, cssSelector: "type-meat-water-container" }
];

  const infoCircles = [
    {type: 'meat', color: '#ff3e2c', text: 'feeds', marginTop: '0'},
    {type: 'vegetarian', color: '#a8d5ba', text: 'feed', marginTop: '0'},
  ]

  const FoodRessourcesOneKg = () => {

      const foodUsageRef = useRef(null)
      const chartRef = useRef(null);
      const meatIconRef = useRef(null); 
      const infoCircle1Ref = useRef(null); 
      const humansFed1Ref = useRef(null);
      const infoCircle2Ref = useRef(null); 
      const humansFed2Ref = useRef(null);
      

      const { path1, path2, path3, path4, path5 } = useDrawPath(
        chartRef,
        meatIconRef,
        infoCircle1Ref,
        humansFed1Ref,
        infoCircle2Ref,
        humansFed2Ref
      )

      const { inViewControls, initial } = useAnimateOnView(
        foodUsageRef
      )


      return (
          <section className="food-usage-1kg">
              <motion.div 
                initial={initial}
                animate={inViewControls}
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
              </motion.div>
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
