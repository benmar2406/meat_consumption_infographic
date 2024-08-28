import React from 'react';

const Counter = ({ count }) => {
  return (
    <article className="counter">
      <h2>{count}</h2>
      <p><span className='highlight'>Million Tonnes meat</span><br/>produced worldwide 2021.</p>
    </article>
  );
};

export default Counter;
