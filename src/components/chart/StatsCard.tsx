import { TrendingDown, TrendingUp } from "lucide-react";

interface Props {
  title: string;
  value: string;
  change?: number;
}

const StatsCard = ({ title, value, change }: Props) => {
  const calculateChange = () => {
    if (change) {
      return change > 0 ? `+${change}% in 24hrs` : change < 0 ? `${change}% in 24hrs` : "0% in 24hrs";
    }
  };
  return (
    <div
      title={calculateChange()}
      className="w-full bg-white dark:bg-zinc-900 transition shadow-sm ring-1 ring-zinc-100 dark:ring-zinc-800 p-6 rounded-lg"
    >
      <h3 className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
        {title}
        <span className="center-everything">
          {change &&
            (change > 0 ? (
              <TrendingUp size={18} className="text-green-600 dark:text-green-500" />
            ) : change < 0 ? (
              <TrendingDown size={18} className="text-red-500" />
            ) : null)}
        </span>
      </h3>
      <p className="text-xl lg:text-2xl mt-1 font-semibold text-zinc-900 dark:text-zinc-100">{value}</p>
    </div>
  );
};

export default StatsCard;
