import type { SiteConfig } from "@/types/site";

export const siteConfig = {
  name: "Calabash",
  url: "https://restaurant.novarastudios.co.uk",
  staticSourcePath: "content/static-source.html",
  metadata: {
    title: "Calabash - Caribbean Soul Kitchen",
    description:
      "Calabash serves bold Caribbean soul food in Liverpool with warm hospitality, signature classics, and easy table booking.",
  },
  nav: [
    { label: "Menu", href: "#services" },
    { label: "Book a table", href: "#contact" },
  ],
  hero: {
    eyebrow: "Liverpool kitchen",
    title: "Caribbean soul food, cooked with heart.",
    subtitle:
      "Signature classics, seasonal specials, and the kind of hospitality that feels like home.",
    primaryCta: { label: "Reserve a table", href: "#contact" },
    secondaryCta: { label: "See what we serve", href: "#services" },
  },
  services: {
    id: "services",
    eyebrow: "On the menu",
    title: "What we are known for",
    subtitle: "Crowd favourites and chef specials that rotate with the markets.",
    items: [
      {
        title: "House classics",
        description: "Slow-built recipes designed for sharing tables and loud laughter.",
      },
      {
        title: "Seasonal plates",
        description: "Produce-led specials that nod to islands and diaspora communities alike.",
      },
      {
        title: "Private gatherings",
        description: "Set menus for birthdays, anniversaries, and community celebrations.",
      },
    ],
  },
  cta: {
    id: "cta",
    title: "Hungry yet?",
    subtitle: "Tell us your party size, preferred time, and any dietary notes — we will confirm shortly.",
    button: { label: "Book Calabash", href: "#contact" },
  },
  contact: {
    id: "contact",
    eyebrow: "Reservations",
    title: "Join us at Calabash",
    body: "Walk-ins welcome when space allows. For groups of six or more, message ahead.",
    email: "hello@novarastudios.co.uk",
    responseTime: "We reply within one business day.",
  },
  footer: {
    tagline: "© Calabash. Built by Novara.",
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
} as const satisfies SiteConfig;
