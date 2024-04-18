import {useInView} from "react-intersection-observer";

export const useAnimatedClipPath = () => {
    const {ref, inView} = useInView({triggerOnce: true});

    const variants = {
        initial: {
            y: 20,
            opacity: 0,
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
        },
        whileInView: {
            y: 0,
            opacity: 1,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        }
    };

    const motionProps = {
        initial: variants.initial,
        animate: inView ? variants.whileInView : variants.initial,
        transition: {duration: 2, ease: 'easeInOut'}
    };

    return {motionProps, ref};
};
