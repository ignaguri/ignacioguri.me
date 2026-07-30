import type { PlaygroundApp } from "@lib/types";

/**
 * Looks up a playground app by slug, but only returns it if it's embeddable.
 * External entries have no dedicated page to serve, so they resolve to null
 * here even if the slug matches — the caller should 404 either way.
 */
export function findEmbedApp(apps: PlaygroundApp[], slug: string): PlaygroundApp | null {
  const app = apps.find((candidate) => candidate.slug === slug);
  if (!app || app.kind !== "embed") {
    return null;
  }
  return app;
}

/** Slugs that have a dedicated /playground/[slug] page. Shared by proxy.ts and generateStaticParams so "embeddable" is defined in exactly one place. */
export function getEmbedSlugs(apps: PlaygroundApp[]): string[] {
  return apps.filter((app) => app.kind === "embed").map((app) => app.slug);
}
