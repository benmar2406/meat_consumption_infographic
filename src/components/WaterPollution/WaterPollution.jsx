import React, { useState, useRef } from 'react';
import { Element } from 'react-scroll';
import { Scrollama, Step } from 'react-scrollama';
import { motion, useScroll, useTransform } from 'framer-motion';
import './WaterPollution.css';

function WaterPollution() {

  const [data, setData] = useState(0);
  const [textOpacity, setTextOpacity] = useState(1);  
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const steps = [10, 20, 30];

  const onStepEnter = ({ data, data: stepData }) => {
    setData(data);
  
  };
 

  return (
    <Element name='water-pollution'>
      <section id="scroll" className="water-scroll-section" ref={scrollRef} alt="photography of polluted water">
          <h3 className="water-impacts-headline">Impacts on water quality</h3>
            <div className="water-scroller">
              <Scrollama 
                onStepEnter={onStepEnter} 
              >
                {steps.map(value => {
                  const isVisible = value === data;

                  const stepText = value === 10 
                    ? "<p>Meat production is a major global contributor to water pollution. It discharges large amounts of pollutants into water systems each year. <p>These pollutants include manure, chemicals, and antibiotics from industrial farming practices. The pollution exacerbates water-quality degradation, threatening ecosystems and human health.</p>"
                    : value === 20 
                    ? "<pOne of the main sources of this water pollution comes from livestock waste, which contaminates nearby water bodies.</p><p>For example, runoff from industrial farms leads to nutrient pollution that can cause harmful algal blooms, which reduce oxygen levels in water and harm aquatic life.</p>"
                    : value === 30 
                    ? "<p>The scale of pollution linked to meat production has severe implications for global water security, with efforts to reduce these impacts remaining insufficient.</p>"
                    : "";

                  return (
                    <Step data={value} key={value}>
                      <div className="water-step">
                        <article className='water-step-text'
                          dangerouslySetInnerHTML={{ __html: stepText }}
                        ></article> 
                      </div>
                    </Step>
                  );
                })}
              </Scrollama>
            </div>
            {/*</section>*/}
      </section>
      </Element>
  );
}

export default WaterPollution;
