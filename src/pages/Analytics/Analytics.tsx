import StatsCard from "../../components/chart/StatsCard";
import Section from "../../components/layout/Section";
import Heading from "../../components/Typography/Heading";
import { analyticsStats } from "./data";

const Analytics = () => {
  return (
    <Section>
      <Heading>Analytics</Heading>
      <div className="@container py-4 grid grid-cols-2 @[900px]:grid-cols-4 gap-2">
        {analyticsStats.map((stat) => (
          <StatsCard key={stat.title} title={stat.title} value={stat.value} change={stat.change} />
        ))}
      </div>
    </Section>
  );
};

export default Analytics;
