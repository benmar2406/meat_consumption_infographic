import React, { useState } from 'react';
import '../Impact.css';

const ImpactCard = ({ backgroundImage, topic }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>  
      <div className={`impact-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="card-inner">
          <article className="front-impact-card" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <h3 className="impact-card-headline">{topic}</h3>
          </article>
          
          <article className="back-impact-card">
            <h3>Test</h3>
            <p>Test</p>
          </article>
        </div>
      </div>
    </>
  );
};

export default ImpactCard;
