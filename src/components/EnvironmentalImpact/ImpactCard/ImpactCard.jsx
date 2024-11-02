import React from 'react';
import '../EnvironmentalImpact.css';

const ImpactCard = ({ backgroundImage, topic, onClick, isFlipped, details, alt }) => {
  return (
    <div className={`impact-card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-inner">
        <article 
          className="front-impact-card" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-label={alt}
          >
            <div className='environmental-card-overlay'>
            <h3 className="environmental-impact-card-headline">{topic}</h3>
            </div>
        </article>
        <article className="back-impact-card">
          <p 
            dangerouslySetInnerHTML={{ __html: details }}
          ></p>
        </article>
      </div>
    </div>
  );
};

export default ImpactCard;
