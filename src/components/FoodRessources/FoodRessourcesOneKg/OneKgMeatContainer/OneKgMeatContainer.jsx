import React, { forwardRef } from 'react';
import './OneKgMeatContainer.css'
import MeatIconContainer from '../../../MeatIconContainer/MeatIconContainer';

const OneKgMeatContainer = forwardRef((props, ref) => {
   
    return(
        <div className='meat-icon-border' ref={ref}>
            <MeatIconContainer/>
            <p>produce <br/>1kg of meat</p>
        </div>

    )

});

export default OneKgMeatContainer;