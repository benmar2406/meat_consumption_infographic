import React from 'react';
import { useTranslation } from 'react-i18next';
import Human from '../../../../assets/img/icons/human.png'

const HumanDevelopingCountries = () => {

  const { t, i18n } = useTranslation();

  return (
    <figcaption className="info-box">
      <img className='icon' alt="human-icon" src={Human}/>
        <p className='info-text info-text-poor'>{t('comparisonPoorRich.descriptionLowLower')}</p>
    </figcaption>
  );
};

export default HumanDevelopingCountries;
  