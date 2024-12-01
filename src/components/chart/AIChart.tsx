interface InsightsData {
  title: string;
  insights: string[];
}

interface Props {
  data: InsightsData;
}

const AIChart = ({ data }: Props) => {
  return (
    <div className="w-full rounded-xl bg-white dark:bg-zinc-900 ring-1 ring-zinc-100 dark:ring-zinc-800 p-6 shadow-sm transition">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-base font-[550] text-zinc-950 dark:text-zinc-100">{data.title}</h3>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 mt-6">
        {data.insights.map((insight, index) => (
          <div key={index} className="w-full p-6 shadow-sm border border-dashed border-zinc-200 dark:border-zinc-700 rounded-xl">
            <p className="text-sm bg-gradient-to-br font-medium from-rose-500 to-blue-600 dark:from-rose-400 dark:to-blue-400 leading-normal bg-clip-text text-transparent">
              {insight}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIChart;
