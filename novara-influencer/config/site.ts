import type { SiteConfig } from "@/types/site";

export const siteConfig = {
  name: "Celeste Vane",
  url: "https://influencer.novarastudios.co.uk",
  staticSourcePath: "content/static-source.html",
  metadata: {
    title: "Celeste Vane - Content Creator & Lifestyle",
    description:
      "Celeste Vane is a Manchester-based creator partnering with brands across lifestyle, fashion, travel, and beauty through conversion-focused campaigns.",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Creator partnerships",
    title: "Campaigns that convert without losing your voice.",
    subtitle:
      "Lifestyle, fashion, travel, and beauty collaborations built for brands that care about craft and performance.",
    primaryCta: { label: "View services", href: "#services" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
  },
  services: {
    id: "services",
    eyebrow: "What we deliver",
    title: "Partnership formats",
    subtitle: "Structured packages that map to how brands brief creators today.",
    items: [
      {
        title: "Campaign storytelling",
        description: "Hooks, scripts, and shot lists aligned to your funnel goals and brand guardrails.",
      },
      {
        title: "UGC & paid social",
        description: "High-volume creative variants for Meta, TikTok, and YouTube with fast iteration loops.",
      },
      {
        title: "Launch moments",
        description: "Timed drops, live coverage, and recap edits that keep momentum through release week.",
      },
    ],
  },
  cta: {
    id: "cta",
    title: "Planning a seasonal campaign?",
    subtitle: "Share your brief and we will respond with availability and a tailored proposal.",
    button: { label: "Start a conversation", href: "#contact" },
  },
  contact: {
    id: "contact",
    eyebrow: "Contact",
    title: "Work with Celeste Vane",
    body: "Tell us about your brand, timeline, and deliverables. We reply within one business day.",
    email: "hello@novarastudios.co.uk",
    responseTime: "We reply within one business day.",
  },
  footer: {
    tagline: "© Celeste Vane. Built by Novara.",
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
} as const satisfies SiteConfig;
