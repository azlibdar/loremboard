import { ResponsiveContainer } from "recharts";
import { ReactElement } from "react";
import { ChevronsUpDown } from "lucide-react";

interface SelectDataProps {
  value: string;
  label: string;
}

interface ChartWrapperProps {
  title: string;
  children: ReactElement;
  selectData?: SelectDataProps[];
  onSelect?: (value: string) => void;
  selectValue?: string;
}

const ChartWrapper = ({ title, selectData, onSelect, selectValue, children }: ChartWrapperProps) => {
  return (
    <div className="w-full rounded-xl bg-white dark:bg-zinc-900 ring-1 ring-zinc-100 dark:ring-zinc-800 p-6 shadow-sm transition">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-base font-[550] text-zinc-950 dark:text-zinc-100">{title}</h3>
        {selectData && (
          <div className="relative">
            <label htmlFor="chart-select" className="sr-only">
              Select Chart
            </label>
            <select
              onChange={(e) => onSelect && onSelect(e.target.value)}
              value={selectValue && selectValue}
              id="chart-select"
              className="appearance-none cursor-pointer bg-white dark:bg-zinc-900 py-2.5 px-4 pr-8 ring-1 ring-inset ring-zinc-200 dark:ring-zinc-700/60 rounded-lg text-zinc-950 dark:text-zinc-100 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
            >
              {selectData.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
            <div className="absolute h-full pointer-events-auto right-0 transition top-0 pr-2 flex justify-center items-center">
              <ChevronsUpDown size={18} strokeWidth={1.75} className="text-zinc-500 dark:text-zinc-400" />
            </div>
          </div>
        )}
      </div>
      <div className="w-full mt-8 h-60 lg:h-80">
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartWrapper;
