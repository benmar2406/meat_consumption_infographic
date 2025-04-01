import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import GlobalConsumptionMap from './GlobalConsumptionMap';
import { useTranslation } from 'react-i18next';

const AccordionItem = ({ isOpen, onClick }) => {

  const { t } = useTranslation();

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
        <p className="question-content">{t('consumptionMap.showMap')}</p>
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
