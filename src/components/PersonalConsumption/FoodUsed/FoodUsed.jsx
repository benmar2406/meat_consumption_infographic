import React from 'react';
import './FoodUsed.css';
import PersonalFedContainer from './PersonalFedContainer/PersonalFedContainer';

const FoodUsed = ({ 
    numberHumansFedMeat, 
    numberHumansFedVeg, 
    kgFodderUsed, 
    caloriesFodder, 
    calories, 
    yearlyConsumption, 
    t 
}) => {

    const foodData = [
        {text: `${yearlyConsumption}kg ${t('personalConsumption.ofMeat')}:`, humansFed: numberHumansFedMeat},
        {text: `${kgFodderUsed}kg ${t('personalConsumption.ofFoodRessources')}:`, humansFed: numberHumansFedVeg}
    ]
    
    return (
        <>
            <div className='food-consumed-container'>
                <h3>{t('personalConsumption.subTitle')}</h3>
                <div className='text-container'>
                    <div className='number-displayed-container'>
                        <span className='number-displayed'>{kgFodderUsed}</span>
                        <p>{t('personalConsumption.kgFodder')}</p>
                    </div>
                    <article className='personal-ressources-article'>
                        <p>{t('personalConsumption.fodderComparison1')} {calories} {t('personalConsumption.calories')}.</p>
                        <p>{t('personalConsumption.fodderComparison2')} {caloriesFodder} {t('personalConsumption.calories')}.</p>
                        <p>{t('personalConsumption.fodderComparison3')}</p>
                    </article>
                </div>
                <h3>{t('personalConsumption.subTitleFed')}</h3>
                <div className='charts-container-personal-fed'>
                    {foodData.map((food, index) =>(
                        <PersonalFedContainer 
                            humansFed={food.humansFed} 
                            foodTypeDescription={food.text}
                            key={index}
                            t={t}
                        />
                    ))}
                </div>
            </div>
        </>    
            
    );
    };

export default FoodUsed;