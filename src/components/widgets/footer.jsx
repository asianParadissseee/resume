import {getRouterAbout, getRouterContacts, getRouterHome, getRouterWork} from "../../commons/const/router-path";
import {Link} from "react-router-dom";

const Footer = () => {

    const useful = [
        {
            name: "Home",
            path: getRouterHome()
        },
        {
            name: "About",
            path: getRouterAbout()
        },
        {
            name: "Works",
            path: getRouterWork()
        },
        {
            name: "Contacts",
            path: getRouterContacts()
        }]
    const social = [
        {
            name: "Linkedin",
            path: ""
        },
        {
            name: "Telegram",
            path: ""
        },
        {
            name: "Instagram",
            path: ""
        },
        {
            name: "Github",
            path: "http://github.com/asianParadissseee/"
        }
    ]

    return (
        <footer className="bg-zinc-200 dark:bg-gray-800/30 min-h-96">
            <div className="container flex flex-col py-20 mx-auto px-10">
                <div className="flex justify-between lg:flex-row flex-col gap-20">
                    <p className="text-3xl sm:text-5xl dark:text-white text-zinc-800">Drop a line <br/>
                        if you want to collab.</p>
                    <div className="flex sm:flex-row flex-col gap-20">
                        <nav>
                            <p className="mb-10 text-zinc-800 dark:text-gray-700">{"useful".toUpperCase()}</p>
                            <ul className="grid grid-cols-2 gap-5">
                                {
                                    useful.map((link) => (
                                        <Link to={link.path} className="text-zinc-600 dark:text-gray-300"
                                              key={link.path}>
                                            {link.name}
                                        </Link>
                                    ))
                                }
                            </ul>
                        </nav>
                        <nav>
                            <p className="mb-10 text-zinc-800 dark:text-gray-700">{"social".toUpperCase()}</p>
                            <ul className="grid grid-cols-2 gap-5">
                                {
                                    social.map((link) => (
                                        <a href={link.path} target={"_blank"}
                                           className="text-zinc-600 dark:text-gray-300"
                                           key={link.path}>
                                            {link.name}
                                        </a>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
                <hr className="text-black dark:text-gray-300 h-0.5 my-10"/>
                <div></div>
            </div>
        </footer>
    );
};

export default Footer;