import {useState} from "react";

const AppLogo = () => {
    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = () => setIsHover(true)
    const handleMouseLeave = () => setIsHover(false)
    return (
        <div className="font-bold text-base cursor-pointer text-zinc-800 dark:text-white transition-all relative " onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
            {!isHover && (
                <span
                    className=" inset-0 transition-opacity duration-500 opacity-100 hover:opacity-0">
                    hello+
                </span>
            )}
            {isHover && (
                <span
                    className="inset-0 transition-opacity duration-500 opacity-0 hover:opacity-100">
                    Dadashi
                </span>
            )}
        </div>
    );
};

export default AppLogo;