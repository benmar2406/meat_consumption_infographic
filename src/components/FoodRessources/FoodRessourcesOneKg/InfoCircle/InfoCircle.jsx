import React, { forwardRef } from 'react';
import './InfoCircle.css'


const InfoCircle =  forwardRef(({ infoCircle }, ref) => {
    
    

    return(
        <div 
            className='info-circle'
            ref={ref}
        >
                <p style={{color: infoCircle.color}}>feeds</p>
        </div>
    )
});

export default InfoCircle;