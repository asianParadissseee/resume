import {Fragment} from "react";
import Navbar from "@/components/widgets/navbar";
import Footer from "@/components/widgets/footer";
import Sidebar from "@/components/widgets/sidebar";

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