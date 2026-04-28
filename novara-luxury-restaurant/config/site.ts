import type { SiteConfig } from "@/types/site";

export const siteConfig = {
  name: "Onyx",
  url: "https://luxury-restaurant.novarastudios.co.uk",
  staticSourcePath: "content/static-source.html",
  metadata: {
    title: "Onyx - Fine Dining, London",
    description:
      "Onyx is a Mayfair fine-dining destination offering seasonal tasting menus, private dining, and refined reservation-led service.",
  },
  nav: [
    { label: "Experience", href: "#services" },
    { label: "Reservations", href: "#contact" },
  ],
  hero: {
    eyebrow: "Mayfair dining",
    title: "Seasonal tasting menus with quiet precision.",
    subtitle:
      "Reservation-led service, private dining rooms, and a kitchen obsessed with clarity of flavour.",
    primaryCta: { label: "Request a table", href: "#contact" },
    secondaryCta: { label: "Discover the menu", href: "#services" },
  },
  services: {
    id: "services",
    eyebrow: "The Onyx experience",
    title: "What guests can expect",
    subtitle: "Three anchors that define how we host every service.",
    items: [
      {
        title: "Tasting journeys",
        description: "Multi-course arcs that follow produce at its peak, with optional wine pairings.",
      },
      {
        title: "Private dining",
        description: "Discreet rooms for celebrations, board dinners, and chef-led previews.",
      },
      {
        title: "Hospitality craft",
        description: "Front-of-house teams trained on pacing, narrative, and calm attentiveness.",
      },
    ],
  },
  cta: {
    id: "cta",
    title: "Planning a special evening?",
    subtitle: "Share your date, party size, and occasion — our reservations team will confirm availability.",
    button: { label: "Contact reservations", href: "#contact" },
  },
  contact: {
    id: "contact",
    eyebrow: "Reservations",
    title: "Dine at Onyx",
    body: "We respond to enquiries in order of date. Please include dietary requirements.",
    email: "hello@novarastudios.co.uk",
    responseTime: "We reply within one business day.",
  },
  footer: {
    tagline: "© Onyx. Built by Novara.",
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
} as const satisfies SiteConfig;
