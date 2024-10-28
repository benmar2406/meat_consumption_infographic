import React, { useState, useEffect } from 'react';

const SectionDot = ({ index }) => {
    
    return(
        <div 
            className='section-dot'
            style={{ 
                top: `${40 + (index * 37)}px`,
                backgroundColor: '#e3e3e3',
                transition: 'all 0.7s ease'
            }}
            >
        </div>
    )
}
export default SectionDot;