import React, { useState, useRef }  from 'react';
import { useInView } from "framer-motion";
import './EnvironmentalImpact.css';
import ImpactCard from './ImpactCard/ImpactCard';
import soil from '../../assets/img/soil_degradation.jpg';
import water from '../../assets/img/water.jpg';
import air from '../../assets/img/air.jpg';
import fire from '../../assets/img/fire.jpg';
 
const EnvironmentalImpact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedCardIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const impactTopics = [
    { topic: 'Soil', image: soil, alt: 'corroded soil', details: '<article><p>Rising meat demand impacts the environment through overgrazing, which depletes soil and causes erosion, and overfarming, especially monocultures, that strip soil nutrients.</p><br><p>Additionally, deforestation for new pastures displaces wildlife and accelerates climate change, marking a significant toll on ecosystems.</p></article>' },
    { topic: 'Water', image: water, alt: 'polluted water',  details: '<article><p>Meat production heavily strains water resources. Animal waste runoff pollutes water bodies, while fertilizers and pesticides from feed crops add harmful chemicals.</p><br><p>Additionally, the industry’s excessive water use for livestock and crop irrigation further depletes freshwater supplies.</p></article>' },
    { topic: 'Air', image: air, alt: 'polluted air',  details: '<article><p>Meat production significantly affects air quality. Livestock emit methane, a potent greenhouse gas, while manure releases ammonia, impacting nearby air.</p><br><p>Moreover, deforestation for pasture worsens air quality by reducing the trees that help absorb carbon dioxide.</p></article>' },
    { topic: 'Climate', image: fire, alt: 'forrest fire', details: '<article><p>Besides the other mentioned aspects: Energy Use for Meat Production: Producing meat requires a lot of energy for things like running farms, processing plants, and transporting meat.</p><br><p>This energy often comes from burning fossil fuels, which releases carbon dioxide and other greenhouse gases that contribute to climate change.</p></article>' },
  ];

  return (
    <section className="impact" ref={ref}>
      <h2 className="environmental-impact-headline" 
        style={{
          transform: isInView ? "none" : "translateX(-200px)", 
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >Environmental impacts</h2>
      <div className="impact-cards-grid">
        {impactTopics.map((impact, index) => (
          <ImpactCard
            key={index}
            onClick={() => handleCardClick(index)}
            isFlipped={flippedCardIndex === index} 
            topic={impact.topic}
            backgroundImage={impact.image}
            details={impact.details}
            aria-label={`Click to open article about ${impact.topic}`}
            alt={``}
          />
        ))}
      </div>
    </section>
  );
};

export default EnvironmentalImpact;