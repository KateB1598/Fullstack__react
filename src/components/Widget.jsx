import { createContext } from "react";
import List from "./List";
import User from "./User";

export const ThemeContext = createContext(null);
const Widget = () => {
  return (
    <ThemeContext.Provider value={{ theme: "light" }}>
      <List />
      <User />
    </ThemeContext.Provider>
  );
};
export default Widget;
