import React from 'react';
import '../ComparisonPoorRichGraphic.css'

const KgConsumed = ({ kgConsumed, color }) => {
  return (
    <div className='info-container box-tonnes-produced-rich' style={{ borderColor: color }}>
      <h3 className='info-container-headline'>{kgConsumed} kg</h3>
      <p style={{ color: color }} className='info-container-sub-headline'>consumed per capita (2021)</p>
    </div>
  );
};

export default KgConsumed;