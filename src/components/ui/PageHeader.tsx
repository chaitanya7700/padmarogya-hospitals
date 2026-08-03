import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  description,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "bg-navy py-16 text-white md:py-20",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
        {subtitle && (
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-lotus-pink-light">
            {subtitle}
          </p>
        )}
        <h1 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
