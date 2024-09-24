import React, { useRef } from 'react';
import { useInView } from 'framer-motion';  // Ensure you import useInView properly
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
  const ref = useRef(null);  // ref should be initialized inside the component
  const isInView = useInView(ref, { triggerOnce: true });  // Pass the ref to useInView and set options

  const groupedData = groupDataByDecade(data);

  return (
    <>  
        <section className='production-timeline' 
          ref={ref}
          style={{
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
            <div className='chart-container-timeline'>
              <h2>Development of meat production over the decades</h2>
            {groupedData.map((d) => (
                <YearBlock key={d.decade} year={`${d.decade}s`} production={d.totalProduction} />
            ))}
            </div>
        </section>
    </>
  );
};

export default ProductionTimeline;
