import WaterConsumptionChart from './WaterConsumptionChart/WaterConsumptionChart';

const WaterConsumption = ({ ltrsUsed, numberOfBathtubs, t, numberOfBathtubsDisplay }) => {
    
    return (
        <>
            <div className='water-consumed-container'>
                <h3>{t('personalConsumption.subTitleWater')}</h3>
                <WaterConsumptionChart 
                    ltrsUsed={ltrsUsed} 
                    numberOfBathtubs={numberOfBathtubs} 
                    numberOfBathtubsDisplay={numberOfBathtubsDisplay}
                    t={t}
                />
            </div>
        </>    
            
    );
};

export default WaterConsumption;