import Link from "next/link";

import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

export function CTA() {
  const { cta } = siteConfig;
  return (
    <Section id={cta.id}>
      <div className="rounded-3xl border border-border bg-surface px-8 py-12 text-center shadow-sm shadow-foreground/5 md:px-16 md:py-16">
        <h2 className="m-0 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{cta.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">{cta.subtitle}</p>
        <div className="mt-8">
          <Link
            href={cta.button.href}
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-surface transition-opacity hover:opacity-90"
          >
            {cta.button.label}
          </Link>
        </div>
      </div>
    </Section>
  );
}
