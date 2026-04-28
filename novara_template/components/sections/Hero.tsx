import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Hero() {
  const { hero } = siteConfig;
  return (
    <section className="border-b border-border bg-background pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          {hero.eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {hero.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={hero.primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-surface transition-opacity hover:opacity-90"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
