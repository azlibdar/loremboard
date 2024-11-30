import { Cell, Pie, PieChart as RechartPieChart, Tooltip } from "recharts";
import ChartWrapper from "./ChartWrapper";
import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";

interface CategoryData {
  name: string;
  value: number;
}

interface ChartData {
  title: string;
  data: CategoryData[];
}

interface Props {
  data: ChartData;
  shape?: "default" | "donut";
}

const COLORS = {
  light: ["#10b981", "#3b82f6", "#f97316", "#a855f7", "#ec4899", "#71717a", "#d946ef"],
  dark: ["#10b981", "#3b82f6", "#f97316", "#a855f7", "#ec4899", "#a1a1aa", "#d946ef"],
};

const PieChart = ({ data, shape = "default" }: Props) => {
  const { theme } = useContext(ThemeContext);
  const currentColors = theme === "dark" ? COLORS.dark : COLORS.light;

  const getColor = (index: number) => {
    return currentColors[index % currentColors.length];
  };

  return (
    <ChartWrapper title={data.title}>
      <RechartPieChart>
        <Pie
          data={data.data}
          cx={"50%"}
          cy={"50%"}
          labelLine={false}
          outerRadius={100}
          innerRadius={shape === "donut" ? 60 : 0}
          stroke={theme === "dark" ? "#18181b" : "#ffffff"}
          dataKey="value"
          strokeWidth={2}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={getColor(index)} fontSize={"0.75rem"} fontWeight={"450"} />
          ))}
        </Pie>
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
      </RechartPieChart>
    </ChartWrapper>
  );
};

export default PieChart;
