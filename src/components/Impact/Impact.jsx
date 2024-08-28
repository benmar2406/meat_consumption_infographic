import React from 'react';
import './Impact.css';
import ImpactCard from './ImpactCard/ImpactCard';
import soil from '../../assets/img/soil_degradation.jpg';
import water from '../../assets/img/water.jpg';
import air from '../../assets/img/air.jpg';
import fire from '../../assets/img/fire.jpg';

const Impact = () => {
  return (
    <>  
      <section className="impact">
        <h2 className="environmental-impact-headline">Environmental impacts</h2>
        <div className="impact-cards-grid">
          <ImpactCard topic="Soil degradation" backgroundImage={soil} />
          <ImpactCard topic="Water pollution" backgroundImage={water} />
          <ImpactCard topic="Air pollution" backgroundImage={air} />
          <ImpactCard topic="Climate Change" backgroundImage={fire} />
        </div>
      </section>
    </>
  );
};

export default Impact;
