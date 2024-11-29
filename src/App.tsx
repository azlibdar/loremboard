import { Outlet } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";

const App = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex">
      <Sidebar />
      <main className="w-full flex flex-col overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
