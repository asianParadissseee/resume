import {Fragment} from "react";
import Navbar from "@/components/widgets/navbar";
import Sidebar from "@/components/widgets/sidebar";
import Footer from "@/components/widgets/footer";
import AppTooltip from "@/components/ui/app-tooltip";
import {useShowSidebar} from "../commons/hooks/use-sidebar";
import {AnimatePresence} from "framer-motion";

const BaseLayout = ({children}) => {
    const {isShowSidebar} = useShowSidebar()
    return (
        <Fragment>
                <Navbar/>
                <Sidebar/>
                <main className="relative">
                    <AppTooltip/>
                    {children}
                </main>
                <Footer/>
        </Fragment>
    );
};

export default BaseLayout;