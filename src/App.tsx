import { Outlet } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import { useState } from "react";
import useTheme from "./hooks/useTheme";
import ThemeContext from "./Context/ThemeContext";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="w-full h-screen overflow-hidden flex">
        <Sidebar isMobileSidebarOpen={isMobileSidebarOpen} onMobileSidebarClose={toggleMobileSidebar} />
        <main className="w-full flex flex-col overflow-y-auto">
          <Header onMobileSidebarOpen={toggleMobileSidebar} />
          <Outlet />
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
