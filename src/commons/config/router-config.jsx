import {createBrowserRouter} from "react-router-dom";
import {AboutPage, ContactsPage, HomePage, WorkPage} from "../const/lazy-page"
import {getRouterAbout, getRouterContacts, getRouterHome, getRouterWork} from "../const/router-path";

const routerConfig = createBrowserRouter([{
    path: getRouterHome(), element: (<HomePage/>)
}, {
    path: getRouterAbout(), element: <AboutPage/>
}, {
    path: getRouterWork(), element: <WorkPage/>
}, {
    path: getRouterContacts(), element: <ContactsPage/>
},])
export default routerConfig