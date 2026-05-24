type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({ eyebrow, title, subtitle, align = "center", id }: Props) {
  const centered = align === "center";
  return (
    <div
      id={id}
      className={`mb-12 md:mb-16 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
