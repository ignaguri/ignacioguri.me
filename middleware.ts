import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

import { playgroundApps } from "@lib/data/playground";

const embedSlugs = new Set(
  playgroundApps.filter((app) => app.kind === "embed").map((app) => app.slug),
);

export function middleware(request: NextRequest) {
  const match = request.nextUrl.pathname.match(/^\/playground\/([^/]+)$/);
  if (match && !embedSlugs.has(match[1])) {
    return NextResponse.rewrite(new URL("/__playground_404__", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/playground/:slug",
};
