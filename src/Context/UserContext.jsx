import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

import { fetchUserDetails } from '../util/apiCalls';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    
    if (currentUser) {
      
      const fetchWrapper = async () => {
        try {
          const response = await fetchUserDetails(currentUser)
          setUserDetails(response)
          console.log("fetchWrapper", response)
        } catch (error) {
          console.log(error)
        }
      }
      
      fetchWrapper()
      
    }
  }, [currentUser]);

  return (
    <UserContext.Provider value={userDetails}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
