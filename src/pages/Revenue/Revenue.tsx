import AIChart from "../../components/chart/AIChart";
import AreaChart from "../../components/chart/AreaChart";
import StatsCard from "../../components/chart/StatsCard";
import Button from "../../components/common/Button";
import Section from "../../components/layout/Section";
import Heading from "../../components/Typography/Heading";
import { insightsByAi, revenueOverview, revenueStats } from "./data";

const Revenue = () => {
  return (
    <Section>
      <Heading>
        Revenue
        <Button variant="secondary" size="compact">
          Withdraw funds
        </Button>
      </Heading>
      <div className="@container py-4 grid grid-cols-2 @[900px]:grid-cols-4 gap-2">
        {revenueStats.map((stat) => (
          <StatsCard key={stat.title} title={stat.title} value={stat.value} change={stat.change} />
        ))}
      </div>
      <div className="w-full grid grid-cols-1 gap-4">
        <AreaChart data={revenueOverview} />
        <AIChart data={insightsByAi} />
      </div>
    </Section>
  );
};

export default Revenue;
