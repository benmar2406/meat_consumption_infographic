import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Emissions.css';
import EmissionContainer from './EmissionContainer/EmissionContainer';
import CarContainer from './CarContainer/CarContainer';
import Conclusion from '../Conclusion/Conclusion';


const Emissions = () => {

    const { t, i18n } = useTranslation();
    const inViewRef = useRef(null);
    const isInView = useInView(inViewRef);
   

    const foodEmissionsData = [
        { meat: true, name: t('types.beef'), emissions: "25,5", numberOfIcons: 26, carKm: 212, kmPercentage: "100%" },
        { meat: true, name: t('types.pig'), emissions: "10,3", numberOfIcons: 10, carKm: 86, kmPercentage: "40.57%" },
        { meat: true, name: t('types.chicken'), emissions: "9,2", numberOfIcons: 9, carKm: 77, kmPercentage: "36.32%" },
        { meat: false, name: t('types.soy'), emissions: "2", numberOfIcons: 2, carKm: 17, kmPercentage: "8.02%" },
        { meat: false, name: t('types.wheat'), emissions: "1,6", numberOfIcons: 2, carKm: 13, kmPercentage: "6.13%" },
        { meat: false, name: t('types.corn'), emissions: "1,2", numberOfIcons: 1, carKm: 10, kmPercentage: "4.72%" },
    ];

    const lastItemIndex = foodEmissionsData.length - 1;

    return (
        <section className="air-pollution">
            <h2 dangerouslySetInnerHTML={{ __html: t('emissions.title') }}></h2>
            <div className="emission-charts-container">
                {foodEmissionsData.map((foodData, index) => (
                    <EmissionContainer 
                    key={`emission-container-${index}`} 
                    food={foodData} />
                ))}
            </div>
            <Conclusion conclusionText={t('emissions.conclusion')}/>
            <div className="car-charts-container">
                {foodEmissionsData.map((foodData, index) => (
                    <CarContainer
                        key={`car-container-${index}`}
                        food={foodData}
                        index={index}
                        ref={index === lastItemIndex ? inViewRef : null}
                        isInView={isInView}
                    />
                ))}
            </div>
            <Conclusion conclusionText={t('emissions.conclusion2')}/>
        </section>
    );
};

export default Emissions;
