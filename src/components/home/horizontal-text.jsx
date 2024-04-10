import {useScroll, motion, useTransform} from "framer-motion";

const HorizontalText = () => {

    const {scrollYProgress} = useScroll()
    const topWordPosition = useTransform(scrollYProgress, [1, 0], [200, 1800])
    const bottomWordPosition = useTransform(scrollYProgress, [1, 0], [300, -1800])
    return (
        <div className="flex justify-center items-center flex-col">
            <motion.p
                className={`text-white transition-all ease-in-expo duration-300 text-9xl sm:text-[16.313rem] z-10 m-0 whitespace-nowrap`}
                style={{x: topWordPosition}}>
                Creating
            </motion.p>
            <motion.p
                className={`text-white transition-all ease-in-expo duration-300 text-9xl sm:text-[16.313rem] z-10 m-0 whitespace-nowrap`}
                style={{x: bottomWordPosition}}>
                Digital Beauty
            </motion.p>
        </div>
    );
};

export default HorizontalText;