import {useContext} from "react";
import {SidebarContext} from "../context/sidebar-provider";

export const useShowSidebar = () => useContext(SidebarContext)