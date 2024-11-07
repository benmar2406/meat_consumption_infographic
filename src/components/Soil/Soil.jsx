import React from 'react';
import { Element } from 'react-scroll';
import './Soil.css';
import SoilChart from './SoilChart/SoilChart';
import farmingImg from '../../assets/img/farming.jpg';
import soilDegradation from '../../assets/img/soil_degradation.jpg';

const Soil = () => {
  
  const soilChartsData = [
    { 
      requiredPercentage: 40, 
      requiredPercentageArticle: 80, 
      fullWidthValue: 0.9, 
      scrollEffectDirection: ["0%", "100%"],
      headline: 'Allocation of farmland (European Union)', 
      backgroundImage: `linear-gradient(rgba(168, 213, 186, 0.5), rgba(168, 213, 186, 0.5)), url(${farmingImg})`,
      backgroundColor: "rgba(255, 62, 44, 0.8)",
      meatWidth: '70%',
      chartText: 'Between 60% and 70% of farmland<br /> are utilized for meat production.',
      chartText2: '',
      altText: 'aerial view of farmland',
      article: "<p>Meat production is taking alot of space of available farming land. This land isn't available for other agricultural usages which could produce more food with less ressources.</p>",
    },  

    { 
      requiredPercentage: 70,   
      requiredPercentageArticle: 90, 
      fullWidthValue: 0.9, 
      scrollEffectDirection: ["100%", "20%"],
      headline: 'Soil degradation', 
      backgroundImage: `linear-gradient(rgba(255, 62, 44, 0.5), rgba(255, 62, 44, 0.5)), url(${soilDegradation})`,
      backgroundColor: "rgba(168, 213, 186, 0.8)",
      meatWidth: '100%',
      chartText: '',
      chartText2: 'Around 80% of deforestation in the<br/> Amazon is driven by cattle ranching.',
      altText: 'corroded soil',
      article: '<p>All types of agriculture impact the land, but animal farming is especially hard on the soil.</p>'
    }
    
  ]

  return (
    
    <section className='soil-section'>
      <Element name='soil-impact'>
        {soilChartsData.map((soilChart, index) => (
          <SoilChart 
            key={index}
            requiredPercentage={soilChart.requiredPercentage}
            fullWidthValue={soilChart.fullWidthValue}
            headline={soilChart.headline}
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
