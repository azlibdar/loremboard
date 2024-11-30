import { Line, LineChart as RechartsLineChart, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import ChartWrapper from "./ChartWrapper";
import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";

interface SalesData {
  name: string;
  value: number;
}

interface ChartData {
  title: string;
  xAxisLabel: string;
  yAxisLabel: string;
  data: SalesData[];
}

interface Props {
  data: ChartData;
}

const LineChart = ({ data }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ChartWrapper title={data.title}>
      <RechartsLineChart data={data.data}>
        <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-zinc-300 dark:text-zinc-700" />
        <XAxis
          dataKey="name"
          className="text-xs text-zinc-400 dark:text-zinc-500"
          axisLine={{ stroke: "currentColor" }}
          tick={{ fill: "currentColor" }}
          tickLine={{ stroke: "currentColor" }}
        />
        <YAxis
          className="text-xs text-zinc-400 dark:text-zinc-500"
          axisLine={{ stroke: "currentColor" }}
          tick={{ fill: "currentColor" }}
          tickLine={{ stroke: "currentColor" }}
        />
        <Tooltip
          cursor={false}
          contentStyle={{
            backgroundColor: theme === "dark" ? "#09090b" : "#ffffff",
            color: theme === "dark" ? "#f4f4f5" : "#18181b",
            borderRadius: "0.5rem",
            borderColor: theme === "dark" ? "#18181b" : "#f4f4f5",
            fontSize: "0.75rem",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
          itemStyle={{
            fontSize: "0.75rem",
            fontWeight: "500",
            color: theme === "dark" ? "#f4f4f5" : "#18181b",
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#3b82f6"
          className="text-blue-500 dark:text-blue-500"
          strokeWidth={2}
          dot={{
            fill: "currentColor",
            strokeWidth: 2,
            r: 4,
          }}
          activeDot={{
            r: 6,
            strokeWidth: 2,
            stroke: theme === "dark" ? "#000000" : "#ffffff",
          }}
        />
      </RechartsLineChart>
    </ChartWrapper>
  );
};

export default LineChart;
