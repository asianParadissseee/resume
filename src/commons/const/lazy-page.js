import {lazy} from "react";

export const HomePage = lazy(()=>import("@/pages/home-page"))
export const AboutPage = lazy(()=>import("@/pages/about-page"))
export const ContactsPage = lazy(()=>import("@/pages/contacts-page"))
export const WorkPage = lazy(()=>import("@/pages/work-page"))