import { describe, expect, it } from "vitest";

import type { PlaygroundApp } from "../types";

import { findEmbedApp, getEmbedSlugs } from "../playground";

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

describe("getEmbedSlugs", () => {
  it("returns only embed slugs when the array has a mix of embed/external", () => {
    const apps = [
      makeApp({ slug: "votateneo", kind: "embed" }),
      makeApp({ slug: "prostcounter", kind: "external" }),
      makeApp({ slug: "appsistencia", kind: "embed" }),
    ];

    const result = getEmbedSlugs(apps);

    expect(result).toEqual(["votateneo", "appsistencia"]);
  });

  it("returns an empty array when there are no embed entries", () => {
    const apps = [makeApp({ slug: "prostcounter", kind: "external" })];

    const result = getEmbedSlugs(apps);

    expect(result).toEqual([]);
  });
});
