import { useCallback, useEffect, useState } from "react";

// Define Theme type
type Theme = "light" | "dark";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("theme");

    // Type guard to ensure only 'light' or 'dark' are accepted
    const isValidTheme = (value: string | null): value is Theme => value === "light" || value === "dark";

    if (isValidTheme(storedTheme)) {
      return storedTheme;
    }

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (theme: Theme) => {
      if (theme === "dark") {
        root.style.colorScheme = "dark";
        root.classList.add("dark");
        root.classList.remove("light");
      } else {
        root.style.colorScheme = "light";
        root.classList.add("light");
        root.classList.remove("dark");
      }

      root.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    };

    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  const changeTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
  }, []);

  return { theme, setTheme: changeTheme, toggleTheme };
};

export default useTheme;
