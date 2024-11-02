import { useEffect } from 'react';
import { useAnimation, useInView } from 'framer-motion';

const useAnimateTitleOnView = (elementToAnimate) => {
    const options = { once: true }
    const isInView = useInView(elementToAnimate, options);
    const inViewControls = useAnimation();
    const initial = { opacity: 0, scale: 0.8 };

    useEffect(() => {
        if (isInView) {
            inViewControls.start({
                scale: 1,
                opacity: 1,
                transition: {
                    type: 'spring',
                    stiffness: 600,
                    damping: 20,
                },
            });
        }
    }, [inViewControls, isInView]);

    return { inViewControls, initial };
};

export default useAnimateTitleOnView;
