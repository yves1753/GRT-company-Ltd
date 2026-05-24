type Props = {
  value: number;
  suffix?: string;
};

/** Displays the final value immediately — no scroll animation dependency */
export function AnimatedCounter({ value, suffix = "" }: Props) {
  return (
    <span className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}
