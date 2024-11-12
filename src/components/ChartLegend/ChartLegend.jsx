
import React from 'react'
import './ChartLegend.css'
import BathtubIconContainer from '../BathtubIconContainer/BathtubIconContainer'

const bathtubWidth = '35%'
    const bathtubHeight = '35%'
    const minbathtubHeight = '30px'
    const minbathtubWidth = '30px'
    const maxdbathtubHeight = '50px'
    const maxbathtubWidth  = '50px'
    const bathtubAltText = 'one filled bathtub'

    const bathtubProps = { bathtubWidth, bathtubHeight, minbathtubHeight, minbathtubWidth, maxdbathtubHeight, maxbathtubWidth, bathtubAltText };


const ChartLegend = () => {
    return(
        <div className='legend-container'>
            <p>1 </p>
            <BathtubIconContainer
                {...bathtubProps}
            />
            <p> fits 165 litres</p>
        </div>
    )
}

export default ChartLegend;