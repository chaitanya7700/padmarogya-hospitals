import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {subtitle && (
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-green">
          {subtitle}
        </p>
      )}
      <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-text-muted">{description}</p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-lotus-pink to-green",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
