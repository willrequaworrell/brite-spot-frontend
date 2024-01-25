import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState } from "react";
import { removeTokenCookie } from "../util/cookieHelper";


const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)

    const login = (token) => {
      // Perform any necessary authentication logic
      console.log(token)
      const decodedToken = jwtDecode(token)
      setCurrentUser(decodedToken.userId);
    };
  
    const logout = () => {
      // Perform any necessary logout logic
      removeTokenCookie()
      setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
          {children}
        </AuthContext.Provider>
      );
}

export const useAuth = () => useContext(AuthContext);