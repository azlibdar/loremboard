import { ResponsiveContainer } from "recharts";
import { ReactElement } from "react";

interface ChartWrapperProps {
  title: string;
  children: ReactElement;
}

const ChartWrapper = ({ title, children }: ChartWrapperProps) => {
  return (
    <div className="w-full rounded-xl bg-white dark:bg-zinc-900 ring-1 ring-zinc-100 dark:ring-zinc-800 p-6 shadow-sm transition">
      <h3 className="text-base font-[550] text-zinc-950 dark:text-zinc-100">{title}</h3>
      <div className="w-full mt-8 h-60 lg:h-80">
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartWrapper;
