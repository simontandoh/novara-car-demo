import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://photographer.novarastudios.co.uk/sitemap.xml",
    host: "https://photographer.novarastudios.co.uk",
  };
}
