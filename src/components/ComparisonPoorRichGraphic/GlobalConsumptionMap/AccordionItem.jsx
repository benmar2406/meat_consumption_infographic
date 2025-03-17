import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import GlobalConsumptionMap from './GlobalConsumptionMap';

const AccordionItem = ({ isOpen, onClick }) => {

  const dynamicStyle = isOpen
    ? {
        width: '1000px',
        height: '600px',
        transition: 'height 0.5s ease-in-out',
      }
    : {
        height: '0px',
        transition: 'height 0.5s ease-in-out',
      };

  return (
    <div className="wrapper">
      <button
        className={`question-container ${isOpen ? 'active' : ''}`}
        onClick={onClick}
      >
        <p className="question-content">Show global consumption map</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} />
      </button>

      <div
        className="answer-container"
        style={dynamicStyle}
      >
        <GlobalConsumptionMap />
      </div>
    </div>
  );
};

export default AccordionItem;
