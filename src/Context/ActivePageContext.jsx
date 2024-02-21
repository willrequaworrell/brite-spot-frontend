import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ActivePageContext = createContext()

export const ActivePageProvider = ({children}) => {
    const [activePage, setActivePage] = useState('home')

    const location = useLocation()

    useEffect(() => {
        const currentPath = window.location.pathname

        if (currentPath === "/") {
            setActivePage('enter')
        } 
        else if (currentPath === "/history") {
            setActivePage('history')
        } 
        else if (currentPath === "/visualize") {
            setActivePage('visualize')
        }
        else {
            setActivePage(currentPath)
        }
        
    } , [location])

    return (
        <ActivePageContext.Provider value={{activePage, setActivePage}}>
            {children}
        </ActivePageContext.Provider>
    )
}

export const useActivePage = () => useContext(ActivePageContext)