import { ResponsiveContainer } from "recharts";
import { ReactElement } from "react";
import SelectInput from "../common/SelectInput";

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
        {selectData && <SelectInput selectData={selectData} selectValue={selectValue} onSelect={onSelect} label="chart-select" />}
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
