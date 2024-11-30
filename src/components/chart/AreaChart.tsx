import { useContext, useState } from "react";
import { Area, CartesianGrid, Legend, AreaChart as RechartAreaChart, Tooltip, XAxis, YAxis } from "recharts";
import ChartWrapper from "./ChartWrapper";
import ThemeContext from "../../Context/ThemeContext";

type WeeklyDataPoint = {
  day: string;
  revenue: number;
  target: number;
};

type MonthlyDataPoint = {
  week: string;
  revenue: number;
  target: number;
};

type YearlyDataPoint = {
  month: string;
  revenue: number;
  target: number;
};

interface PeriodData {
  weekly?: WeeklyDataPoint[];
  monthly?: MonthlyDataPoint[];
  yearly: YearlyDataPoint[];
}

interface ChartData {
  title: string;
  periods: PeriodData;
}

interface AreaChartProps {
  data: ChartData;
}

const SELECT_DATA = [
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
];

const COLORS = {
  light: {
    target: { start: "#f43f5e", end: "#f43f5e90" },
    revenue: { start: "#10b981", end: "#10b98190" },
  },
  dark: {
    target: { start: "#fb7185", end: "#fb718590" },
    revenue: { start: "#34d399", end: "#34d3990" },
  },
};

const AreaChart = ({ data }: AreaChartProps) => {
  const { theme } = useContext(ThemeContext);
  const currentColors = theme === "dark" ? COLORS.dark : COLORS.light;
  const [selectedPeriod, setSelectedPeriod] = useState<"weekly" | "monthly" | "yearly">("yearly");

  const handleSelectPeriod = (value: string) => {
    setSelectedPeriod(value as "weekly" | "monthly" | "yearly");
  };

  const getXaxisValue = (): string => {
    switch (selectedPeriod) {
      case "weekly":
        return "day";
      case "monthly":
        return "week";
      case "yearly":
        return "month";
    }
  };

  const getDataKey = () => {
    switch (selectedPeriod) {
      case "weekly":
        return data.periods.weekly || [];
      case "monthly":
        return data.periods.monthly;
      case "yearly":
        return data.periods.yearly || [];
    }
  };

  return (
    <ChartWrapper title={data.title} selectData={SELECT_DATA} selectValue={selectedPeriod} onSelect={handleSelectPeriod}>
      <RechartAreaChart data={getDataKey()}>
        <defs>
          <linearGradient id="targetGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={currentColors.target.start} stopOpacity={theme === "dark" ? 1 : 0.6} />
            <stop offset="100%" stopColor={currentColors.target.end} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={currentColors.revenue.start} stopOpacity={theme === "dark" ? 1 : 0.6} />
            <stop offset="100%" stopColor={currentColors.revenue.end} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-zinc-300 dark:text-zinc-700" />
        <XAxis
          dataKey={getXaxisValue()}
          className="text-xs text-zinc-400 dark:text-zinc-500"
          axisLine={{ stroke: "currentColor" }}
          tickLine={false}
        />
        <YAxis className="text-xs text-zinc-400 dark:text-zinc-500" axisLine={{ stroke: "currentColor" }} tickLine={false} />
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
        <Legend
          wrapperStyle={{
            fontSize: "0.75rem",
            fontWeight: "450",
          }}
          iconSize={10}
          layout="horizontal"
          verticalAlign="bottom"
        />
        <Area type="linear" dataKey="target" stroke={currentColors.target.start} fill="url(#targetGradient)" fillOpacity={0.6} />
        <Area type="linear" dataKey="revenue" stroke={currentColors.revenue.start} fill="url(#revenueGradient)" fillOpacity={0.6} />
      </RechartAreaChart>
    </ChartWrapper>
  );
};

export default AreaChart;