import React, { useState }  from 'react';
import './Impact.css';
import ImpactCard from './ImpactCard/ImpactCard';
import soil from '../../assets/img/soil_degradation.jpg';
import water from '../../assets/img/water.jpg';
import air from '../../assets/img/air.jpg';
import fire from '../../assets/img/fire.jpg';

const Impact = () => {

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
    <section className="impact">
      <h2 className="environmental-impact-headline">Environmental impacts</h2>
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

export default Impact;