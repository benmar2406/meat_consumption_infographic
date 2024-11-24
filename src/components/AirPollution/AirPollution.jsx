import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import './AirPollution.css';
import EmissionContainer from './EmissionContainer/EmissionContainer';
import CarContainer from './CarContainer/CarContainer';
import Conclusion from '../Conclusion/Conclusion'

const conclusionText = "The amount of CO2 produced per kilogram, expressed as equivalent kilometres driven by car:"
const conclusionText2 = "The production of meat generates significantly higher greenhouse gas emissions compared to plant-based foods."

const foodEmissionsData = [
    { meat: true, name: "beef", emissions: "25,5", numberOfIcons: 26, carKm: 212, kmPercentage: "100%" },
    { meat: true, name: "pig", emissions: "10,3", numberOfIcons: 10, carKm: 86, kmPercentage: "40.57%" },
    { meat: true, name: "chicken", emissions: "9,2", numberOfIcons: 9, carKm: 77, kmPercentage: "36.32%" },
    { meat: false, name: "soy", emissions: "2", numberOfIcons: 2, carKm: 17, kmPercentage: "8.02%" },
    { meat: false, name: "wheat", emissions: "1,6", numberOfIcons: 2, carKm: 13, kmPercentage: "6.13%" },
    { meat: false, name: "corn", emissions: "1,2", numberOfIcons: 1, carKm: 10, kmPercentage: "4.72%" },
];

const AirPollution = () => {

    const lastItemIndex = foodEmissionsData.length - 1;
    const inViewRef = useRef(null);
    const isInView = useInView(inViewRef);
   
    return (
        <section className="air-pollution">
            <h2>Meat vs. non-meat:<br />Average emissions (in CO2e) from producing 1 kg</h2>
            <div className="emission-charts-container">
                {foodEmissionsData.map((foodData, index) => (
                    <EmissionContainer 
                    key={`emission-container-${index}`} 
                    food={foodData} />
                ))}
            </div>
            <Conclusion conclusionText={conclusionText}/>
            <div className="car-charts-container">
                {foodEmissionsData.map((foodData, index) => (
                    <CarContainer
                        key={`car-container-${index}`}
                        food={foodData}
                        index={index}
                        ref={index === lastItemIndex ? inViewRef : null}
                        isInView={isInView}
                    />
                ))}
            </div>
            <Conclusion conclusionText={conclusionText2}/>
        </section>
    );
};

export default AirPollution;
