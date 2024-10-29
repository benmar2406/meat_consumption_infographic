import React, { forwardRef } from 'react';
import './InfoCircle.css'


const InfoCircle =  forwardRef(({ infoCircle }, ref) => {
    
    

    return(
        <div 
            className='info-circle'
            ref={ref}
            style={{
                marginTop: infoCircle.marginTop
            }}
        >
                <p style={{color: infoCircle.color}}>{infoCircle.text}</p>
        </div>
    )
});

export default InfoCircle;