import { Sidebar, Sun } from "lucide-react";
import IconButton from "../common/IconButton";
import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";

interface Props {
  onMobileSidebarOpen: () => void;
}

const Header = ({ onMobileSidebarOpen }: Props) => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <header className="bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2.5 px-4">
        <div className="flex items-center gap-1.5">
          <IconButton onClick={onMobileSidebarOpen} size="compact" variant="tertiary" className="md:hidden">
            <Sidebar size={20} strokeWidth={1.75} />
          </IconButton>
          <h2 className="text-sm font-medium text-zinc-800">Loremboard</h2>
        </div>
        <IconButton onClick={toggleTheme} size="compact">
          <Sun size={18} strokeWidth={1.75} />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
