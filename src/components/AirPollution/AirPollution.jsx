import React from 'react';
import { motion } from 'framer-motion'
import './AirPollution.css'
import EmissionContainer from './EmissionContainer/EmissionContainer';


const AirPollution = () => {

    const foodEmissionsData = [ 
        { meat: true, name: "beef", emissions: "25,5", numberOfIcons: 26, carKm: 212 },
        { meat: true, name: "pig", emissions: "10,3", numberOfIcons: 10, carKm: 86 },
        { meat: true, name: "chicken", emissions: "9,2", numberOfIcons: 9, carKm: 77 },
        { meat: false, name: "soy", emissions: "2", numberOfIcons: 2, carKm: 17 },
        { meat: false, name: "wheat", emissions: "1,6", numberOfIcons: 2, carKm: 13 },
        { meat: false, name: "corn", emissions: "1,2", numberOfIcons: 1, carKm: 10 }
    ]



    return(
        <section className='air-pollution'>
        <h2>Meat vs. non-meat:<br/> Average emissions (in CO2e) from producing 1 kg</h2>
            <div className='emission-charts-container'>
                {foodEmissionsData.map((foodData, index) => {
                    return(
                        <EmissionContainer 
                            key={`emission-container-${index}`}
                            food={foodData}
                        />   
                )})}
            </div>
        </section>  
    )
}

export default AirPollution;