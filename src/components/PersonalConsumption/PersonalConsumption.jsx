import { useState, useContext } from 'react';
import { Element } from 'react-scroll';
import { TranslationContext } from '../../context/TranslateContext'; 
import usePersonalConsumptionCalculations from '../../hooks/usePersonalConsumptionCalculations';
import './PersonalConsumption.css'
import ConsumptionForm from './ConsumptionForm/ConsumptionForm';
import YearlyConsumption from './YearlyConsumption/YearlyConsumption';
import PersonalEmission from './PersonalEmission/PersonalEmission';
import WaterConsumption from './WaterConsumption/WaterConsumption';
import FoodUsed from './FoodUsed/FoodUsed';
import LazyLoad from 'react-lazyload';

const PersonalConsumption = () => {

    const { t } = useContext(TranslationContext)

    const [meatTypesConsumed, setMeatTypesConsumed] = useState({
        beef: 0,
        pig: 0,
        chicken: 0,
      });

      const {
        yearlyConsumption,
        differencePercentage,
        totalEmissions,
        totalCarKm,
        kmPercentage,
        isInView,
        ltrsUsed,
        numberOfBathtubs,
        numberOfBathtubsDisplay,
        numberHumansFedMeat, 
        numberHumansFedVeg, 
        kgFodderUsed,
        calories,
        caloriesFodder

    } = usePersonalConsumptionCalculations(meatTypesConsumed);
    

    const handleConsumptionChange = (name, newValue) => {
        setMeatTypesConsumed((prevValues) => ({
        ...prevValues,
        [name]: newValue, 
        }));
    };
    

  return (
        <Element name='personal-consumption-dashboard'>
            <section className='personal-consumption'>
                <h2>{t('personalConsumption.mainTitle')}</h2>
                <LazyLoad height={800} offset={200}>
                    <div className='content-container'>
                        <ConsumptionForm 
                            onConsumptionChange={handleConsumptionChange} 
                            values={meatTypesConsumed} 
                            t={t} />
                        <YearlyConsumption 
                            yearlyConsumption={yearlyConsumption} 
                            difference={differencePercentage} 
                            t={t} />
                        <PersonalEmission 
                            emissions={totalEmissions} 
                            carKm={totalCarKm} 
                            kmPercentage={kmPercentage} 
                            isInView={isInView} 
                            t={t} />
                        <WaterConsumption 
                            ltrsUsed={ltrsUsed} 
                            numberOfBathtubs={numberOfBathtubs} 
                            t={t}
                            numberOfBathtubsDisplay={numberOfBathtubsDisplay} />
                        <FoodUsed 
                            numberHumansFedMeat={numberHumansFedMeat} 
                            numberHumansFedVeg={numberHumansFedVeg} 
                            kgFodderUsed={kgFodderUsed} 
                            calories={calories}
                            caloriesFodder={caloriesFodder}
                            yearlyConsumption={yearlyConsumption}
                            t={t}
                            />
                    </div>
                </LazyLoad>
            </section>
        </Element>
  );
};

export default PersonalConsumption;
