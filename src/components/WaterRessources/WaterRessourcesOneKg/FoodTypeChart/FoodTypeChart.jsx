import React from 'react';
    import WaterIconContainer from '../../../WaterIconContainer/WaterIconContainer';
import './FoodTypeChart.css'



const FoodTypeChart = ({ food }) => {

    const dropWidth = '35%'
    const dropHeight = '35%'
    const mindropHeight = '25px'
    const mindropWidth = '25px'
    const maxdropHeight = '50px'
    const maxdropWidth  = '50px'
    const altText = '100 litres of water'
    const dropFill = '#a2d3e2'

    const waterDropProps = { dropWidth, dropHeight, mindropHeight, mindropWidth, maxdropHeight, maxdropWidth, altText, dropFill };

    return(
        <div className='food-chart-container' aria-labelledby="chart-title">
            <div className={food.cssSelector}><img className='type-water-ressources-icon' src={food.icon} alt={`${food.type}-icon`}/></div>
            <h2 className='food-type-water-usage'>1kg of {food.type}</h2>
            <div className='grid-water-usage-1kg'
                role="img" 
                aria-hidden="true"
            >
            {Array.from({ length: food.numberOfDrops }, (_ ,index) => {
                return(
                    <WaterIconContainer 
                        key={index}
                        {...waterDropProps}
                    />
                )
            })}
            </div>
            <div className='water-used-for-1kg'>
                <h3 className='food-type-title' aria-label={`Amount of water required for producing 1kg of ${food.type}: `}>{food.waterUsage} ltrs</h3>
            </div>
        </div>
    )
}

export default FoodTypeChart;