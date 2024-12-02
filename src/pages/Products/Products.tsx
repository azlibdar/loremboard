import StatsCard from "../../components/chart/StatsCard";
import Button from "../../components/common/Button";
import Section from "../../components/layout/Section";
import ProductTable from "../../components/table/ProductTable";
import Heading from "../../components/Typography/Heading";
import { productsInventory, productStats } from "./data";

const Products = () => {
  return (
    <Section bgDiff>
      <Heading>
        Products
        <Button variant="primary" size="compact">
          Add new product
        </Button>
      </Heading>
      <div className="@container py-4 grid grid-cols-2 @[900px]:grid-cols-4 gap-2">
        {productStats.map((stat) => (
          <StatsCard key={stat.title} title={stat.title} value={stat.value} change={stat.change} />
        ))}
      </div>
      <div className="w-full py-4">
        <ProductTable data={productsInventory} />
      </div>
    </Section>
  );
};

export default Products;
