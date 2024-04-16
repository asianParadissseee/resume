import {Suspense} from "react"
import {RouterProvider} from "react-router-dom";
import routerConfig from "@/commons/config/router-config";
import ThemeProvider from "@/commons/context/theme-provider";
import SidebarProvider from "@/commons/context/sidebar-provider";
import AppLoader from "@/components/ui/app-loader";

const App = () => {
    return (
        <ThemeProvider>
            <SidebarProvider>
                <Suspense fallback={<AppLoader/>}>
                    <RouterProvider router={routerConfig}/>
                </Suspense>
            </SidebarProvider>
        </ThemeProvider>
    );
};

export default App;