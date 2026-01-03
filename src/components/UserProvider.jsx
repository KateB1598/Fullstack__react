import React, { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "Hillel User" });
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
export default UserProvider;
