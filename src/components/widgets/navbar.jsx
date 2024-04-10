import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getRouterAbout, getRouterContacts, getRouterWork} from "@/commons/const/router-path";
import AppBurger from "../ui/app-burger";

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isScrollingUp = prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70;
        const isNearTop = currentScrollPos < 10;

        setVisible(isScrollingUp || isNearTop);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    const links = [
        {link: "Work", path: getRouterWork},
        {link: "About", path: getRouterAbout},
        {link: "Contact", path: getRouterContacts},
    ];

    return (
        <header id="navbar"
                className={`fixed top-0 w-full z-30 transition-transform duration-300 ease-out ${visible ? 'translate-y-0' : '-translate-y-full'} flex items-center h-20`}>
            <div className="container mx-auto w-full px-10 flex justify-between items-center">
                <div className="text-white">Logo</div>
                <nav className="hidden md:block">
                    <ul className="flex gap-10 items-center">
                        {links.map((link) => (
                            <li key={link.path}>
                                <Link to={link.path} className="text-white">{link.link}</Link>
                            </li>
                        ))}
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
