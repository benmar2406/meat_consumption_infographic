import React from 'react';
import FoodTypeChart from './FoodTypeChart/FoodTypeChart';
import './FoodRessourcesOneKg.css'
import cowIcon from '../../../assets/img/icons/cow.png'
import pigIcon from '../../../assets/img/icons/pig.png'
import chickenIcon from '../../../assets/img/icons/chicken.png'
import soyIcon from '../../../assets/img/icons/soy.png'
import wheatIcon from '../../../assets/img/icons/wheat.png'
import vegetablesIcon from '../../../assets/img/icons/vegetables.png'
import cornIcon from '../../../assets/img/icons/corn.png'


const FoodRessourcesOneKg = ( ) => {
   
    const ressourceUsage = [
        {type: "beef", foodUsageKg: 25, AnimalIcon: cowIcon, cssSelector: "type-meat-water-container" },
        {type: "pig", foodUsageKg: 7, AnimalIcon: pigIcon, cssSelector: "type-meat-water-container"  },
        {type: "chicken", foodUsageKg: 4, AnimalIcon: chickenIcon, cssSelector: "type-meat-water-container"  }
    ]

    
    return(
        <section className="food-usage-1kg">
            <h2 className='food-usage-chart-title'>Different foods: water required to produce 1kg</h2>
            <div className='food-usage-1kg-charts'>
                {foods.map((food, index) => {
                    return(
                        <FoodTypeChart 
                            key={index}
                            chartIndex={index}
                            ressourceUsage={ressourceUsage}
                        />
                )})}
            </div>

        </section>
    )

};

export default FoodRessourcesOneKg;