import React from 'react';
import '../ComparisonPoorRichGraphic.css'

const KgConsumed = ({ kgConsumed }) => {
  return (
    <div className='info-container box-tonnes-produced-rich'>
      <h1 className='info-container-headline'>{kgConsumed} kg</h1>
      <h3 className='info-container-sub-headline'>consumed per capita (2021)</h3>
    </div>
  );
};

export default KgConsumed;