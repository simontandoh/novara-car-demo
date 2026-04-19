import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://fitness.novarastudios.co.uk/sitemap.xml",
    host: "https://fitness.novarastudios.co.uk",
  };
}
