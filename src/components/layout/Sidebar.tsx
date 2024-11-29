import { NavLink } from "react-router-dom";
import LogoLight from "../../assets/logo-mark-light.svg";
import { navLinks } from "../../constants";
import { BadgePercent, BarChart2, ChevronsUpDownIcon, LayoutGrid, Settings, ShoppingCart, TrendingUp, Users } from "lucide-react";

const Sidebar = () => {
  // Function to get the icon based on the icon name
  const getIcon = (iconName: string) => {
    if (iconName === "BarChart2") return <BarChart2 size={18} strokeWidth={1.75} />;
    if (iconName === "LayoutGrid") return <LayoutGrid size={18} strokeWidth={1.75} />;
    if (iconName === "Users") return <Users size={18} strokeWidth={1.75} />;
    if (iconName === "BadgePercentage") return <BadgePercent size={18} strokeWidth={1.75} />;
    if (iconName === "ShoppingCart") return <ShoppingCart size={18} strokeWidth={1.75} />;
    if (iconName === "TrendingUp") return <TrendingUp size={18} strokeWidth={1.75} />;
    if (iconName === "Settings") return <Settings size={18} strokeWidth={1.75} />;
  };

  return (
    <aside className="w-72 min-w-72 flex flex-col bg-white border-r border-zinc-100">
      <div className="p-5 flex items-center justify-between">
        <img src={LogoLight} alt="logo" className="w-12 min-w-12" />
      </div>
      <div className="p-2.5 border-b border-zinc-100">
        <button className="w-full p-2.5 flex items-center justify-between rounded-lg transition hover:bg-zinc-100">
          <div className="flex items-center gap-2">
            <img
              src="https://avatars.githubusercontent.com/u/121456353?v=4"
              alt="avatar"
              className="w-8 min-w-8 aspect-square rounded-full"
            />
            <div className="text-left">
              <h3 className="text-sm font-medium text-zinc-950">Azlan Ibrahim</h3>
              <p className="text-xs text-zinc-600">azlibdar@gmail.com</p>
            </div>
          </div>
          <ChevronsUpDownIcon size={20} strokeWidth={1.75} className="text-zinc-600" />
        </button>
      </div>
      <div className="h-full flex gap-2.5 flex-col overflow-y-auto px-2.5 py-5">
        {navLinks.map((link) => (
          // nav-link class in index.css
          <NavLink key={link.to} to={link.to} className="nav-link">
            <span className="center-everything">{getIcon(link.icon)}</span>
            {link.title}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
