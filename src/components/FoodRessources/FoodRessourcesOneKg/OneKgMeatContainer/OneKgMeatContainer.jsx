import React, { forwardRef } from 'react';
import './OneKgMeatContainer.css';
import { useTranslation } from 'react-i18next';
import MeatIconContainer from '../../../MeatIconContainer/MeatIconContainer';

const OneKgMeatContainer = forwardRef((props, ref) => {

    const { t, i18n } = useTranslation();
   
    return(
        <div className='meat-icon-border' ref={ref}>
            <MeatIconContainer/>
            <p dangerouslySetInnerHTML={{ __html: t('foodConsumption.produce') }}></p>
        </div>

    )

});

export default OneKgMeatContainer;