import {Fragment} from "react";
import {AnimatePresence} from "framer-motion";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "@/components/widgets/navbar";
import Sidebar from "@/components/widgets/sidebar";
import Footer from "@/components/widgets/footer";
import AppTooltip from "@/components/ui/app-tooltip";
import {useTheme} from "@/commons/hooks/use-theme";
import AppCursor from "@/components/ui/app-cursor";
import {useMediaQuery} from "../commons/hooks/use-media";

const BaseLayout = ({children}) => {
    const {handleThemeSwitch, theme} = useTheme()

    const isMobile = useMediaQuery("(max-width: 640px)")
    return (
        <>
            <Navbar/>
            <Sidebar/>
            {!isMobile && (
                <AppCursor/>
            )}
            <main className="relative">
                <AppTooltip/>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default BaseLayout;