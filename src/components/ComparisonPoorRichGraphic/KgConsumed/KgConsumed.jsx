import React from 'react';
import { useTranslation } from 'react-i18next';

const KgConsumed = ({ kgConsumed, color }) => {

  const { t } = useTranslation();

  return (
    <div className='info-container box-tonnes-produced-rich' style={{ borderColor: color }}>
      <h3 className='info-container-headline'>{kgConsumed} kg</h3>
      <p style={{ color: color }} className='info-container-sub-headline'>{t('comparisonPoorRich.consumedPerCapita')}</p>
    </div>
  );
};

export default KgConsumed;