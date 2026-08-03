import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "green" | "pink" | "navy";
  className?: string;
}

const variants = {
  default: "bg-light-gray text-text",
  green: "bg-green/10 text-green",
  pink: "bg-lotus-pink/20 text-navy",
  navy: "bg-navy/10 text-navy",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
