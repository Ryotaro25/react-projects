import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page: '', links: []});

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSubmenu = (text, cordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setLocation(cordinates);
        setSubmenuOpen(true);
    }

    const closeSubmenu = () => {
        setSubmenuOpen(false);
    }


    return <AppContext.Provider value={{
        isSubmenuOpen, 
        isSidebarOpen,
        openSidebar, 
        closeSidebar, 
        openSubmenu, 
        closeSubmenu,
        location,
        page
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalConText = () => {
    return useContext(AppContext);
}