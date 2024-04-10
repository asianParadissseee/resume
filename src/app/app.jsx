import {RouterProvider} from "react-router-dom";
import routerConfig from "../commons/config/router-config";
import {AnimatePresence} from "framer-motion";

const App = () => {
    return (
            <RouterProvider router={routerConfig}/>
    );
};

export default App;