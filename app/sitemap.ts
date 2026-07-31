import type { MetadataRoute } from "next";

/**
 * Bump this when page content meaningfully changes. Deliberately a constant:
 * `new Date()` would report "just modified" on every crawl, which trains
 * crawlers to ignore the field.
 */
const LAST_CONTENT_UPDATE = "2026-07-28";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ignacioguri.me",
      lastModified: new Date(LAST_CONTENT_UPDATE),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://ignacioguri.me/playground",
      lastModified: new Date(LAST_CONTENT_UPDATE),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
