import React from 'react';
import { useTranslation } from 'react-i18next';
import './BathtubIconContainer.css';
import bathtubIcon from '../../assets/img/icons/bathtub.png'

const BathtubIconContainer = ({
  bathtubWidth, 
  bathtubHeight, 
  minbathtubHeight, 
  minbathtubWidth, 
  maxdbathtubHeight, 
  maxbathtubWidth
}) => {

  const { t, i18n } = useTranslation();

  return (
    <div
      className="bathtub-icon-container"
      style={{
        width: bathtubWidth,
        height: bathtubHeight,
        minWidth: minbathtubWidth,
        minHeight: minbathtubHeight,
        maxWidth: maxbathtubWidth,
        maxHeight: maxdbathtubHeight,
      }}
    >
      <img 
        className='bathtub-icon' 
        src={bathtubIcon} 
        alt={t('waterConsumption.alt')} />
    </div>
  );
};

export default BathtubIconContainer;
