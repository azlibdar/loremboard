import { Search } from "lucide-react";

interface SearchInputProps {
  placeholder: string;
  label: string;
}
const SearchInput = ({ placeholder, label }: SearchInputProps) => {
  return (
    <div className="relative w-full lg:max-w-80">
      <label className="sr-only">{label}</label>
      <input
        type="text"
        id={label}
        placeholder={placeholder}
        className="w-full px-3 pl-8 py-2.5 sm:text-sm text-nowrap bg-white dark:bg-zinc-900 ring-1 ring-inset ring-zinc-200 dark:ring-zinc-700/60 text-zinc-950 dark:text-zinc-100 placeholder:text-zinc-500 dark:placeholder:text-zinc-400 rounded-lg focus:outline-none transition focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
      />
      <div className="w-min px-3 h-full absolute inset-0 flex justify-center items-center">
        <Search size={15} strokeWidth={1.75} className="text-zinc-500 dark:text-zinc-400" />
      </div>
    </div>
  );
};

export default SearchInput;
