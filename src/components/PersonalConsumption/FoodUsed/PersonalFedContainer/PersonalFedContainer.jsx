import React from 'react';
import humanIcon from '../../../../assets/img/icons/human_grey.png'

const PersonalFedContainer = ({ humansFed, foodTypeDescription, t }) => {

    return(
        <div className='personal-fed-container'>
            <p className='food-type-description'>{foodTypeDescription}</p>
            <p className='humans-fed-text'>{humansFed} {humansFed === 1 ? t('foodConsumption.human') : t('foodConsumption.humans')} {t('foodConsumption.day')}</p>
            <div 
                className="human-icon-grid" 
                >
                {Array.from({ length: humansFed }, (_, index) => {
                    return(
                        <div 
                            className='human-icon-container'
                            key={"icon-" + index}> 
                            <img 
                                src={humanIcon} 
                                alt={t('foodConsumption.altHuman')}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PersonalFedContainer;