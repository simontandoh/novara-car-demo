export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type SiteMetadata = {
  title: string;
  description: string;
};

export type SiteConfig = {
  name: string;
  url: string;
  /**
   * When set, the home route renders legacy HTML from this path (relative to project root),
   * preserving embedded `<style>` and inline scripts without altering visuals.
   */
  staticSourcePath?: string;
  metadata: SiteMetadata;
  nav: readonly NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  services: {
    id: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    items: readonly ServiceItem[];
  };
  cta: {
    id: string;
    title: string;
    subtitle: string;
    button: { label: string; href: string };
  };
  contact: {
    id: string;
    eyebrow: string;
    title: string;
    body: string;
    email: string;
    responseTime: string;
  };
  footer: {
    tagline: string;
    legal: readonly { label: string; href: string }[];
  };
};
