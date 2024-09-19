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
    { topic: 'Soil', image: soil, details: '<ul><li>Overgrazing and Soil Erosion</li><li>Overfarming and the Impact of Monoculture Farming</li><p>Deforestation To Make Way for More Pastures</li></ul>' },
    { topic: 'Water', image: water, details: '<ul><li>Animal Waste in Water</li><li>Fertilizers and Pesticides</li><li>WWater Overuse</li>' },
    { topic: 'Air', image: air, details: '<ul><li>Gas from Animals (Methane)</li><li>Manure Releases Chemicals (Ammonia)</li><li>Worse air quality to deforestation</li>' },
    { topic: 'Climate', image: fire, details: 'Besides the other mentioned aspects: Energy Use for Meat Production: Producing meat requires a lot of energy for things like running farms, processing plants, and transporting meat. This energy often comes from burning fossil fuels, which releases carbon dioxide and other greenhouse gases that contribute to climate change.' },
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
          />
        ))}
      </div>
    </section>
  );
};

export default EnvironmentalImpact;