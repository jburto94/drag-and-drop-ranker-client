import { createContext, useState } from "react";

export const UserListsContext = createContext({
  lists: [],
  setLists: () => {}
});

export const UserListsProvider = ({ children }) => {
  const [lists, setLists] = useState([]);

  const value = {
    lists,
    setLists
  };

  return <UserListsContext.Provider value={value}>{children}</UserListsContext.Provider>;
};