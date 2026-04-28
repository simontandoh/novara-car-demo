import type { SiteConfig } from "@/types/site";

/**
 * Single source of truth for marketing copy, navigation, and SEO defaults.
 * Duplicate this file per project or override via env-driven config later.
 */
export const siteConfig = {
  name: "Novara",
  url: "https://novarastudios.co.uk",
  metadata: {
    title: "Novara — Official template",
    description:
      "Production-ready Next.js App Router template for Novara client sites: structured layout, typed config, and minimal premium UI.",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Official template",
    title: "Clarity, structure, and speed to launch.",
    subtitle:
      "Use this starter to ship consistent Novara builds: App Router, strict TypeScript, Tailwind, and composable sections wired to typed config.",
    primaryCta: { label: "View services", href: "#services" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
  },
  services: {
    id: "services",
    eyebrow: "What we ship",
    title: "Core building blocks",
    subtitle:
      "Swap these cards for industry-specific services. Keep the section contract for predictable layout composition.",
    items: [
      {
        title: "App Router shell",
        description:
          "Layouts, metadata, and typed routes aligned with Next.js production patterns.",
      },
      {
        title: "Typed config",
        description:
          "Copy and navigation live in config so content stays centralized and reviewable.",
      },
      {
        title: "Composable UI",
        description:
          "Navbar, hero, services, CTA, and contact sections as independent server components.",
      },
    ],
  },
  cta: {
    id: "cta",
    title: "Ready to adapt this template?",
    subtitle: "Replace copy in config/site.ts and extend sections without touching layout contracts.",
    button: { label: "Contact Novara", href: "#contact" },
  },
  contact: {
    id: "contact",
    eyebrow: "Contact",
    title: "Start from a solid baseline",
    body:
      "Point new projects at this template, then layer brand, motion, and integrations. Keep behaviour explicit and types strict.",
    email: "hello@novarastudios.co.uk",
    responseTime: "We reply within one business day.",
  },
  footer: {
    tagline: "© Novara. Built for repeatable delivery.",
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
} as const satisfies SiteConfig;
