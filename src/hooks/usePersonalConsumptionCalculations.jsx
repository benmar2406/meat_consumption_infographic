import { useMemo, useContext } from 'react';
import { TranslationContext } from '../context/TranslateContext';

const usePersonalConsumptionCalculations = (meatTypesConsumed) => {
    const { language } = useContext(TranslationContext)

    const formatNumber = (value) => {
        return new Intl.NumberFormat(language).format(value); 
    };

    const averageConsumption = 76;

    return useMemo(() => {
        
        const { beef, pig, chicken } = meatTypesConsumed;

        // Yearly consumption sum and difference from average
        const yearlyConsumption = (beef + pig + chicken) * 12;
        const differenceValue = yearlyConsumption - averageConsumption;
        const differencePercentage = (Math.abs(differenceValue) / averageConsumption) * 100;

        // Emission component
        const totalEmissions = ((beef * 25.5) + (pig * 10.3) + (chicken * 9.2)) * 12;
        const totalCarKm = ((beef * 212) + (pig * 86) + (chicken * 77)) * 12;
        const isInView = beef > 0 || pig > 0 || chicken > 0;

        // Water component
        const ltrsUsed = ((beef * 15400) + (pig * 6000) + (chicken * 4300)) * 12;
        const numberOfBathtubs = ((beef * 93) + (pig * 36) + (chicken * 26)) * 12;

        // Food component
        const calories = ((beef * 2400) + (pig * 2420) + (chicken * 1650)) * 12;
        const numberHumansFedMeat = calories / 2500; // Humans fed for one day
        const kgFodderUsed = ((beef * 25) + (pig * 3.5) + (chicken * 1.8)) * 12;
        const caloriesFodder = ((beef * 95000) + (pig * 13300) + (chicken * 6840)) * 12; // Calories in fodder
        const numberHumansFedVeg = caloriesFodder / 2500;

        return {
            yearlyConsumption: formatNumber(yearlyConsumption.toFixed(0)),
            totalEmissions: formatNumber(totalEmissions.toFixed(0)),
            totalCarKm: formatNumber(totalCarKm.toFixed(0)),
            kmPercentage: totalEmissions !== 0 ? '100%' : '0',
            isInView,
            ltrsUsed: formatNumber(ltrsUsed.toFixed(0)),
            differencePercentage: formatNumber(differencePercentage.toFixed(0)),
            numberOfBathtubs: numberOfBathtubs.toFixed(0),
            numberOfBathtubsDisplay: formatNumber(numberOfBathtubs.toFixed(0)),
            numberHumansFedMeat: numberHumansFedMeat.toFixed(0),
            numberHumansFedVeg: numberHumansFedVeg.toFixed(0),
            kgFodderUsed: formatNumber(kgFodderUsed.toFixed(0)),
            calories: formatNumber(calories.toFixed(0)),
            caloriesFodder: formatNumber(caloriesFodder.toFixed(0)),
        };
    }, [meatTypesConsumed, language]); 
};

export default usePersonalConsumptionCalculations;
