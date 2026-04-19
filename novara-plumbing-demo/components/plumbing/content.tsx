export const COMPANY_NAME = "Ironside Plumbing Ltd";
export const COMPANY_PHONE = "0151 234 5678";
export const COMPANY_PHONE_LINK = "tel:01512345678";
export const COMPANY_EMAIL = "hello@ironsideplumbing.co.uk";
export const COMPANY_EMAIL_LINK =
  "mailto:hello@ironsideplumbing.co.uk?subject=Plumbing%20enquiry";

export const servicesStrip = [
  { icon: "🔧", label: "Emergency Repairs" },
  { icon: "🚿", label: "Bathroom Fitting" },
  { icon: "🔥", label: "Boiler Servicing" },
  { icon: "🏠", label: "Central Heating" },
  { icon: "💧", label: "Leak Detection" },
  { icon: "🛁", label: "Drainage & Unblocking" },
  { icon: "⚡", label: "Power Flushing" },
];

export const stats = [
  { value: "15+", label: "Years Serving Liverpool" },
  { value: "4.9★", label: "Average Review Score" },
  { value: "3,200+", label: "Jobs Completed" },
  { value: "60min", label: "Avg Emergency Response" },
];

export const services = [
  {
    number: "01",
    name: "Emergency Plumbing",
    description:
      "Burst pipes, leaks, blocked drains, we're there fast. No waiting until Monday. No inflated emergency rates.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&fit=crop&crop=center",
    alt: "Emergency plumbing",
    items: [
      "Burst and leaking pipes",
      "Blocked toilets and drains",
      "Water pressure problems",
      "Stopcock replacement",
    ],
  },
  {
    number: "02",
    name: "Boilers & Heating",
    description:
      "Gas Safe registered engineers for installations, servicing, repairs, and full central heating system upgrades.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80&fit=crop&crop=center",
    alt: "Boiler servicing",
    items: [
      "Boiler installation & repair",
      "Annual boiler service",
      "Central heating upgrades",
      "Power flushing",
    ],
  },
  {
    number: "03",
    name: "Bathroom & Kitchens",
    description:
      "Full bathroom fitting and kitchen plumbing. From a single tap to a complete suite, clean installation, no mess left behind.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=700&q=80&fit=crop&crop=center",
    alt: "Bathroom fitting",
    items: [
      "Full bathroom fitting",
      "Shower installation",
      "Kitchen sink & tap fitting",
      "Tiling and sealing",
    ],
  },
];

export const reasons = [
  {
    title: "Fixed, Honest Pricing",
    description:
      "We quote before we start. What we say is what you pay. No surprise charges on the invoice.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "We Show Up On Time",
    description:
      "A 2-hour arrival window, confirmed by text. And if we're running late, we'll tell you. Simple.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "12-Month Guarantee",
    description:
      "Every job we complete is guaranteed for 12 months. If something isn't right, we come back and fix it.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export const team = [
  {
    name: "Danny Walsh",
    role: "Lead Engineer · 14 Years",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&fit=crop&crop=faces",
  },
  {
    name: "Chris Moran",
    role: "Boiler Specialist · Gas Safe",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&fit=crop&crop=faces",
  },
  {
    name: "Ryan Clarke",
    role: "Bathroom Fitter · 8 Years",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80&fit=crop&crop=faces",
  },
];

export const reviews = [
  {
    quote:
      '"Boiler packed in on a Sunday morning. Ironside had someone at mine within 90 minutes. Fixed, tested, and sorted, no drama, no extortionate bill. Absolute lifesavers."',
    author: "Karen B.",
    location: "Wavertree, Liverpool",
  },
  {
    quote:
      "\"Had a full bathroom fitted. Clean quote, showed up exactly when they said, left the place spotless. Everyone who's seen it thinks it looks incredible. Worth every penny.\"",
    author: "James T.",
    location: "Allerton, Liverpool",
  },
  {
    quote:
      "\"Used Ironside three times now. Honest price every time, no upselling, work is always solid. That's rare with tradespeople. They're the only plumbers I'll use now.\"",
    author: "Diane M.",
    location: "Crosby, Liverpool",
  },
];
