import {useRef} from "react"
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,

} from "framer-motion";
import {wrap} from "@motionone/utils"
function ParallaxText({children, baseVelocity = 100}) {
    const baseX = useMotionValue(0);
    const {scrollY} = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    const words = Array.from({length: 4})
    return (
        <div className="parallax overflow-hidden tracking-tighter m-0 whitespace-nowrap">
            <motion.div className="font-bold uppercase text-5xl flex whitespace-nowrap flex-nowrap" style={{x}}>
                {
                    words.map((word) => (
                        <span key={word} className="block mr-70">{children}</span>
                    ))
                }
            </motion.div>
        </div>
    );
}

export default ParallaxText