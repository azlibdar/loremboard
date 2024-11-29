import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import LogoLight from "../../assets/logo-mark-light.svg";
import { navLinks } from "../../constants";
import { BadgePercent, BarChart2, ChevronsUpDownIcon, LayoutGrid, Settings, ShoppingCart, TrendingUp, Users, X } from "lucide-react";
import useIsMobile from "../../hooks/useIsMobile";
import { cn } from "../../lib/utils";
import IconButton from "../common/IconButton";

interface Props {
  isMobileSidebarOpen: boolean;
  onMobileSidebarClose: () => void;
  onClose?: () => void;
}

const Sidebar = ({ isMobileSidebarOpen, onClose, onMobileSidebarClose }: Props) => {
  const { isMobile } = useIsMobile();

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
            "flex flex-col bg-white border-r border-zinc-100",
            isMobile ? "w-full" : "w-72 min-w-72",
            isMobile && !isMobileSidebarOpen ? "hidden" : ""
          )}
        >
          <div className="p-5 flex items-center justify-between">
            <img src={LogoLight} alt="logo" className="w-12 min-w-12" />
            {isMobile && (
              <IconButton onClick={onMobileSidebarClose} size="compact" variant="tertiary">
                <X size={20} strokeWidth={1.75} />
              </IconButton>
            )}
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
              <NavLink key={link.to} to={link.to} className="nav-link" onClick={isMobile ? onClose : undefined}>
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
