import {RouterProvider} from "react-router-dom";
import routerConfig from "@/commons/config/router-config";
import ThemeProvider from "@/commons/context/theme-provider";
import SidebarProvider from "@/commons/context/sidebar-provider";

const App = () => {
    return (
        <ThemeProvider>
            <SidebarProvider>
                <RouterProvider router={routerConfig}/>
            </SidebarProvider>
        </ThemeProvider>
    );
};

export default App;