import {useState} from "react";
import {motion} from "framer-motion";

const AppBurger = () => {
    const [isMenu, setIsMenu] = useState(false);

    const handleClick = () => {
        setIsMenu(!isMenu);
    };

    return (
        <ol className="text-white w-4 list-disc cursor-pointer" onClick={handleClick}>
            <motion.li
                animate={{opacity: isMenu ? 0.6 : 1, transition: {duration: 0.5}}}
            >
                {!isMenu ? "menu" : "close"}
            </motion.li>
        </ol>
    );
};

export default AppBurger;
