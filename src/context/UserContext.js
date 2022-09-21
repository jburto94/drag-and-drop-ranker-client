import { createContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  setUser: () => {},
  isLoggedIn: null,
  setIsLoggedIn: () => {}
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};