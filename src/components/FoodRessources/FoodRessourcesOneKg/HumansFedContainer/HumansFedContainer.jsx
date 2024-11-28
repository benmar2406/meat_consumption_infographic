import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import './HumansFedContainer.css'
import humanIcon from '../../../../assets/img/icons/human_grey.png'

const HumansFedContainer = forwardRef((props, ref) => {

    const { t, i18n } = useTranslation();

    return(
        <>
            <div 
                className="human-icon-grid" 
                ref={ref}
                style={{display: props.display}}
                >
                {Array.from({length: props.humansFed}, (_, index) => {
                    return(
                    <div className='human-icon-container'> 
                            <img 
                            src={humanIcon} 
                            key={index}
                            alt={t('foodConsumption.altHuman')}
                            />
                    </div>
                    )
                })}
            </div>
            <p className='humans-fed-text'>{props.humansFed} {props.humansFed === 1 ? t('foodConsumption.human') : t('foodConsumption.humans')} {t('foodConsumption.day')}</p>
        </>
    )

})

export default HumansFedContainer;