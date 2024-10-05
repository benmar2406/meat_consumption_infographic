import React, { useState, useEffect } from 'react';

const SectionDot = ({ index, clickedIndex }) => {

    const [backgroundColor, setBackgroundColor] = useState('antiquewhite')
    
    useEffect(() => {
        if (clickedIndex === index) {
            setBackgroundColor('#ff3e2c')
        } else {
            setBackgroundColor('antiquewhite')
        }
    }, [clickedIndex, index])

    
    return(
        <div 
            className='section-dot'
            style={{ 
                top: `${40 + (index * 37)}px`,
                backgroundColor: backgroundColor,
                transition: 'all 0.7s ease'
            }}
            >
        </div>
    )
}
export default SectionDot;