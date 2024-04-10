import {Link} from "react-router-dom";
import {getRouterAbout, getRouterContacts, getRouterWork} from "@/commons/const/router-path";
import AppBurger from "../ui/app-burger";

const Navbar = () => {


    const links = [
        {
            link: "Work",
            path: getRouterWork
        },
        {
            link: "About",
            path: getRouterAbout
        },
        {
            link: "Contact",
            path: getRouterContacts
        },
    ]

    return (
        <header id="navbar" className="h-20 flex items-center">
            <div className="container mx-auto w-full px-10 flex justify-between items-center">
                <div className="text-white">
                    Logo
                </div>
                <nav className="hidden md:block">
                    <ul className="flex gap-10 items-center">
                        {
                            links.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-white">
                                        {link.link}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className="block md:hidden">
                    <AppBurger/>
                </div>
            </div>
        </header>
    );
};

export default Navbar;