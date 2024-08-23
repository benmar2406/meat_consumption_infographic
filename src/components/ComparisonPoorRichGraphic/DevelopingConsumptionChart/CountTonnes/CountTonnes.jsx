import React from 'react';
import '../ComparisonPoorRichGraphic.css'

const CountTonnes = ({ tonnesProduced }) => {
  return (
    <div className='box-tonnes-produced'>
      <p>{tonnesProduced}</p>
    </div>
  );
};

export default CountTonnes;
