import { useContext, useRef } from 'react';
import { useInView } from 'framer-motion';  
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';
import YearBlock from './YearBlock/YearBlock';
import { DeviceContext } from '../../context/deviceContext';

const groupDataByDecade = (data) => {
  const decades = {};

  data.forEach((item) => {
    const decade = Math.floor(item.Year / 10) * 10;

    // Skip decades 2020 and above
    if (decade >= 2020) return;

    // Initialize the decade group if it doesn't exist
    if (!decades[decade]) {
      decades[decade] = {
        decade,
        totalProduction: 0,
      };
    }

    // Add the current items production to the decades total
    decades[decade].totalProduction += item["Total Meat production (tonnes)"];
  });

  // Convert the object to an array and return
  return Object.values(decades);
};


const ProductionTimeline = ({ data }) => {

  const { mobile } = useContext(DeviceContext);
  
  const { t } = useTranslation();

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
        <LazyLoad height={400} offset={100}>
          <div className='chart-container-timeline'>
            {groupedData.map((d, i) => (  
              //for better overview show only first and and last decade on small screens
              (!mobile || (i === 0 || i === groupedData.length - 1)) && (
                <YearBlock
                  key={d.decade}
                  year={d.decade + t('developmentProduction.decade')}
                  production={d.totalProduction}
                />
              )
            ))}
          </div>
        </LazyLoad>
    </section>
  );
};

export default ProductionTimeline;
