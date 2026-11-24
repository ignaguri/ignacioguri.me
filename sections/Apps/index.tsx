import Image from "next/image";

import type { PublishedApp } from "@lib/types";

import { publishedApps } from "@lib/data/apps";

function AppEntry({ app }: { app: PublishedApp }) {
  const links = [
    { label: "App Store", href: app.stores.appStore },
    { label: "Google Play", href: app.stores.googlePlay },
    { label: "Repo", href: app.repo },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <article className="flex gap-4 sm:gap-8">
      <div className="shrink-0 sm:w-32">
        <Image
          src={app.icon}
          alt=""
          width={56}
          height={56}
          className="rounded-xl border border-line"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-display text-base font-bold">{app.title}</h3>
        <p className="mt-1 text-sm text-muted">{app.description}</p>

        <div className="mt-3 flex gap-4 text-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label}: ${app.title}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Apps() {
  return (
    <section aria-labelledby="apps-heading">
      <div className="mb-8 flex items-baseline gap-4">
        <h2 id="apps-heading" className="font-mono text-xs uppercase tracking-[0.14em] text-dim">
          Apps
        </h2>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>

      <div className="space-y-10">
        {publishedApps.map((app) => (
          <AppEntry key={app.slug} app={app} />
        ))}
      </div>
    </section>
  );
}
