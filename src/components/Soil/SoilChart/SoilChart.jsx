import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import '../Soil.css';

const SoilChart = ({ 
  requiredPercentage, 
  requiredPercentageArticle, 
  fullWidthValue, 
  headline, 
  chartText, 
  article, 
  backgroundImage, 
  backgroundColor, 
  scrollEffectDirection, 
  meatWidth, 
  chartText2 
}) => {
  const refScrollContainer = useRef(null);
  const isInView = useInView(refScrollContainer, { once: true });

  const { scrollYProgress } = useScroll({
    target: refScrollContainer
  });

  const width = useTransform(scrollYProgress, [0, fullWidthValue], scrollEffectDirection);
  const percentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [displayChartText, setDisplayChartText] = useState(false);
  const [displayArticleText, setDisplayArticleText] = useState(false);
  const [displayChartTextTwo, setDisplayChartTextTwo] = useState(false);

  useEffect(() => {
    const unsubscribe = percentage.on("change", (latestPercentage) => {
      if (latestPercentage >= requiredPercentage) { 
        setDisplayChartText(true);
        setDisplayChartTextTwo(true);
      } else {
        setDisplayChartText(false);
        setDisplayChartTextTwo(false);
      }
      if (latestPercentage >= requiredPercentageArticle) { 
        setDisplayArticleText(true);
      } else {
        setDisplayArticleText(false);
      }
    });
  
    return () => unsubscribe(); 
  }, [percentage]);

  return (
    <div className='landuse-scroll-container' ref={refScrollContainer}>
      <div className='landuse-chart-container'>
      <h2 className='landuse-headline'>{headline}</h2>
        <div 
          className='landuse-chart'
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            background: backgroundImage,
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
          }}
          aria-label={`${chartText}${chartText2}`}
        ><motion.span 
            className='text-second-chart'
            dangerouslySetInnerHTML={{ __html: chartText2 }}
            style={{ 
              opacity: displayChartTextTwo ? 1 : 0,
              transition: "opacity 0.5s ease-in-out"
            }}
            aria-hidden='true'
          ></motion.span>
          <div 
            className='landuse-chart-meat'
            style= {{
              width: meatWidth,
            }}
            aria-hidden='true'
          >
            <motion.div 
              className='landuse-chart-fill' 
              style={{ 
                width: width,
                backgroundColor: backgroundColor 
               }} 
              aria-hidden='true'

            >
              <motion.span className='landuse-chart-fill-text'
                style={{ 
                  opacity: displayChartText ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out"
                }}
                dangerouslySetInnerHTML={{ __html: chartText }}
                aria-hidden='true'
              >
              </motion.span>
            </motion.div>
          </div>
          
        </div>
        <article 
            className='landuse-text'
            style={{
              opacity: displayArticleText ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
            dangerouslySetInnerHTML={{__html: article}}
          >
          </article>
      </div>
    </div>
  );
}

export default SoilChart;
