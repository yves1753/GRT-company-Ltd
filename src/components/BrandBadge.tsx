import type { ClientBrand } from "@/lib/brand-logos";

type BrandBadgeProps = {
  brand: ClientBrand;
  variant?: "pill" | "card";
};

export function BrandBadge({ brand, variant = "pill" }: BrandBadgeProps) {
  if (variant === "card") {
    return (
      <div className="industrial-frame p-5 flex flex-col items-center justify-center gap-3 hover:border-primary/40 transition-colors group">
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          width={brand.width}
          height={brand.height}
          className="h-8 w-auto max-w-[120px] object-contain opacity-90 group-hover:opacity-100 transition-opacity dark:brightness-110"
          loading="lazy"
          decoding="async"
        />
        <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">
          {brand.name}
        </span>
      </div>
    );
  }

  return (
    <span className="industrial-frame px-4 py-3 flex items-center gap-3 hover:border-primary/40 transition-colors group min-w-[140px]">
      <img
        src={brand.logo}
        alt=""
        aria-hidden
        width={brand.width}
        height={brand.height}
        className="h-7 w-auto max-w-[100px] object-contain shrink-0 opacity-90 group-hover:opacity-100 transition-opacity dark:brightness-110"
        loading="lazy"
        decoding="async"
      />
      <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap">
        {brand.name}
      </span>
    </span>
  );
}
