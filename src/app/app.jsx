import {RouterProvider} from "react-router-dom";
import routerConfig from "@/commons/config/router-config";
import ThemeProvider from "@/commons/context/theme-provider";

const App = () => {


    return (
        <ThemeProvider>
            <RouterProvider router={routerConfig}/>
        </ThemeProvider>
    );
};

export default App;