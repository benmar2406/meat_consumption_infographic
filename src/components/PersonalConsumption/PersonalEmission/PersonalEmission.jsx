import { useState, useEffect } from 'react';
import CarContainer from '../../Emissions/CarContainer/CarContainer';

const PersonalEmission = ({ emissions, carKm, kmPercentage, t }) => {

    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (emissions > 0) {
            setIsInView(true)
        } else {
            setIsInView(false)
        }
    }, [emissions, carKm])

    const food = { meat: true, name: t('personalConsumption.equalCarKm'), emissions: emissions, carKm: carKm, kmPercentage: kmPercentage }

    return (
            <div className='personal-emission'>
                <h3>{t('personalConsumption.subTitleEmissions')}</h3>
                <span className='number-displayed'>{emissions}</span><span>kg CO₂e</span>
                <CarContainer 
                    food={food} 
                    isInView={isInView} 
                    />
            </div>
    );
};  

export default PersonalEmission;
