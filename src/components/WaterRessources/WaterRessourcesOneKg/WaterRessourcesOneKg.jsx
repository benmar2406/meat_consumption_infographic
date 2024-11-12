import React from 'react';
import FoodTypeChart from './FoodTypeChart/FoodTypeChart';
import './WaterRessourcesOneKg.css'
import cowIcon from '../../../assets/img/icons/cow.png'
import pigIcon from '../../../assets/img/icons/pig.png'
import chickenIcon from '../../../assets/img/icons/chicken.png'
import soyIcon from '../../../assets/img/icons/soy.png'
import wheatIcon from '../../../assets/img/icons/wheat.png'
import vegetablesIcon from '../../../assets/img/icons/vegetables.png'
import ChartLegend from '../../ChartLegend/ChartLegend'


const WaterRessourcesOneKg = ( ) => {
   
    const foods = [
        {meat: true, name: "beef", waterUsage: "15,400", numberOfDrops: 154, numberOfBathtubs: 93, icon: cowIcon, cssSelector: "type-meat-water-container" },
        {meat: true, name: "pig", waterUsage: "6,000", numberOfDrops: 60, numberOfBathtubs: 36, icon: pigIcon , cssSelector: "type-meat-water-container"  },
        {meat: true, name: "chicken",  waterUsage: "4,300", numberOfDrops: 43, numberOfBathtubs: 26, icon: chickenIcon, cssSelector: "type-meat-water-container"  },
        {meat: false, name: "soy", waterUsage: "2,150", numberOfDrops: 22, numberOfBathtubs: 13, icon: soyIcon, cssSelector: "type-non-meat-water-container"  },
        {meat: false, name: "wheat", waterUsage: "1,600", numberOfDrops: 16, numberOfBathtubs: 9, icon: wheatIcon, cssSelector: "type-non-meat-water-container" },
        {meat: false, name: "vegetables", waterUsage: "322", numberOfDrops: 3, numberOfBathtubs: 2, icon: vegetablesIcon, cssSelector: "type-non-meat-water-container"  }
    ]

    
    return(
        <section className="water-usage-1kg">
            <h2 className='water-usage-chart-title'>Different foods: water required to produce 1kg</h2>
            <ChartLegend/>
            <div className='water-usage-1kg-charts'>
                {foods.map((food, index) => {
                    return(
                        <FoodTypeChart 
                            key={index}
                            chartIndex={index}
                            food={food}
                        />
                )})}
            </div>

        </section>
    )

};

export default WaterRessourcesOneKg;