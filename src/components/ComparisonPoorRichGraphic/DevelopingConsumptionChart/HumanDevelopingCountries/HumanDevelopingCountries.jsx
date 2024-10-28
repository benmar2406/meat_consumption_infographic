import React from 'react';
import Human from '../../../../assets/img/icons/human.png'

const HumanDevelopingCountries = () => {

  return (
    <div className="info-box">
      <img className='icon' alt="human-icon" src={Human}/>
        <p className='info-text info-text-poor'>low and lower income countries</p>
      </div>
  );
};

export default HumanDevelopingCountries;
  