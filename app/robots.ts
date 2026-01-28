import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/secret",
    },
    sitemap: "https://ignacioguri.me/sitemap.xml",
  };
}
