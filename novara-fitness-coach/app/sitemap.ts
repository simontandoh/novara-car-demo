import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fitness.novarastudios.co.uk",
      changeFrequency: "weekly",
      priority: 1,
      lastModified: new Date(),
    },
  ];
}
