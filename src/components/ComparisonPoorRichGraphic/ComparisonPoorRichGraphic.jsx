import { useRef, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
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
        <h2>{t('comparisonPoorRich.title')}</h2>
        <Element name='comparison-rich-poor-countries'>
            <LazyLoad height={800} offset={200}>
              <div className="charts-container-comp">
                <div className="chart-container">
                  <DevelopingConsumptionChart />
                </div>
                <div className="chart-container">
                  <IndustrializedConsumptionChart />
                </div>
              </div>
            <span className="sr-only">{t('comparisonPoorRich.srOnly')}</span>
            <AccordionMap />
            <Conclusion conclusionText={t('comparisonPoorRich.conclusionText')}/>
          </LazyLoad>
        </Element>
      </section>
      
  );
};

export default ComparisonPoorRichGraphic;
