import {motion} from "framer-motion";

const CardLine = ({name, stack, description, href}) => {


    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                transition: {duration: 0.7},
            }} className="sm:block hidden">
            <div
                className="flex justify-between py-10 text-zinc-800 gap-10 dark:text-gray-300 items-center">
                <p className="text-5xl w-20 text-zinc-800 dark:text-gray-300 whitespace-nowrap">{name.toUpperCase()}</p>
                <p className="text-xl hidden lg:block w-40 text-zinc-800 dark:text-gray-300">{stack}</p>
                <p className="text-xl   text-zinc-800 dark:text-gray-300 w-60">{description}</p>
            </div>
            <hr className="h-0.5 bg-zinc-800 my-10 dark:bg-gray-300"/>
        </motion.div>
    );
};

export default CardLine;