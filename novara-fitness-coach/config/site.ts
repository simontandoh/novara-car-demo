import type { SiteConfig } from "@/types/site";

/**
 * Marketing copy and SEO defaults. The visible landing experience for this demo
 * is still authored in `content/static-source.html` to preserve pixel parity.
 */
export const siteConfig = {
  name: "Marcus Cole",
  url: "https://fitness.novarastudios.co.uk",
  staticSourcePath: "content/static-source.html",
  metadata: {
    title: "Marcus Cole - Elite Performance Coach",
    description:
      "Marcus Cole Performance delivers elite coaching in Liverpool with precision training, structured nutrition, and accountability-led transformation plans.",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Elite performance coaching",
    title: "Train with precision. Transform with intent.",
    subtitle:
      "Structured programming, nutrition guidance, and accountability built for ambitious athletes in Liverpool.",
    primaryCta: { label: "Book a consultation", href: "#contact" },
    secondaryCta: { label: "View programmes", href: "#services" },
  },
  services: {
    id: "services",
    eyebrow: "How we work",
    title: "Coaching pillars",
    subtitle:
      "These pillars mirror the structure of the live demo while keeping copy centralised for future refactors.",
    items: [
      {
        title: "Strength & conditioning",
        description: "Progressive overload, movement quality, and performance tracking tailored to your goals.",
      },
      {
        title: "Nutrition systems",
        description: "Practical fueling strategies that support training volume and recovery, not fad diets.",
      },
      {
        title: "Accountability",
        description: "Weekly check-ins, habit coaching, and honest feedback so momentum never slips.",
      },
    ],
  },
  cta: {
    id: "cta",
    title: "Ready to commit to the next block?",
    subtitle: "Start with a performance assessment and leave with a clear roadmap.",
    button: { label: "Apply for coaching", href: "#contact" },
  },
  contact: {
    id: "contact",
    eyebrow: "Contact",
    title: "Train with Marcus Cole Performance",
    body: "Reach out for availability, pricing, and programme fit. We reply within one business day.",
    email: "hello@novarastudios.co.uk",
    responseTime: "We reply within one business day.",
  },
  footer: {
    tagline: "© Marcus Cole Performance. Built by Novara.",
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
} as const satisfies SiteConfig;
