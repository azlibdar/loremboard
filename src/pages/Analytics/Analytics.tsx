import AIChart from "../../components/chart/AIChart";
import AreaChart from "../../components/chart/AreaChart";
import LineChart from "../../components/chart/LineChart";
import PieChart from "../../components/chart/PieChart";
import StatsCard from "../../components/chart/StatsCard";
import Section from "../../components/layout/Section";
import Heading from "../../components/Typography/Heading";
import { analyticsStats, insightsByAi, regionSalesData, revenueVsTarget, userRetentionData } from "./data";

const Analytics = () => {
  return (
    <Section>
      <Heading>Analytics</Heading>
      <div className="@container py-4 grid grid-cols-2 @[900px]:grid-cols-4 gap-2">
        {analyticsStats.map((stat) => (
          <StatsCard key={stat.title} title={stat.title} value={stat.value} change={stat.change} />
        ))}
      </div>
      <div className="w-full grid grid-cols-1">
        <AreaChart data={revenueVsTarget} />
      </div>
      <div className="@contaner w-full py-4 grid grid-cols-1 @[900px]:grid-cols-2 gap-2">
        <LineChart data={userRetentionData} />
        <PieChart data={regionSalesData} shape="donut" />
      </div>
      <div className="w-full grid grid-cols-1">
        <AIChart data={insightsByAi} />
      </div>
    </Section>
  );
};

export default Analytics;
