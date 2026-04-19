import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nailtech.novarastudios.co.uk/sitemap.xml",
    host: "https://nailtech.novarastudios.co.uk",
  };
}
