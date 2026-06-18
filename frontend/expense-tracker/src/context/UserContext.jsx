
import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to update user data
  const updateUser = (userData) => {
    setUser(userData);
  };

  // Function to clear user data (e.g., on logout)
  const clearUser = () => {
    setUser(null);
    // Also clear the token from localStorage when clearing user
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        clearUser, // Changed from ClearUser to clearUser (lowercase c)
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
