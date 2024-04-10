import {getRouterAbout, getRouterContacts, getRouterWork} from "@/commons/const/router-path";
import {Link} from "react-router-dom";

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
        <header id="navbar" className="">
            <div className="container mx-auto w-full px-5">
                <div className="text-white">
                    Logo
                </div>
                <nav>
                    <ul className="flex gap-10 items-center">
                        {
                            links.map(({path, link}) => (
                                <Link to={path} className="text-white">
                                    {link}
                                </Link>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;