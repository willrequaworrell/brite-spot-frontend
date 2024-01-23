// UserContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

import { fetchUserDetails } from '../util/apiCalls';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Fetch additional user details when currentUser changes (e.g., on login)
    const fetchWrapper = async (userId) => {
        return await fetchUserDetails(userId)
    }
    if (currentUser) {
        const response = fetchWrapper(currentUser)
        console.log(response)
      // Make a request to fetch user details using currentUser.userId
      // Update setUserDetails with the fetched data
    }
  }, [currentUser]);

  return (
    <UserContext.Provider value={userDetails}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
