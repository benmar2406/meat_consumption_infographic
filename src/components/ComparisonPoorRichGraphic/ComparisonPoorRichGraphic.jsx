import React, { useRef, useEffect } from 'react'; 
import { Element } from 'react-scroll';
import { useAnimation, useInView } from 'framer-motion'; 
import { useTranslation } from 'react-i18next';
import './ComparisonPoorRichGraphic.css';
import DevelopingConsumptionChart from './DevelopingConsumptionChart/DevelopingConsumptionChart';
import IndustrializedConsumptionChart from './IndustrializedConsumptionChart/IndustrializedConsumptionChart';
import Conclusion from '../Conclusion/Conclusion';
import AccordionMap from './GlobalConsumptionMap/AccordionMap';

const ComparisonPoorRichGraphic = () => {

  const { t } = useTranslation();

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
    
      <section id="comparison-rich-poor-countries" className="comparison-rich-poor-countries">
        <Element name='comparison-rich-poor-countries'>
          <h2>{t('comparisonPoorRich.title')}</h2>
          <AccordionMap />
            <div className="charts-container-comp">
              <div className="chart-container">
                <DevelopingConsumptionChart />
              </div>
              <div className="chart-container">
                <IndustrializedConsumptionChart />
            </div>
            </div>
            <span className="sr-only">{t('comparisonPoorRich.srOnly')}</span>
          <Conclusion conclusionText={t('comparisonPoorRich.conclusionText')}/>
        </Element>
      </section>
  );
};

export default ComparisonPoorRichGraphic;
