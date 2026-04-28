import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/section";

export function Services() {
  const { services } = siteConfig;
  return (
    <Section id={services.id} variant="muted">
      <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        {services.eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {services.title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{services.subtitle}</p>
      <ul className="mt-12 grid list-none gap-6 p-0 md:grid-cols-3">
        {services.items.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl border border-border bg-surface p-6 shadow-sm shadow-foreground/5"
          >
            <h3 className="m-0 text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
