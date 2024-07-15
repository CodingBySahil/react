import { createContext, useContext } from "react";

const themeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

const ThemeProvider = themeContext.Provider;
export default ThemeProvider;

export const useTheme = () => {
  return useContext(themeContext);
};
