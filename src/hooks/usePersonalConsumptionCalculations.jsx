import { useMemo } from 'react';

const usePersonalConsumptionCalculations = (meatTypesConsumed) => {
    
    const averageConsumption = 76;
    
    return useMemo(() => {

        const { beef, pig, chicken } = meatTypesConsumed;

        //yearly consumption sum and difference from average
        const yearlyConsumption = (beef + pig + chicken) * 12;
        const differenceValue = yearlyConsumption - averageConsumption;
        const differencePercentage = ((Math.abs(differenceValue) / averageConsumption) * 100)

        //emission component
        const totalEmissions = ((beef * 25.5) + (pig * 10.3) + (chicken * 9.2)) * 12;
        const totalCarKm = ((beef * 212) + (pig * 86) + (chicken * 77)) * 12;
        const isInView = beef > 0 || pig > 0 || chicken > 0;

        //water component
        const ltrsUsed = ((beef * 15400) + (pig * 6000) +(chicken * 4300)) * 12;
        const numberOfBathtubs = ((beef * 93) + (pig * 36) +(chicken * 26)) * 12;

        //food component
        const calories = ((beef * 2400) + (pig * 2420) + (chicken * 1650)) * 12;
        const numberHumansFedMeat = calories / 2500  //humans fed for one day, a human requires on avg. 2500 calories per day
        const kgFodderUsed = ((beef * 25) + (pig * 3.5) + (chicken * 1.8)) * 12
        const caloriesFodder = ((beef * 95.000) + (pig * 13300) + (chicken * 6840)) * 12//calculated with calories, f.e. the fodder required for one kg on average includes 95k calories
        const numberHumansFedVeg = caloriesFodder / 2500

        return {
            yearlyConsumption: yearlyConsumption.toFixed(0),
            totalEmissions: totalEmissions.toFixed(0),
            totalCarKm: totalCarKm.toFixed(0),
            kmPercentage: totalEmissions !== 0 ? '100%' : '0',
            isInView,
            ltrsUsed: ltrsUsed.toFixed(0),
            differencePercentage: differencePercentage.toFixed(0),
            numberOfBathtubs: numberOfBathtubs.toFixed(0),
            numberHumansFedMeat: numberHumansFedMeat.toFixed(0),
            numberHumansFedVeg: numberHumansFedVeg.toFixed(0),
            kgFodderUsed: kgFodderUsed.toFixed(0),
            calories: calories.toFixed(0),
            caloriesFodder: caloriesFodder.toFixed(0)
        };

    }, [meatTypesConsumed]);
    
};

export default usePersonalConsumptionCalculations;




