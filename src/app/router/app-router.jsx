import {Route, Routes} from "react-router-dom";
import HomePage from "../../pages/home/home-page";
import {Suspense} from "react";

const AppRouter = () => {

    const configRouter = [
        {
            path: "/",
            element: <HomePage/>
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
