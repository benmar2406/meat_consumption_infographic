import React from 'react';
import FoodTypeChart from './FoodTypeChart/FoodTypeChart';
import './WaterRessourcesOneKg.css'
import cowIcon from '../../../assets/img/icons/cow.png'
import pigIcon from '../../../assets/img/icons/pig.png'
import chickenIcon from '../../../assets/img/icons/chicken.png'
import soyIcon from '../../../assets/img/icons/soy.png'
import wheatIcon from '../../../assets/img/icons/wheat.png'
import vegetablesIcon from '../../../assets/img/icons/vegetables.png'


const WaterRessourcesOneKg = ( ) => {
   
    const foods = [
        {type: "beef", waterUsage: "15,400", numberOfDrops: 154, icon: cowIcon, cssSelector: "type-meat-water-container" },
        {type: "pig", waterUsage: "6,000", numberOfDrops: 60, icon: pigIcon , cssSelector: "type-meat-water-container"  },
        {type: "chicken", waterUsage: "4,300", numberOfDrops: 43, icon: chickenIcon, cssSelector: "type-meat-water-container"  },
        {type: "soy", waterUsage: "2,150", numberOfDrops: 22, icon: soyIcon, cssSelector: "type-non-meat-water-container"  },
        {type: "wheat", waterUsage: "1,600", numberOfDrops: 16, icon: wheatIcon, cssSelector: "type-non-meat-water-container" },
        {type: "vegetables", waterUsage: "322", numberOfDrops: 3, icon: vegetablesIcon, cssSelector: "type-non-meat-water-container"  }
    ]

    
    return(
        <section className="water-usage-1kg">
            <h2 className='water-usage-chart-title'>Different foods: water required to produce 1kg</h2>
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