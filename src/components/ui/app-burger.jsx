import {useState} from "react";
import {motion} from "framer-motion";
import {useShowSidebar} from "@/commons/hooks/use-sidebar";

const AppBurger = () => {
    const [isMenu, setIsMenu] = useState(false);
    const {isShowSidebar, handleShowSidebar} = useShowSidebar()

    const handleClick = () => {
        setIsMenu(!isMenu);
    };

    return (
        <ol className={`${!isShowSidebar ? "text-zinc-800 dark:text-white" : "text-white dark:text-zinc-800"} w-4 list-disc cursor-pointer`}
            onClick={handleClick}>
            <motion.li
                animate={{opacity: isMenu ? 0.6 : 1, transition: {duration: 0.5}}}
            >
                {!isMenu ? "menu" : "close"}
            </motion.li>
        </ol>
    );
};

export default AppBurger;
