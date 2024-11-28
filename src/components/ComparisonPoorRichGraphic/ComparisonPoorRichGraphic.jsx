import React, { useRef, useEffect } from 'react'; 
import { Element } from 'react-scroll';
import { useAnimation, useInView } from 'framer-motion'; 
import { useTranslation } from 'react-i18next';
import './ComparisonPoorRichGraphic.css';
import DevelopingConsumptionChart from './DevelopingConsumptionChart/DevelopingConsumptionChart';
import IndustrializedConsumptionChart from './IndustrializedConsumptionChart/IndustrializedConsumptionChart';
import Conclusion from '../Conclusion/Conclusion'

const ComparisonPoorRichGraphic = () => {

  const { t, i18n } = useTranslation();

  const buttonRef = useRef(null); 
  const buttonIsInView = useInView(buttonRef);  
  const buttonControls = useAnimation();  

  useEffect(() => {
    if (buttonIsInView) {
      buttonControls.start({
        scale: [1, 1.3, 1, 1.3, 1],
        transition: { duration: 2.5 },
        opacity: [0, 1, 1, 1, 1 ]
      });
    } 
  }, [buttonIsInView, buttonControls]);

  return (
    
      <section className="comparison-rich-poor-countries">
        <Element name='comparison-rich-poor-countries'>
          <h2>{t('comparisonPoorRich.title')}</h2>
          <div className="scroll-container"> 
              <div className="sticky-container">
              <div className="chart-container">
                <DevelopingConsumptionChart />
              </div>
              <div className="chart-container">
                <IndustrializedConsumptionChart />
              </div>
            </div>
            <span className="sr-only">{t('comparisonPoorRich.srOnly')}</span>
          </div>
          <Conclusion conclusionText={t('comparisonPoorRich.conclusionText')}/>
        </Element>
      </section>
  );
};

export default ComparisonPoorRichGraphic;
