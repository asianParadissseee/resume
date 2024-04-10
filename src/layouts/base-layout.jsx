import {Fragment} from "react";
import Navbar from "@/components/widgets/navbar";
import Sidebar from "@/components/widgets/sidebar";
import Footer from "@/components/widgets/footer";

const BaseLayout = ({children}) => {
    return (
        <Fragment>
            <Navbar/>
            <main>
                <Sidebar/>
                {children}
            </main>
            <Footer/>
        </Fragment>
    );
};

export default BaseLayout;