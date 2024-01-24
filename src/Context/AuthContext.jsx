import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)

    const login = (user) => {
      // Perform any necessary authentication logic
      setCurrentUser(user);
    };
  
    const logout = () => {
      // Perform any necessary logout logic
      setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
          {children}
        </AuthContext.Provider>
      );
}

export const useAuth = () => useContext(AuthContext);