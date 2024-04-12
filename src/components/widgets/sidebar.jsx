import {Link} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import {useShowSidebar} from "@/commons/hooks/use-sidebar";
import {getRouterHome} from "@/commons/const/router-path";
import {getRouterAbout, getRouterContacts, getRouterWork} from "@/commons/const/router-path";
import {useTheme} from "@/commons/hooks/use-theme";

const Sidebar = () => {
    const {handleThemeSwitch, theme} = useTheme()
    const {handleShowSidebar, isShowSidebar} = useShowSidebar()
    const links = [
        {link: "Home", path: getRouterHome},
        {link: "Work", path: getRouterWork},
        {link: "About", path: getRouterAbout},
        {link: "Contact", path: getRouterContacts},
    ];
    return (
        <AnimatePresence>
            {
                isShowSidebar && (
                    <motion.aside
                        initial={{
                            opacity: 0,
                            height: 0
                        }}
                        whileInView={
                            {height: "100vh", opacity: 1}}
                        viewport={{once: true}}
                        exit={{
                            height: 0,
                            opacity: 0
                        }}
                        transition={{ease: 'easeOut', duration: 1.4}}
                        className="block md:hidden fixed top-0 bottom-0 z-30 w-screen h-svh bg-black dark:bg-white">
                        <div className="container mx-auto px-10">
                            <ul className="flex flex-col justify-center mt-32 items-start gap-10">
                                {links.map((link, id) => (
                                        <li key={id} onClick={handleShowSidebar}>
                                            <Link to={link.path}
                                                  className="dark:text-black text-white font-normal text-4xl">{link.link}</Link>
                                        </li>
                                    )
                                )
                                }
                            </ul>
                            <button onClick={handleThemeSwitch} className="dark:text-black mt-12 text-white">
                                {theme.toString() + " mode"}
                            </button>
                        </div>
                    </motion.aside>
                )
            }
        </AnimatePresence>
    );
};

export default Sidebar;