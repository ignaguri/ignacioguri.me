import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /secret is not listed here on purpose: it already sets
      // `robots: "noindex, nofollow"` in its own metadata, and naming it in
      // robots.txt only publishes the path.
      disallow: ["/api/"],
    },
    sitemap: "https://ignacioguri.me/sitemap.xml",
  };
}
