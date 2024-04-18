import {createContext, useState} from "react";


export const SidebarContext = createContext(null)
const SidebarProvider = ({children}) => {
    const [isShowSidebar, setIsShowSidebar] = useState(false)

    const handleShowSidebar = () => {
        setIsShowSidebar(!isShowSidebar)
    }


    return (
        <SidebarContext.Provider value={{isShowSidebar, handleShowSidebar}}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;