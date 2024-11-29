import { Outlet } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import { useState } from "react";

const App = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-screen overflow-hidden flex">
      <Sidebar isMobileSidebarOpen={isMobileSidebarOpen} onMobileSidebarClose={toggleMobileSidebar} />
      <main className="w-full flex flex-col overflow-y-auto">
        <Header onMobileSidebarOpen={toggleMobileSidebar} />
        <Outlet />
      </main>
    </div>
  );
};

export default App;
