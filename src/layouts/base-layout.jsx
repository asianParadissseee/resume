import {Fragment} from "react";
import Navbar from "@/components/widgets/navbar";
import Sidebar from "@/components/widgets/sidebar";
import Footer from "@/components/widgets/footer";
import AppTooltip from "@/components/ui/app-tooltip";

const BaseLayout = ({children}) => {
    return (
        <Fragment>
            <Navbar/>
            <main className="relative">
                <AppTooltip/>
                <Sidebar/>
                {children}
            </main>
            <Footer/>
        </Fragment>
    );
};

export default BaseLayout;