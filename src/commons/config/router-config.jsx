import {createBrowserRouter} from "react-router-dom";
import HomePage from "@/pages/home-page";
import AboutPage from "@/pages/about-page";
import WorkPage from "@/pages/work-page";
import {
    getRouterAbout,
    getRouterContacts,
    getRouterHome,
    getRouterWork
} from "../const/router-path";

const routerConfig = createBrowserRouter([
    {
        path: getRouterHome(),
        element: <HomePage/>
    },
    {
        path: getRouterAbout(),
        element: <AboutPage/>
    },
    {
        path: getRouterWork(),
        element: <WorkPage/>
    },
    {
        path: getRouterContacts(),
        element: <AboutPage/>
    },
])
export default routerConfig