import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {HomePageAsync} from "../../pages/home/home-page.async";

const AppRouter = () => {

    const configRouter = [
        {
            path: "/",
            element: <HomePageAsync/>
        },
        {
            path: "/contact",
            element: <></>
        }
    ]

    return (
        <Routes>
            {configRouter.map((route) => (
                <Route key={route.path} element={
                    <Suspense fallback={"loading..."}>
                        {route.element}
                    </Suspense>
                } path={route.path}/>
            ))}
        </Routes>
    );
};

export default AppRouter;
