import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import CornIconContainer from '../../../CornIconContainer/CornIconContainer';
import './FoodTypeChart.css'

const FoodTypeChart = forwardRef(({ ressource }, ref) => {
    const cornWidth = "27px";
    const cornHeight = "27px";
    const minCornHeight = "20px";
    const minCornWidth = "20px";
    const maxCornHeight = "40px";
    const maxCornWidth = "40px";

    const cornIconProps = { cornWidth, cornHeight, minCornHeight, minCornWidth, maxCornHeight, maxCornWidth };

    const gridRef = useRef(); // Internal ref to be used within the component
    const isInView = useInView(gridRef, { once: true });
    const controls = useAnimation();

    // Use useImperativeHandle to expose the gridRef to the parent correctly
    useImperativeHandle(ref, () => ({
        gridElement: gridRef.current // Expose the gridRef to the parent component
    }));

    useEffect(() => {
        if (isInView) {
            controls.start({
                scale: 1,
                opacity: 1,
                transition: {
                    type: 'spring',
                    stiffness: 600,
                    damping: 20,
                    delay: 0.3
                }
            });
        }
    }, [isInView, controls]);

    return (
        <motion.div
            className="food-consumed-chart-container"
            aria-labelledby="chart-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
        >
            <div className="animal-icon-container">
                <img className="type-animal-icon" src={ressource.AnimalIcon} alt={`${ressource.type}-icon`} />
            </div>
            <p className="animal-type-ressource-usage">{`The amount of food required to produce one kg of meat (beef):`}</p>
            <div
                className="grid-food-usage-1kg"
                role="img"
                aria-hidden="true"
                ref={gridRef} 
            >
                {Array.from({ length: ressource.foodUsageKg }, (_, index) => {
                    return (
                        <CornIconContainer key={index} {...cornIconProps} />
                    );
                })}
            </div>
            <div className="food-used-for-1kg">
                <h3 className="food-consumed-title" aria-label={`Amount of food required for producing 1kg of`}>
                    {ressource.foodUsageKg} kg of food
                </h3>
            </div>
        </motion.div>
    );
});

export default FoodTypeChart;
