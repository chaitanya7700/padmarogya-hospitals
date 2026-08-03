import { cn } from "@/lib/utils";

interface LotusIconProps {
  className?: string;
  size?: number;
}

export function LotusIcon({ className, size = 40 }: LotusIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-lotus-pink", className)}
      aria-hidden="true"
    >
      <ellipse cx="32" cy="38" rx="8" ry="12" fill="currentColor" opacity="0.9" />
      <ellipse cx="20" cy="36" rx="7" ry="14" fill="currentColor" opacity="0.7" transform="rotate(-25 20 36)" />
      <ellipse cx="44" cy="36" rx="7" ry="14" fill="currentColor" opacity="0.7" transform="rotate(25 44 36)" />
      <ellipse cx="12" cy="34" rx="6" ry="12" fill="currentColor" opacity="0.5" transform="rotate(-45 12 34)" />
      <ellipse cx="52" cy="34" rx="6" ry="12" fill="currentColor" opacity="0.5" transform="rotate(45 52 34)" />
      <circle cx="32" cy="28" r="6" fill="#2d8f6f" />
      <path
        d="M32 22 C32 18 28 14 32 10 C36 14 32 18 32 22"
        fill="#2d8f6f"
        opacity="0.8"
      />
    </svg>
  );
}

export function HospitalLogo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LotusIcon size={44} />
      {showText && (
        <div>
          <p className="font-heading text-lg font-bold leading-tight text-navy md:text-xl">
            Padmarogya
          </p>
          <p className="font-marathi text-xs text-green md:text-sm">
            सेवा, श्रद्धा, आरोग्य
          </p>
        </div>
      )}
    </div>
  );
}
