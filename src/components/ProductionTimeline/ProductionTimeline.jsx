import React from 'react';
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
  const groupedData = groupDataByDecade(data);

  return (
    <>  
        <section className='production-timeline'>
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
