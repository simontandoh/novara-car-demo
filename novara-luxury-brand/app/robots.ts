import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://luxury-brand.novarastudios.co.uk/sitemap.xml",
    host: "https://luxury-brand.novarastudios.co.uk",
  };
}
