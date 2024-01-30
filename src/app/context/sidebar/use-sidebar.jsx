import {useContext} from "react";
import {SidebarContext} from "./sidebar.context";

export const useSidebar = () => {
    return useContext(SidebarContext)
}
