import BarChart from "../../components/chart/BarChart";
import LineChart from "../../components/chart/LineChart";
import PieChart from "../../components/chart/PieChart";
import StatsCard from "../../components/chart/StatsCard";
import Section from "../../components/layout/Section";
import Heading from "../../components/Typography/Heading";
import { categoryOverviewData, channelOverviewData, overviewStats, salesOverviewData } from "./data";

const Overview = () => {
  return (
    <Section>
      <Heading>Overview</Heading>
      <div className="@container py-4 grid grid-cols-2 @[900px]:grid-cols-4 gap-2">
        {overviewStats.map((stat) => (
          <StatsCard key={stat.title} title={stat.title} value={stat.value} change={stat.change} />
        ))}
      </div>
      <div className="@contaner w-full grid grid-cols-1 @[900px]:grid-cols-2 gap-2">
        <LineChart data={salesOverviewData} />
        <PieChart data={categoryOverviewData} shape="donut" />
      </div>
      <div className="w-full grid grid-cols-1 mt-4">
        <BarChart data={channelOverviewData} />
      </div>
    </Section>
  );
};

export default Overview;
