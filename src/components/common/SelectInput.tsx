import { ChevronsUpDown } from "lucide-react";

interface SelectDataProps {
  value: string;
  label: string;
}

interface Props {
  selectData: SelectDataProps[];
  selectValue: string;
  onSelect: (value: string) => void;
  label: string;
  firstEmptyValue?: string;
}

const SelectInput = ({ selectData, selectValue, onSelect, label, firstEmptyValue }: Props) => {
  return (
    <div className="relative">
      <label htmlFor="chart-select" className="sr-only">
        {label}
      </label>
      <select
        onChange={(e) => onSelect && onSelect(e.target.value)}
        value={selectValue && selectValue}
        id={label}
        className="appearance-none capitalize cursor-pointer bg-white dark:bg-zinc-900 py-3 sm:py-2.5 px-4 pr-8 ring-1 ring-inset ring-zinc-200 dark:ring-zinc-700/60 rounded-lg text-zinc-950 dark:text-zinc-100 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
      >
        {firstEmptyValue && <option value="">{firstEmptyValue}</option>}
        {selectData.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <div className="absolute h-full pointer-events-none right-0 transition top-0 pr-2 flex justify-center items-center">
        <ChevronsUpDown size={17} strokeWidth={1.75} className="text-zinc-500 dark:text-zinc-400" />
      </div>
    </div>
  );
};

export default SelectInput;
