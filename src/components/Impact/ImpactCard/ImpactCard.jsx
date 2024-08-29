import React from 'react';
import '../Impact.css';

const ImpactCard = ({ backgroundImage, topic, onClick, isFlipped }) => {
  return (
    <div className={`impact-card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-inner">
        <article className="front-impact-card" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='environmental-card-overlay'>
            <h3 className="environmental-impact-card-headline">{topic}</h3>
            </div>
        </article>
        <article className="back-impact-card">
          <h3>Details</h3>
          <p>More information about {topic}</p>
        </article>
      </div>
    </div>
  );
};

export default ImpactCard;
