import {RouterProvider} from "react-router-dom";
import routerConfig from "../commons/config/router-config";
import BaseLayout from "../layouts/base-layout";

const App = () => {
    return (
        <BaseLayout>
            <RouterProvider router={routerConfig}/>
        </BaseLayout>
    );
};

export default App;