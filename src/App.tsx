import { Outlet } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex">
      <Sidebar />
      <main className="w-full flex flex-col overflow-y-auto">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default App;
