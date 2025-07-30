  import { useState, useRef }  from 'react';
  import LazyLoad from 'react-lazyload';
  import { useInView } from "framer-motion";
  import { Element } from 'react-scroll';
  import { useTranslation } from 'react-i18next';
  import './EnvironmentalImpact.css';
  import ImpactCard from './ImpactCard/ImpactCard';
  import soil from '/assets/img/soil_degradation.webp';
  import water from '/assets/img/water.webp';
  import air from '/assets/img/air.webp';
  import fire from '/assets/img/fire.webp';
  
  const EnvironmentalImpact = () => {
    const { t } = useTranslation();

    const ref = useRef(null)
    const isInView = useInView(ref)

    const [flippedCardIndex, setFlippedCardIndex] = useState(null);

    const handleCardClick = (index) => {
      setFlippedCardIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const impactTopics = [
      { topic: t('environmentalImpacts.soilTitle'), image: soil, alt: t('environmentalImpacts.soilAlt'), details: t('environmentalImpacts.soilArticle')},
      { topic: t('environmentalImpacts.waterTitle'), image: water, alt: t('environmentalImpacts.waterAlt'),  details: t('environmentalImpacts.waterArticle') },
      { topic: t('environmentalImpacts.airTitle'), image: air, alt: t('environmentalImpacts.airAlt'),  details: t('environmentalImpacts.airArticle') },
      { topic: t('environmentalImpacts.climateTitle'), image: fire, alt: t('environmentalImpacts.climateAlt'), details: t('environmentalImpacts.climateArticle') },
    ];

    return (
      <section className="impact" ref={ref}>
        <h2 className="environmental-impact-headline" 
            style={{
              transform: isInView ? "none" : "translateX(-200px)", 
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
          >{t('environmentalImpacts.title')}</h2>
        <Element name={'environmental-impacts'}>
          <LazyLoad height={800} offset={200}>
            <div className="impact-cards-grid">
              {impactTopics.map((impact, index) => (
                <ImpactCard
                  key={index}
                  handleCardClick={() => handleCardClick(index)}
                  isFlipped={flippedCardIndex === index} 
                  topic={impact.topic}
                  backgroundImage={impact.image}
                  details={impact.details}
                  aria-label={`Click to open article about ${impact.topic}`}
                  alt={``}
                />
              ))}
            </div>
          </LazyLoad>
        </Element>
      </section>
    );
  };

  export default EnvironmentalImpact;