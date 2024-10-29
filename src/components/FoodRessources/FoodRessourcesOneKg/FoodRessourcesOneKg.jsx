import React, { useRef, useEffect } from 'react';
import { useScroll, useTransform, motion, useAnimation } from "framer-motion";
import FoodTypeChart from './FoodTypeChart/FoodTypeChart';
import './FoodRessourcesOneKg.css';
import cowIcon from '../../../assets/img/icons/cow.png';
import OneKgMeatContainer from './OneKgMeatContainer/OneKgMeatContainer';
import HumansFedContainer from './HumansFedContainer/HumansFedContainer';

const FoodRessourcesOneKg = () => {
    const ressourceUsage = [
        { type: "beef", foodUsageKg: 25, AnimalIcon: cowIcon, humansFedwithMeat: 1, humansFedAlternative: 36, cssSelector: "type-meat-water-container" }
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
        target: scrollContainerRef
    });

    const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

    useEffect(() => {
        const unsubscribe = scrollPercentage.on("change", (latestPercentage) => {
            const scrollBreakpoints = [10, 40, 60, 80];
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

        const updateSVGPaths = () => {
    if (
        chartRef.current &&
        meatIconBorderRef.current &&
        humansFedRef.current &&
        humansFedAltRef.current &&
        svgRef.current
    ) {
        const svgElement = svgRef.current;

        const getSVGCoords = (element) => {
            const rect = element.getBoundingClientRect();
            const point = svgElement.createSVGPoint();
            point.x = rect.left + rect.width / 2;
            point.y = rect.top + rect.height / 2;
            const CTM = svgElement.getScreenCTM().inverse();
            return point.matrixTransform(CTM);
        };

        const chartCoords = getSVGCoords(chartRef.current);
        const meatCoords = getSVGCoords(meatIconBorderRef.current);
        const humansFedCoords = getSVGCoords(humansFedRef.current);
        const humansFedAltCoords = getSVGCoords(humansFedAltRef.current);

        // Update path for Chart to Meat Container
        const path1 = svgElement.querySelector('#path1');
        path1.setAttribute('d', `M${chartCoords.x},${chartCoords.y} L${meatCoords.x},${meatCoords.y}`);

        // Update path for Chart to Humans Fed Alternative Container
        const path2 = svgElement.querySelector('#path2');
        path2.setAttribute('d', `M${chartCoords.x},${chartCoords.y} L${humansFedAltCoords.x},${humansFedAltCoords.y}`);

        // Update path for Meat Container to Humans Fed Container
        const path3 = svgElement.querySelector('#path3');
        path3.setAttribute('d', `M${meatCoords.x},${meatCoords.y} L${humansFedCoords.x},${humansFedCoords.y}`);
    }
};

        

        // Update SVG paths on scroll
        window.addEventListener('scroll', updateSVGPaths);

        // Initial update
        updateSVGPaths();

        return () => {
            window.removeEventListener('scroll', updateSVGPaths);
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
                        initial={{ opacity: 0, scale: 0.8 }}
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
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={controlsArray[1]}
                    >
                        <OneKgMeatContainer />
                    </motion.div>

                    <motion.div
                        className='humans-fed-container'
                        ref={humansFedRef}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={controlsArray[2]}
                    >
                        <HumansFedContainer humansFed={ressourceUsage[0].humansFedwithMeat} />
                    </motion.div>
                    <motion.div
                        className='humans-fed-container-2'
                        ref={humansFedAltRef}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={controlsArray[3]}
                    >
                        <HumansFedContainer humansFed={ressourceUsage[0].humansFedAlternative} />
                    </motion.div>

                    {/* SVG with motion paths for animated connections */}
                    <motion.svg className="svg-connection-lines" ref={svgRef}>
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
                    </motion.svg>
                </div>
            </div>
        </section>
    );
};

export default FoodRessourcesOneKg;
