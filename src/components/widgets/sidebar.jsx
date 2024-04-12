import {useTheme} from "@/commons/hooks/use-theme";
import {getRouterAbout, getRouterContacts, getRouterWork} from "@/commons/const/router-path";
import {Link} from "react-router-dom";

const Sidebar = () => {
    const {handleThemeSwitch, theme} = useTheme()
    const links = [
        {link: "Work", path: getRouterWork},
        {link: "About", path: getRouterAbout},
        {link: "Contact", path: getRouterContacts},
    ];
    return (
        <aside className="block md:hidden w-screen h-svh bg-black dark:bg-white z-5">
            <div className="container mx-auto px-10">
                <ul className="flex flex-col justify-center items-centerm  gap-10">
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link to={link.path}
                                  className="dark:text-black text-white font-bold text-base">{link.link}</Link>
                        </li>
                    ))}
                    <button onClick={handleThemeSwitch} className="dark:text-black text-white">
                        {theme.toString() + " mode"}
                    </button>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;