import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useShowSidebar} from "@/commons/hooks/use-sidebar";

const AppLogo = () => {
    const [isHover, setIsHover] = useState(false)
    const {isShowSidebar, handleShowSidebar} = useShowSidebar()
    const navigate = useNavigate()
    const handleGetHome = () => {
        navigate("/")
    }
    const handleMouseEnter = () => setIsHover(true)
    const handleMouseLeave = () => setIsHover(false)
    return (
        <div
            className={`${!isShowSidebar ? "text-zinc-800 dark:text-white" : "text-white dark:text-zinc-800"} font-bold text-base z-50 cursor-pointer text-zinc-800 dark:text-white transition-all relative `}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onClick={handleGetHome}
        >
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