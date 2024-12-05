import React, { useContext } from 'react';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { DeviceContext } from "../../context/deviceContext";
import './Soil.css';
import SoilChart from './SoilChart/SoilChart';
import farmingImg from '../../assets/img/farming.jpg';
import soilDegradation from '../../assets/img/soil_degradation.jpg';

const Soil = () => {

  const { t, i18n } = useTranslation();

  const { notDesktop } = useContext(DeviceContext)
  
  const soilChartsData = [
    { 
      requiredPercentage: 65, 
      requiredPercentageArticle: 95, 
      fullWidthValue: notDesktop ? 0 : 0.9, 
      scrollEffectDirection: ["0%", "100%"],
      title: t('soil.title1'), 
      backgroundImage: `linear-gradient(rgba(168, 213, 186, 0.5), rgba(168, 213, 186, 0.5)), url(${farmingImg})`,
      backgroundColor: "rgba(255, 62, 44, 0.8)",
      meatWidth: '70%',
      chartText: t('soil.chartText1'),
      chartText2: '',
      altText:  t('soil.alt1'),
      article: t('soil.article1')
    },  

    { 
      requiredPercentage: notDesktop ? 0 : 80,   
      requiredPercentageArticle: notDesktop ? 0 : 90, 
      fullWidthValue:  notDesktop ? 0 : 1, 
      scrollEffectDirection: ["100%", "20%"],
      title: t('soil.title2'), 
      backgroundImage: `linear-gradient(rgba(255, 62, 44, 0.8), rgba(255, 62, 44, 0.8)), url(${soilDegradation})`,
      backgroundColor: "rgba(168, 213, 186, 0.8)",
      meatWidth: '100%',
      chartText: '',
      chartText2: t('soil.chartText2'),
      altText: t('soil.alt2'),
      article:  t('soil.article2')
    }
    
  ]

  return (
    
    <section className='soil'>
      <Element name='soil-impact'>
        {soilChartsData.map((soilChart, index) => (
          <SoilChart 
            key={index}
            requiredPercentage={soilChart.requiredPercentage}
            fullWidthValue={soilChart.fullWidthValue}
            headline={soilChart.title}
            backgroundImage={soilChart.backgroundImage}
            backgroundColor={soilChart.backgroundColor}
            chartText={soilChart.chartText}
            article={soilChart.article}
            requiredPercentageArticle={soilChart.requiredPercentageArticle}
            scrollEffectDirection={soilChart.scrollEffectDirection}
            meatWidth={soilChart.meatWidth}
            chartText2={soilChart.chartText2}
          />
        ))}
        </Element>
    </section>
  
  );    
}

export default Soil;
