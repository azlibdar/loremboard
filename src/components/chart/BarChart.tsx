import { Bar, CartesianGrid, Cell, BarChart as RechartBarChart, Tooltip, XAxis, YAxis } from "recharts";
import ChartWrapper from "./ChartWrapper";
import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";
import { COLORS } from "./colors";

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

const BarChart = ({ data }: Props) => {
  const { theme } = useContext(ThemeContext);
  const currentColors = theme === "dark" ? COLORS.dark : COLORS.light;

  const getColor = (index: number) => {
    return currentColors[index % currentColors.length];
  };

  return (
    <ChartWrapper title={data.title}>
      <RechartBarChart data={data.data}>
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
        <Bar dataKey={"value"} radius={[4, 4, 0, 0]}>
          {data.data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={getColor(index)} />
          ))}
        </Bar>
      </RechartBarChart>
    </ChartWrapper>
  );
};

export default BarChart;
