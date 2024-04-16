import {lazy} from "react";


export const HomePage = lazy(() =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(import("@/pages/home-page"));
        }, 2000);
    })
);
export const AboutPage = lazy(() => import("@/pages/about-page"))
export const ContactsPage = lazy(() => import("@/pages/contacts-page"))
export const WorkPage = lazy(() => import("@/pages/work-page"))