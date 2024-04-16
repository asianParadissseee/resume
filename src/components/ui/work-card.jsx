import React, {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";


const WorkCard = ({name, stack, bgColor, textColor, id, total, imgUrl,href}) => {
    const container = useRef(null)
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ["start end", "start start"]
    })
    const scale = useTransform(scrollYProgress, [0, 1], [2, 1])
    return (
        <motion.div
            ref={container}
            style={{top: `${id * 3}rem`}}
            className={`min-w-60 mt-20 sticky px-10 z-${total + id} text-center rounded-2xl py-10 h-svh ${textColor} ${bgColor}`}>
            <p className="font-semibold text-3xl sm:text-6xl mb-10">{name.toUpperCase()}</p>
            <span className="font-normal text-sm sm:text-base">
        <b>Stack: </b>{stack}
      </span>
            <div className="flex justify-center items-center my-10">
                <a href={href} target={"_blank"}>
                    <img src={imgUrl} className="hover:scale-110 transition duration-500 cursor-pointer"
                         alt="вебсайт сделанный на определенной технологии с красивым дизайном" width={459}
                         height={200}/>
                </a>
            </div>
        </motion.div>
    );
};

export default WorkCard;
