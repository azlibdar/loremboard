interface BadgeProps {
  children: React.ReactNode;
  color?: "red" | "green" | "orange" | "gray";
}

const Badge = ({ children, color = "green" }: BadgeProps) => {
  const baseClasses = "w-min ring-1 ring-inset text-nowrap select-none text-xs px-2 py-1 font-[450] rounded-md";

  const colorClasses = {
    red: "bg-red-50 dark:bg-red-950/50 ring-red-100 dark:ring-red-900/50 text-red-700 dark:text-red-400",
    green: "bg-green-50 dark:bg-green-950 ring-green-200 dark:ring-green-900 text-green-800 dark:text-green-400",
    orange: "bg-orange-50 dark:bg-orange-950/70 ring-orange-100 dark:ring-orange-900/50 text-orange-700 dark:text-orange-400",
    gray: "bg-zinc-50 dark:bg-zinc-900 ring-zinc-200 dark:ring-zinc-800 text-zinc-600 dark:text-zinc-400",
  };

  // Combine all classes
  const className = `
    ${baseClasses}
    ${colorClasses[color]}
  `;

  return <div className={className}>{children}</div>;
};

export default Badge;
