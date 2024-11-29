import { Menu, SunDim } from "lucide-react";
import IconButton from "../common/IconButton";

const Header = () => {
  return (
    <header className="bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2.5 px-6">
        <div className="flex items-center gap-1.5">
          <IconButton onClick={() => {}} size="compact" variant="tertiary" className="lg:hidden">
            <Menu size={18} strokeWidth={1.75} />
          </IconButton>
          <h2 className="text-sm font-medium text-zinc-800">Loremboard</h2>
        </div>
        <IconButton onClick={() => {}} size="compact">
          <SunDim size={20} strokeWidth={1.75} />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
