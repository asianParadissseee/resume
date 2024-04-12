import {RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import routerConfig from "@/commons/config/router-config";
import ThemeProvider from "@/commons/context/theme-provider";
import SidebarProvider from "@/commons/context/sidebar-provider";

const App = () => {
    return (
        <ThemeProvider>
            <SidebarProvider>
                <Suspense fallback={"loader"}>
                    <RouterProvider router={routerConfig}/>
                </Suspense>
            </SidebarProvider>
        </ThemeProvider>
    );
};

export default App;