import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex">
      <main className="w-full flex flex-col overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
