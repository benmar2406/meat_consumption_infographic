import { useRef } from 'react';
import { useInView } from 'framer-motion';  
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';
import YearBlock from './YearBlock/YearBlock';

const groupDataByDecade = (data) => {
  const groupedData = {};

  data.forEach((item) => {
    const decade = Math.floor(item.Year / 10) * 10;

    if (decade >= 2020) {
      return;
    }

    if (!groupedData[decade]) {
      groupedData[decade] = {
        decade,
        totalProduction: 0,
      };
    }
    groupedData[decade].totalProduction += item["Total Meat production (tonnes)"];
  });

  return Object.values(groupedData);
};

const ProductionTimeline = ({ data }) => {
  
  const { t, i18n } = useTranslation();

  const ref = useRef(null);  
  const isInView = useInView(ref, { triggerOnce: true });

  const groupedData = groupDataByDecade(data);

  return (
    <section className='production-timeline' 
      ref={ref}
      style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
    > 
        <h2>{t('developmentProduction.title')}</h2>
        <div className='chart-container-timeline'>
          <LazyLoad height={400} offset={100}>
            {groupedData.map((d) => (
                <YearBlock key={d.decade} year={d.decade + t('developmentProduction.decade')}  production={d.totalProduction} />
            ))}
          </LazyLoad>
        </div>
    </section>
  );
};

export default ProductionTimeline;
