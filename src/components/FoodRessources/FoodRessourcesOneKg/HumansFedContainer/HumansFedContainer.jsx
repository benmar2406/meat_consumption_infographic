import React, { forwardRef } from 'react';
import './HumansFedContainer.css'
import humanIcon from '../../../../assets/img/icons/human_grey.png'

const HumansFedContainer = forwardRef((props, ref) => {

    return(
        <>
            <div className="human-icon-grid" ref={ref}>
                {Array.from({length: props.humansFed}, (_, index) => {
                    return(
                    <div className='human-icon-container'> 
                            <img src={humanIcon} key={index}/>
                    </div>
                    )
                })}
            </div>
            <p className='humans-fed-text'>{props.humansFed} {props.humansFed === 1 ? 'human' : 'humans'} fed for 1 day</p>
        </>
    )

})

export default HumansFedContainer;