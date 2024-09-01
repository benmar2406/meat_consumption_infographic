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
    { topic: 'Soil degradation', image: soil },
    { topic: 'Water pollution', image: water },
    { topic: 'Air pollution', image: air },
    { topic: 'Climate change', image: fire },
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
          />
        ))}
      </div>
    </section>
  );
};

export default EnvironmentalImpact;