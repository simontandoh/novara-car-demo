import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ label, title, description, className, align = "center" }: SectionHeadingProps) => (
  <div className={cn("max-w-2xl space-y-3", align === "center" && "mx-auto text-center", className)}>
    {label && (
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">{label}</p>
    )}
    <h2 className="font-display text-3xl font-medium md:text-4xl">{title}</h2>
    {description && (
      <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
    )}
  </div>
);

export default SectionHeading;