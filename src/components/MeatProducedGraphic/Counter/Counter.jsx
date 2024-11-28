import React from 'react';
import { useTranslation } from 'react-i18next';

const Counter = ({ count }) => {
  
  const { t, i18n } = useTranslation();

  return (
    <article className="counter" aria-description="360 million tonnes of meat were produced worldwide in 2022">
      <h2 aria-hidden="true">{count}</h2>
      <p aria-hidden="true">{t('counter.text')}</p>
    </article>
  );
};

export default Counter;
