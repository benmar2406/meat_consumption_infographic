import { useEffect } from 'react';
import { useAnimation, useInView } from 'framer-motion';

const useAnimateTitleOnView = (triggerRef , delay) => {
    const options = { once: true };
    const isInView = useInView(triggerRef, options);
    const inViewControls = useAnimation();
    
    useEffect(() => {
        if (isInView) {
            inViewControls.start({
                opacity: 1,
                scale: 1,
                x: 0, 
                transition: {
                    type: 'spring',
                    stiffness: 600,
                    damping: 20,
                    delay: 1 * delay
                },
            });
        }
    }, [inViewControls, isInView]);

    return { inViewControls, isInView };
};

export default useAnimateTitleOnView;
