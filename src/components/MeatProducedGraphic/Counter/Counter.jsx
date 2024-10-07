import React from 'react';

const Counter = ({ count }) => {
  return (
    <article className="counter" aria-description="360 million tonnes of meat were produced worldwide in 2022">
      <h2 aria-hidden="true">{count}</h2>
      <p aria-hidden="true"><span className='highlight'>Million Tonnes meat</span><br/>produced worldwide 2021.</p>
    </article>
  );
};

export default Counter;
