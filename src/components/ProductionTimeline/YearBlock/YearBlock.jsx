import React from 'react';
import { useTranslation } from 'react-i18next';
import '../ProductionTimeline.css'; 

const YearBlock = ({ year, production }) => {

  const { t } = useTranslation();

  const circleCount = Math.floor(production / 10000000);

  return (
    <div className="yearBlock">
      <div className="yearLabel">{year}</div>
      <div className="circlesContainer" aria-hidden="true">
        {[...Array(circleCount)].map((_, index) => (
          <div key={index} className="circle"></div>
        ))}
      </div>
      <div className="productionLabel">
        {production.toLocaleString()} {t('developmentProduction.tonnes')}
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default YearBlock;
