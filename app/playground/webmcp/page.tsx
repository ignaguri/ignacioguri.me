import type { Metadata } from "next";

import Breadcrumb from "@components/Breadcrumb";
import WebMcpStatus from "@components/WebMcpStatus";

import { webMcpToolSpecs } from "@lib/webmcp";

export const metadata: Metadata = {
  title: "WebMCP",
  description: "The tools this site exposes to AI agents through WebMCP.",
  alternates: {
    canonical: "https://ignacioguri.me/playground/webmcp",
  },
};

export default function WebMcpPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-4 py-10 sm:py-16">
      <div>
        <Breadcrumb
          trail={[
            { label: "Home", href: "/" },
            { label: "Playground", href: "/playground" },
            { label: "WebMCP" },
          ]}
        />

        <h1 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">WebMCP</h1>
        <div className="mt-4 space-y-3 text-sm text-muted">
          <p>
            <a
              href="https://developer.chrome.com/docs/ai/webmcp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-text"
            >
              WebMCP
            </a>{" "}
            is a proposed web standard that lets a page hand typed tools to an AI agent running in
            your browser. Instead of scraping the page and clicking around, the agent just calls
            them.
          </p>
          <p>
            It&apos;s in a Chrome origin trial. To try it locally, turn on{" "}
            <code className="font-mono">chrome://flags/#enable-webmcp-testing</code> and use the
            Model Context Tool Inspector extension, or any agent that speaks WebMCP.
          </p>
          <WebMcpStatus />
        </div>
      </div>

      <section aria-labelledby="tools-heading" className="space-y-6">
        <h2 id="tools-heading" className="font-display text-lg font-bold">
          Tools
        </h2>
        <ul className="space-y-6">
          {webMcpToolSpecs.map((tool) => (
            <li key={tool.name}>
              <code className="font-mono text-sm font-bold">{tool.name}</code>
              <p className="mt-1 text-sm text-muted">{tool.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
