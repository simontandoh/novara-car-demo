import type { SiteConfig } from "@/types/site";

export const siteConfig = {
  name: "Vellum & Co",
  url: "https://luxury-brand.novarastudios.co.uk",
  staticSourcePath: "content/static-source.html",
  metadata: {
    title: "Vellum & Co - Fine Jewellery",
    description:
      "Vellum & Co creates handcrafted fine jewellery in Mayfair with private appointments, bespoke commissions, and heirloom-quality design.",
  },
  nav: [
    { label: "Collections", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Mayfair atelier",
    title: "Jewellery designed to be lived in and loved for generations.",
    subtitle:
      "Private appointments, bespoke commissions, and heirloom-quality finishing from a small master-led team.",
    primaryCta: { label: "Book an appointment", href: "#contact" },
    secondaryCta: { label: "Explore services", href: "#services" },
  },
  services: {
    id: "services",
    eyebrow: "Atelier services",
    title: "How we work with clients",
    subtitle: "Every piece is approached as a long-term relationship, not a single transaction.",
    items: [
      {
        title: "Bespoke design",
        description: "Sketches, stone sourcing, and bench work led by senior goldsmiths with transparent timelines.",
      },
      {
        title: "Restoration & remount",
        description: "Breathing new life into heirloom pieces while preserving the story in the metal.",
      },
      {
        title: "Private consultations",
        description: "Quiet sessions in Mayfair focused on proportion, comfort, and daily wear.",
      },
    ],
  },
  cta: {
    id: "cta",
    title: "Ready to commission something personal?",
    subtitle: "Share your occasion, budget band, and timeline — we will follow up with next steps.",
    button: { label: "Enquire now", href: "#contact" },
  },
  contact: {
    id: "contact",
    eyebrow: "Contact",
    title: "Visit Vellum & Co",
    body: "Private appointments are limited each month. Reach out to check availability.",
    email: "hello@novarastudios.co.uk",
    responseTime: "We reply within one business day.",
  },
  footer: {
    tagline: "© Vellum & Co. Built by Novara.",
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
} as const satisfies SiteConfig;
