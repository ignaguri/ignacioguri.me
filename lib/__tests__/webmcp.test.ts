import { describe, expect, it, vi } from "vitest";

import { createWebMcpTools, navigationTargets } from "../webmcp";

function setup() {
  const deps = {
    navigate: vi.fn(),
    setTheme: vi.fn(),
    fetchProjects: vi.fn().mockResolvedValue([{ repo: "example" }]),
  };
  const tools = createWebMcpTools(deps);
  const run = (name: string, input: Record<string, unknown> = {}) =>
    tools
      .find((tool) => tool.name === name)!
      .execute(input, { signal: new AbortController().signal });
  return { deps, run };
}

describe("createWebMcpTools", () => {
  it("offers every routable playground page as a navigation target, but not external ones", () => {
    expect(navigationTargets).toContain("/playground/webmcp");
    expect(navigationTargets).not.toContain("/playground/prostcounter");
  });

  it("navigates only to known paths", async () => {
    const { deps, run } = setup();

    await run("navigate", { path: "/playground" });
    const rejected = await run("navigate", { path: "https://evil.example" });

    expect(deps.navigate).toHaveBeenCalledExactlyOnceWith("/playground");
    expect(rejected).toMatch(/Unknown path/);
  });

  it("sets the theme only for light or dark", async () => {
    const { deps, run } = setup();

    await run("set_theme", { theme: "dark" });
    await run("set_theme", { theme: "purple" });

    expect(deps.setTheme).toHaveBeenCalledExactlyOnceWith(true);
  });

  it("returns projects from the injected fetcher", async () => {
    const { run } = setup();

    expect(JSON.parse(await run("list_projects"))).toEqual([{ repo: "example" }]);
  });
});
