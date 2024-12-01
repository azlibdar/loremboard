import { cn } from "../../lib/utils";

// Base styles
const baseStyles =
  "transition select-none flex justify-center items-center gap-2 no-underline focus:outline-none active:translate-y-[1px] focus-visible:ring-2 focus-visible:ring-transparent focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-dark-gray-50 focus-visible:ring-light-blue-600 dark:focus-visible:ring-dark-blue-600";

// Visual style variations
const variants = {
  primary: "bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 hover:opacity-90 font-medium",
  secondary:
    "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/60 font-medium text-zinc-950 dark:text-zinc-100 hover:opacity-90",
};

// Size variations
const sizes = {
  compact: "px-4 py-2 text-sm",
  regular: "px-5 py-2.5 text-sm",
  big: "px-6 py-3 text-base",
};

// Shape variations
const shapes = {
  rounded: "rounded-md",
  pill: "rounded-full",
};

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "compact" | "regular" | "big";
  shape?: "rounded" | "pill";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  variant = "primary",
  size = "regular",
  shape = "rounded",
  type = "button",
  disabled,
  onClick,
  className,
  ...props
}: ButtonProps) => {
  // Combine all class names based on the props passed
  const combinedClassName = cn(
    baseStyles,
    sizes[size],
    shapes[shape],
    variants[variant],
    className,
    disabled && "opacity-50 pointer-events-none"
  );

  return (
    <button type={type} onClick={onClick} className={combinedClassName} disabled={disabled} aria-disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
