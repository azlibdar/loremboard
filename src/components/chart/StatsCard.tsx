import { TrendingDown, TrendingUp } from "lucide-react";

interface Props {
  title: string;
  value: string;
  change?: number;
}

const StatsCard = ({ title, value, change }: Props) => {
  return (
    <div className="w-full bg-white dark:bg-zinc-900 transition shadow-sm ring-1 ring-zinc-100 dark:ring-zinc-800 p-6 rounded-lg">
      <h3 className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center justify-between gap-2">
        {title}
        {change &&
          (change > 0 ? (
            <span className="flex items-center gap-1 text-xs text-green-600 dark:text-green-500">
              {change}%
              <TrendingUp size={18} />
            </span>
          ) : change < 0 ? (
            <span className="flex items-center gap-1 text-xs text-red-500">
              {change}%
              <TrendingDown size={18} />
            </span>
          ) : null)}
      </h3>
      <p className="text-xl lg:text-2xl mt-1 font-semibold text-zinc-900 dark:text-zinc-100">{value}</p>
    </div>
  );
};

export default StatsCard;
