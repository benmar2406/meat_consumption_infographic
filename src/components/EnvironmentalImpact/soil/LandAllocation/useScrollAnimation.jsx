import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react'; // Import React hooks from react

const useScrollAnimation = (ref) => {
  const [isScrollReady, setIsScrollReady] = useState(false);
  const [width, setWidth] = useState('0%'); // Default to 0 width initially
  const [displayChartText, setDisplayChartText] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setIsScrollReady(true); // Only run the scroll logic if ref is available
    }
  }, [ref]);

  useEffect(() => {
    if (isScrollReady) {
      const { scrollYProgress } = useScroll({
        target: ref,
        layoutEffect: false,
      });

      const widthTransform = useTransform(scrollYProgress, [0, 0.9], ['0%', '100%']);
      const percentageTransform = useTransform(scrollYProgress, [0, 1], [0, 100]);

      // Update width
      widthTransform.onChange((value) => setWidth(value));

      // Handle when to display text
      const unsubscribe = percentageTransform.onChange((latestPercentage) => {
        if (latestPercentage >= 40) {
          setDisplayChartText(true);
        } else {
          setDisplayChartText(false);
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, [isScrollReady, ref]);

  return {
    width,
    displayChartText,
  };
};

export { useScrollAnimation }; // Named export of the hook
