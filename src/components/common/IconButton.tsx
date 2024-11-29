import { cn } from "../../lib/utils";

interface Props {
  onClick: () => void;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "compact" | "regular" | "big";
  shape?: "rounded" | "circle";
  children: React.ReactNode;
  className?: string;
}

const baseStyles = "transition select-none flex justify-center items-center aspect-square focus:outline-none active:translate-y-[1px]";

const variants = {
  primary: "bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 hover:opacity-90",
  secondary:
    "bg-white dark:bg-transparent border shadow-sm border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800",
  tertiary: "bg-transparent text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/50 dark:hover:bg-zinc-800",
};

const sizes = {
  compact: "p-2",
  regular: "p-2.5",
  big: "p-3",
};

const shapes = {
  circle: "rounded-full",
  rounded: "rounded-lg",
};

const IconButton = ({ onClick, variant = "secondary", size = "regular", shape = "rounded", children, className }: Props) => {
  const combinedClassName = cn(baseStyles, sizes[size], shapes[shape], variants[variant], className);

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default IconButton;
