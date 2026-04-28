import type { Metadata } from "next";

import type { SiteConfig } from "@/types/site";

export function createSiteMetadata(site: SiteConfig): Metadata {
  return {
    metadataBase: new URL(site.url),
    alternates: { canonical: "/" },
    title: {
      default: site.metadata.title,
      template: `%s · ${site.name}`,
    },
    description: site.metadata.description,
    openGraph: {
      title: site.metadata.title,
      description: site.metadata.description,
      url: site.url,
      siteName: site.name,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: site.metadata.title,
      description: site.metadata.description,
    },
    robots: { index: true, follow: true },
  };
}
