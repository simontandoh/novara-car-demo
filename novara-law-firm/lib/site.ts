export type SiteConfig = {
  label: string;
  title: string;
  description: string;
  nextSteps: string[];
};

export const siteConfig: SiteConfig = {
  label: "Novara Starter",
  title: "Reusable Next.js App Router template",
  description:
    "This repository is intentionally generic. Replace this placeholder with the first real page for the project that adopts the template.",
  nextSteps: [
    "Update app/page.tsx with project-specific content.",
    "Add shared UI to components/ and shared helpers to lib/.",
    "Keep styles lightweight until the project direction is defined.",
  ],
};
