import type { SiteConfig } from "@/types/site";

export const siteConfig = {
  name: "Lola Nails Studio",
  url: "https://nailtech.novarastudios.co.uk",
  staticSourcePath: "content/static-source.html",
  metadata: {
    title: "Lola Nails Studio - Nail Artist, Liverpool",
    description:
      "Lola Nails Studio offers premium nail artistry in Liverpool, from gel extensions and BIAB to bespoke bridal and editorial nail sets.",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Book", href: "#contact" },
  ],
  hero: {
    eyebrow: "Liverpool studio",
    title: "Nail artistry with editorial-level finish.",
    subtitle:
      "Gel extensions, BIAB, bespoke bridal sets, and editorial looks — crafted slowly, photographed sharply.",
    primaryCta: { label: "Book an appointment", href: "#contact" },
    secondaryCta: { label: "Browse services", href: "#services" },
  },
  services: {
    id: "services",
    eyebrow: "Studio menu",
    title: "Signature offerings",
    subtitle: "Structured treatments that protect natural nails while pushing creative direction.",
    items: [
      {
        title: "Extensions & BIAB",
        description: "Strength-first builds with shape mapping tailored to your hands and lifestyle.",
      },
      {
        title: "Bridal & events",
        description: "Calm timelines, trials, and on-site touch-ups so the set survives the whole day.",
      },
      {
        title: "Editorial sets",
        description: "Concept boards, palette mixing, and macro-ready finishes for shoots.",
      },
    ],
  },
  cta: {
    id: "cta",
    title: "Have a date in mind?",
    subtitle: "Tell us the occasion, reference imagery, and your ideal wear time.",
    button: { label: "Check availability", href: "#contact" },
  },
  contact: {
    id: "contact",
    eyebrow: "Bookings",
    title: "Visit Lola Nails Studio",
    body: "Studio hours and pricing are shared after we confirm fit. We reply within one business day.",
    email: "hello@novarastudios.co.uk",
    responseTime: "We reply within one business day.",
  },
  footer: {
    tagline: "© Lola Nails Studio. Built by Novara.",
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
} as const satisfies SiteConfig;
