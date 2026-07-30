import { describe, expect, it } from "vitest";

import type { PlaygroundApp } from "../types";

import { findEmbedApp } from "../playground";

function makeApp(overrides: Partial<PlaygroundApp> = {}): PlaygroundApp {
  return {
    slug: "example",
    title: "Example",
    description: "An example app.",
    kind: "embed",
    href: "https://example.com",
    ...overrides,
  };
}

describe("findEmbedApp", () => {
  it("returns the app when the slug matches an embed entry", () => {
    const apps = [makeApp({ slug: "votateneo" })];

    const result = findEmbedApp(apps, "votateneo");

    expect(result?.slug).toBe("votateneo");
  });

  it("returns null when the slug matches an external entry", () => {
    const apps = [makeApp({ slug: "prostcounter", kind: "external" })];

    const result = findEmbedApp(apps, "prostcounter");

    expect(result).toBeNull();
  });

  it("returns null when no app matches the slug", () => {
    const apps = [makeApp({ slug: "votateneo" })];

    const result = findEmbedApp(apps, "unknown");

    expect(result).toBeNull();
  });
});
