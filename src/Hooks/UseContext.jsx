/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const DarkMode = createContext();

function ComponentDarkMode({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return <DarkMode.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</DarkMode.Provider>;
}

export { DarkMode };
export default ComponentDarkMode;
