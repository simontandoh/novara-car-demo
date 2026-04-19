import type { SiteConfig } from "@/lib/site";

type TemplatePlaceholderProps = {
  config: SiteConfig;
};

export function TemplatePlaceholder({
  config,
}: TemplatePlaceholderProps) {
  return (
    <main className="page-shell">
      <section className="placeholder-card" aria-labelledby="template-title">
        <p className="placeholder-eyebrow">{config.label}</p>
        <h1 id="template-title" className="placeholder-title">
          {config.title}
        </h1>
        <p className="placeholder-copy">{config.description}</p>
        <ul className="placeholder-list">
          {config.nextSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
