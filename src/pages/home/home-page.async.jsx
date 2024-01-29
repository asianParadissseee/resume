import {lazy} from "react";

export const HomePageAsync = lazy(async () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(import("./home-page"))
    }, 1500)
}))
