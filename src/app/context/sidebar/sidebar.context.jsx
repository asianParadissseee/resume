import {createContext, useState} from "react";

export const SidebarContext = createContext()

const SidebarProvider = (props) => {
    const {children} = props
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const showSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <SidebarContext.Provider value={{isSidebarOpen, setIsSidebarOpen, showSidebar}}>
            {children}
        </SidebarContext.Provider>
    )
}
