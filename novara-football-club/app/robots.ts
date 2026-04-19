import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://football.novarastudios.co.uk/sitemap.xml",
    host: "https://football.novarastudios.co.uk",
  };
}
