import {Suspense} from "react"
import {createBrowserRouter} from "react-router-dom";
import {
    WorkPage,
    HomePage,
    ContactsPage,
    AboutPage
} from "../const/lazy-page"
import {
    getRouterAbout,
    getRouterContacts,
    getRouterHome,
    getRouterWork
} from "../const/router-path";
import AppLoader from "@/components/ui/app-loader";

const routerConfig = createBrowserRouter([
    {
        path: getRouterHome(),
        element: (
            <Suspense fallback={<AppLoader/>}>
                <HomePage/>
            </Suspense>
        )
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
        element: <ContactsPage/>
    },
])
export default routerConfig