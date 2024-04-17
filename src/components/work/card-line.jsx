import {motion} from "framer-motion";

const CardLine = ({name, stack, href}) => {


    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                transition: {duration: 0.7},
            }}>
            <div
                className="flex justify-between py-10 text-zinc-800 gap-10 dark:text-gray-300 items-center">
                <p className="text-5xl text-zinc-800 dark:text-gray-300 whitespace-nowrap">{name.toUpperCase()}</p>
                <p className="text-xl  text-zinc-800 dark:text-gray-300">{stack}</p>
            </div>
            <hr className="h-0.5 bg-zinc-800 my-10 dark:bg-gray-300"/>
        </motion.div>
    );
};

export default CardLine;