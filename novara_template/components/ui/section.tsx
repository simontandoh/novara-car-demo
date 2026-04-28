import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Visually quieter background band */
  variant?: "default" | "muted";
};

export function Section({ id, children, className = "", variant = "default" }: SectionProps) {
  const base =
    variant === "muted"
      ? "border-y border-border bg-surface/80 py-16 md:py-24"
      : "py-16 md:py-24";
  return (
    <section id={id} className={`${base} ${className}`.trim()}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
