import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import LogoLight from "../../assets/logo-mark-light.svg";
import LogoDark from "../../assets/logo-mark-dark.svg";
import { navLinks } from "../../constants";
import { BadgePercent, BarChart2, ChevronsUpDownIcon, LayoutGrid, Settings, ShoppingCart, TrendingUp, Users, X } from "lucide-react";
import useIsMobile from "../../hooks/useIsMobile";
import { cn } from "../../lib/utils";
import IconButton from "../common/IconButton";
import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";

interface Props {
  isMobileSidebarOpen: boolean;
  onMobileSidebarClose: () => void;
}

const Sidebar = ({ isMobileSidebarOpen, onMobileSidebarClose }: Props) => {
  const { theme } = useContext(ThemeContext);
  const { isMobile } = useIsMobile();
  const navigate = useNavigate();

  const handleNavigate = (to: string) => {
    navigate(to);
    if (isMobile) {
      onMobileSidebarClose();
    }
  };

  // Function to get the icon based on the icon name
  const getIcon = (iconName: string) => {
    const iconMap = {
      BarChart2: <BarChart2 size={18} strokeWidth={1.75} />,
      LayoutGrid: <LayoutGrid size={18} strokeWidth={1.75} />,
      Users: <Users size={18} strokeWidth={1.75} />,
      BadgePercentage: <BadgePercent size={18} strokeWidth={1.75} />,
      ShoppingCart: <ShoppingCart size={18} strokeWidth={1.75} />,
      TrendingUp: <TrendingUp size={18} strokeWidth={1.75} />,
      Settings: <Settings size={18} strokeWidth={1.75} />,
    };
    return iconMap[iconName as keyof typeof iconMap];
  };

  // Sidebar animation variants
  const sidebarVariants = {
    hidden: {
      x: isMobile ? "-100%" : 0,
      opacity: isMobile ? 0 : 1,
      transition: {
        type: "tween",
        duration: 0.1,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {(isMobileSidebarOpen || !isMobile) && (
        <motion.aside
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={sidebarVariants}
          className={cn(
            "fixed md:static z-50 top-0 left-0 h-full",
            "flex flex-col bg-white dark:bg-zinc-900 border-r border-zinc-100 dark:border-zinc-800",
            isMobile ? "w-full" : "w-72 min-w-72",
            isMobile && !isMobileSidebarOpen ? "hidden" : ""
          )}
        >
          <div className="p-5 flex items-center justify-between">
            <img src={theme === "dark" ? LogoDark : LogoLight} alt="logo" className="w-12 min-w-12" />
            {isMobile && (
              <IconButton onClick={onMobileSidebarClose} size="compact" variant="tertiary">
                <X size={20} strokeWidth={1.75} />
              </IconButton>
            )}
          </div>

          <div className="p-2.5 border-b border-zinc-100 dark:border-zinc-800">
            <button className="w-full p-2.5 flex items-center justify-between rounded-lg transition hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <div className="flex items-center gap-2">
                <img
                  src="https://avatars.githubusercontent.com/u/121456353?v=4"
                  alt="avatar"
                  className="w-8 min-w-8 aspect-square rounded-full"
                />
                <div className="text-left">
                  <h3 className="text-sm font-medium text-zinc-950 dark:text-zinc-100">Azlan Ibrahim</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300">azlibdar@gmail.com</p>
                </div>
              </div>
              <ChevronsUpDownIcon size={20} strokeWidth={1.75} className="text-zinc-600" />
            </button>
          </div>

          <div className="h-full flex gap-2.5 flex-col overflow-y-auto px-2.5 py-5">
            {navLinks.map((link) => (
              <NavLink to={link.to} className="nav-link" onClick={() => handleNavigate(link.to)}>
                <span className="center-everything">{getIcon(link.icon)}</span>
                {link.title}
              </NavLink>
            ))}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
