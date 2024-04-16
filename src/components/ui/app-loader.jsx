import {motion} from "framer-motion";
import React from "react";

const loaderVariants = {
    animate: {
        top: "-100vh",
        height: 0,
        transition: {duration: 2, delay: 1}
    },
    initial: {
        top: 0,
        height: "100%"
    }
};

const boxVariants = {
    initial: {
        translateY: 0
    },
    animate: {
        translateY: "-90%",
        transition: {duration: 2, delay: 0.20}
    }
};

const itemVariants = {
    initial: {
        opacity: 1
    }
};

const Loader = () => {
    const counter = ["one", "two", "three", "four", "five"];

    return (
        <motion.div
            className="fixed w-screen h-screen inset-0 bg-white text-white flex items-center justify-center"
            variants={loaderVariants}
            initial="initial"
            animate="animate"
        >
            <motion.div className="relative w-full h-20 overflow-hidden mx-auto"
                        variants={boxVariants}
            >
                <motion.span className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-white to-transparent"/>
                <motion.span className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-white to-transparent"/>

                <motion.ul className="m-0 p-0 list-none"
                           variants={boxVariants}
                >
                    {counter.map((el, id) => (
                        <motion.li key={id} className="text-9xl text-zinc-800  leading-40 h-40 text-center"
                                   variants={itemVariants}
                        >
                            {el}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    );
};

export default Loader;
