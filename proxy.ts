import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

import { playgroundApps } from "@lib/data/playground";
import { getEmbedSlugs } from "@lib/playground";

/**
 * Looks redundant with the `notFound()` call in app/playground/[slug]/page.tsx
 * — it isn't. With `cacheComponents: true`, a non-prerendered slug commits to
 * a 200 status during PPR streaming before that page's `notFound()` ever
 * runs, so the response body says "not found" but the HTTP status lies.
 * This proxy rewrites unknown slugs to an unmapped path before the App
 * Router pipeline starts, which is the only point left that can still
 * produce a genuine 404. Deleting this silently regresses invalid
 * `/playground/:slug` requests back to HTTP 200.
 */
const embedSlugs = new Set(getEmbedSlugs(playgroundApps));

export function proxy(request: NextRequest) {
  const match = request.nextUrl.pathname.match(/^\/playground\/([^/]+)$/);
  if (match && !embedSlugs.has(match[1])) {
    const url = request.nextUrl.clone();
    url.pathname = "/__playground_404__";
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/playground/:slug",
};
