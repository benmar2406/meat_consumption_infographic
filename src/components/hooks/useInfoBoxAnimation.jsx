import { useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const useInfoBoxAnimation = (index, onLastIconRendered, isLastItem) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        transform: 'translateY(0px)',
        transition: { delay: index * 0.02, duration: 0.07 },
      }).then(() => {
        if (isLastItem) {
          onLastIconRendered();
        }
      });
    }
  }, [isInView, controls, index, isLastItem, onLastIconRendered]);

  return { ref, controls };
};

export default useInfoBoxAnimation;

