import { useState, useMemo } from "react";
import SearchInput from "../common/SearchInput";
import Badge from "../common/Badge";
import Button from "../common/Button";

interface ColumnData {
  name: string;
  key: string;
}

interface RowsData {
  productName: string;
  category: string;
  stockLevel: number;
  reorderStatus: string;
  warehouseLocation: string;
}

interface TableData {
  title: string;
  columns: ColumnData[];
  rows: RowsData[];
}

interface Props {
  data: TableData;
}

const ProductTable = ({ data }: Props) => {
  const [visibleRows, setVisibleRows] = useState(10);

  // Filtered data
  const processedData = useMemo(() => {
    return data.rows.filter((row) => row.productName);
  }, [data.rows]);

  const handleLoadMore = () => {
    setVisibleRows((prev) => prev + 10);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-start md:flex-row md:items-end justify-between gap-4 w-full mt-8">
        <div>
          <h3 className="text-sm font-medium text-zinc-950 dark:text-zinc-200">All Products</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">A list of all products in the inventory.</p>
        </div>
        <SearchInput placeholder="Search products.." label="search-products" />
      </div>
      <div className="overflow-x-auto mt-6 pb-2">
        <table className="w-full">
          <thead className="border-b border-zinc-200 dark:border-zinc-700 whitespace-nowrap">
            <tr>
              {data.columns.map((column) => (
                <th
                  key={column.key}
                  className="py-4 px-2 lg:px-0 text-left text-xs font-medium text-zinc-950 dark:text-zinc-200 uppercase tracking-wider"
                >
                  {column.name}
                </th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap text-sm text-zinc-800 dark:text-zinc-300">
            {processedData.slice(0, visibleRows).map((row) => (
              <tr key={row.productName} className="border-b border-zinc-100 dark:border-zinc-800 last:border-none">
                <td className="py-4 px-2 lg:px-0">{row.productName}</td>
                <td className="py-4 px-2 lg:px-0 capitalize">{row.category}</td>
                <td className="py-4 px-2 lg:px-0">{row.stockLevel}</td>
                <td className="py-4 px-2 lg:px-0">
                  <Badge
                    color={`${
                      row.reorderStatus === "in-stock"
                        ? "green"
                        : row.reorderStatus === "low-stock"
                        ? "orange"
                        : row.reorderStatus === "out-of-stock"
                        ? "gray"
                        : "red"
                    }`}
                  >
                    {row.reorderStatus}
                  </Badge>
                </td>
                <td className="py-4 px-2 lg:px-0">{row.warehouseLocation}</td>
                <td className="py-4 px-2 lg:px-0 text-blue-600 select-none cursor-pointer transition hover:underline">Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {visibleRows < processedData.length && (
        <div className="flex justify-center mt-8 pb-8">
          <Button variant="secondary" size="regular" onClick={handleLoadMore} className="w-full">
            Load more
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
