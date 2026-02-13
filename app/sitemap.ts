import type { MetadataRoute } from "next";
import { links } from "./config/links";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: links.website,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
