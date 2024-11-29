import React from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = React.createContext({} as ThemeContextType);

export default ThemeContext;
