import {Link} from "react-router-dom";
import {getRouterAbout, getRouterContacts, getRouterWork} from "../../commons/const/router-path";

const Navbar = () => {

    // const links = [
    //     {
    //         link: "Work",
    //         path: getRouterWork
    //     },
    //     {
    //         link: "About",
    //         path: getRouterAbout
    //     },
    //     {
    //         link: "Contact",
    //         path: getRouterContacts
    //     },
    // ]

    return (
        <header id="navbar" className="h-20">
            <div className="container mx-auto w-full px-5">
                <div className="text-white">
                    Logo
                </div>
                <nav>
                    <ul className="flex gap-10 items-center">
                        {/*{*/}
                        {/*    links.map((link) => (*/}
                        {/*        <li key={link.path}>*/}
                        {/*            <Link to={link.path} className="text-white">*/}
                        {/*                {link.link}*/}
                        {/*            </Link>*/}
                        {/*        </li>*/}
                        {/*    ))*/}
                        {/*}*/}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;