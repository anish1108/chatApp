import React, { createContext, useState } from 'react';

// Create a context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [mainpage, setMainpage] = useState(false);

  return (
    <UserContext.Provider value={{ mainpage, setMainpage }}>
      {children}
    </UserContext.Provider>
  );
};
