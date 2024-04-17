import {Fragment} from "react";
import Navbar from "@/components/widgets/navbar";
import Sidebar from "@/components/widgets/sidebar";
import Footer from "@/components/widgets/footer";
import AppTooltip from "@/components/ui/app-tooltip";
import {useShowSidebar} from "../commons/hooks/use-sidebar";
import {AnimatePresence} from "framer-motion";
import AnimatedCursor from "react-animated-cursor";
import {useTheme} from "../commons/hooks/use-theme";

const BaseLayout = ({children}) => {
    const {isShowSidebar} = useShowSidebar()
    const {handleThemeSwitch, theme} = useTheme()

    return (
        <>
            <Navbar/>
            <Sidebar/>
            <AnimatedCursor
                innerSize={14}
                outerSize={14}
                color={theme === "dark" ? "255, 255, 255" : "0,0,0"}
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                ]}
            />
            <main className="relative">
                <AppTooltip/>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default BaseLayout;