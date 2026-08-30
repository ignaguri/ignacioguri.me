import { notFound } from "next/navigation";

import type { Metadata } from "next";

import Breadcrumb from "@components/Breadcrumb";

import { playgroundApps } from "@lib/data/playground";
import { findEmbedApp, getEmbedSlugs } from "@lib/playground";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getEmbedSlugs(playgroundApps).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = findEmbedApp(playgroundApps, slug);

  if (!app) {
    return { title: "Not found" };
  }

  return {
    title: app.title,
    description: app.description,
    alternates: {
      canonical: `https://ignacioguri.me/playground/${app.slug}`,
    },
  };
}

export default async function PlaygroundAppPage({ params }: PageProps) {
  const { slug } = await params;
  const app = findEmbedApp(playgroundApps, slug);

  if (!app) {
    notFound();
  }

  return (
    <div className="flex min-h-[70vh] w-full flex-col gap-4 px-4 py-10 sm:py-16">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4 pr-12 text-sm sm:pr-0">
        <Breadcrumb
          trail={[
            { label: "Home", href: "/" },
            { label: "Playground", href: "/playground" },
            { label: app.title },
          ]}
        />
        <a
          href={app.href}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-dim hover:text-ink"
        >
          Open in new tab ↗
        </a>
      </div>

      <h1 className="mx-auto w-full max-w-4xl font-display text-xl font-bold">{app.title}</h1>

      <iframe
        src={app.href}
        title={app.title}
        className="h-[75vh] w-full border border-line"
        sandbox="allow-scripts allow-same-origin allow-forms"
      />
    </div>
  );
}
