import Link from "next/link";

import type { Metadata } from "next";
import type { PlaygroundApp } from "@lib/types";

import Breadcrumb from "@components/Breadcrumb";

import { playgroundApps } from "@lib/data/playground";

export const metadata: Metadata = {
  title: "Playground",
  description: "A few small apps I've built over the years, live and runnable.",
  alternates: {
    canonical: "https://ignacioguri.me/playground",
  },
};

function PlaygroundEntry({ app }: { app: PlaygroundApp }) {
  return (
    <article className="flex flex-col gap-2 sm:flex-row sm:gap-8">
      <div className="flex-1">
        <h2 className="font-display text-base font-bold">{app.title}</h2>
        <p className="mt-1 text-sm text-muted">{app.description}</p>

        <div className="mt-3 flex gap-4 text-sm">
          {app.kind === "embed" ? (
            <Link href={`/playground/${app.slug}`} aria-label={`Run ${app.title}`}>
              Run
            </Link>
          ) : (
            <a
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${app.title}`}
            >
              Visit
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function PlaygroundPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-4 py-10 sm:py-16">
      <div>
        <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Playground" }]} />

        <h1 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
          Playground
        </h1>
        <p className="mt-2 text-sm text-muted">
          A few small apps I&apos;ve built over the years. Some run right here, some live on their
          own.
        </p>
      </div>

      <div className="space-y-10">
        {playgroundApps.map((app) => (
          <PlaygroundEntry key={app.slug} app={app} />
        ))}
      </div>
    </div>
  );
}
