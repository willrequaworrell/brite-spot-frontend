import { createContext, useContext, useState } from "react";

const ActivePageContext = createContext()

export const ActivePageProvider = ({children}) => {
    const [activePage, setActivePage] = useState('home')

    return (
        <ActivePageContext.Provider value={{activePage, setActivePage}}>
            {children}
        </ActivePageContext.Provider>
    )
}

export const useActivePage = () => useContext(ActivePageContext)