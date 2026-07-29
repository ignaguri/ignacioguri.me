import { describe, expect, it } from "vitest";

import type { ProjectOverride, RepoSummary } from "../types";

import { fallbackProjects, refineTechs, selectRepos } from "../projects";

function makeRepo(overrides: Partial<RepoSummary> = {}): RepoSummary {
  return {
    name: "example",
    description: "An example repo",
    homepage: null,
    html_url: "https://github.com/ignaguri/example",
    topics: ["portfolio"],
    fork: false,
    archived: false,
    private: false,
    stargazers_count: 0,
    pushed_at: "2026-01-01T00:00:00Z",
    ...overrides,
  };
}

describe("selectRepos", () => {
  it("keeps only repos carrying the portfolio topic", () => {
    const repos = [
      makeRepo({ name: "kept", topics: ["portfolio"] }),
      makeRepo({ name: "dropped", topics: ["other"] }),
      makeRepo({ name: "untagged", topics: [] }),
    ];

    const result = selectRepos(repos, []);

    expect(result.map((project) => project.repo)).toEqual(["kept"]);
  });

  it("excludes forks, archived and private repos even when tagged", () => {
    const repos = [
      makeRepo({ name: "fork", fork: true }),
      makeRepo({ name: "archived", archived: true }),
      makeRepo({ name: "private", private: true }),
      makeRepo({ name: "good" }),
    ];

    const result = selectRepos(repos, []);

    expect(result.map((project) => project.repo)).toEqual(["good"]);
  });

  it("prefers the override title and description over GitHub's", () => {
    const repos = [makeRepo({ name: "oktoberfest-attendance", description: "Spanish text" })];
    const overrides: ProjectOverride[] = [
      {
        repo: "oktoberfest-attendance",
        title: "ProstCounter",
        description: "Hand-written English.",
      },
    ];

    const [project] = selectRepos(repos, overrides);

    expect(project.title).toBe("ProstCounter");
    expect(project.description).toBe("Hand-written English.");
  });

  it("falls back to the repo name and GitHub description when not overridden", () => {
    const repos = [makeRepo({ name: "untouched", description: "From GitHub" })];

    const [project] = selectRepos(repos, []);

    expect(project.title).toBe("untouched");
    expect(project.description).toBe("From GitHub");
  });

  it("uses an empty description when GitHub has none and there is no override", () => {
    const repos = [makeRepo({ name: "bare", description: null })];

    const [project] = selectRepos(repos, []);

    expect(project.description).toBe("");
  });

  it("sorts by explicit order before anything else", () => {
    const repos = [
      makeRepo({ name: "third", pushed_at: "2026-07-01T00:00:00Z" }),
      makeRepo({ name: "first", pushed_at: "2020-01-01T00:00:00Z" }),
      makeRepo({ name: "second", pushed_at: "2021-01-01T00:00:00Z" }),
    ];
    const overrides: ProjectOverride[] = [
      { repo: "first", order: 1 },
      { repo: "second", order: 2 },
    ];

    const result = selectRepos(repos, overrides);

    expect(result.map((project) => project.repo)).toEqual(["first", "second", "third"]);
  });

  it("sorts unordered repos by pushed_at descending", () => {
    const repos = [
      makeRepo({ name: "older", pushed_at: "2019-01-01T00:00:00Z" }),
      makeRepo({ name: "newer", pushed_at: "2026-07-01T00:00:00Z" }),
    ];

    const result = selectRepos(repos, []);

    expect(result.map((project) => project.repo)).toEqual(["newer", "older"]);
  });

  it("carries homepage through as link and null when absent", () => {
    const repos = [
      makeRepo({ name: "hosted", homepage: "https://www.prostcounter.fun" }),
      makeRepo({ name: "unhosted", homepage: null }),
    ];

    const result = selectRepos(repos, []);

    expect(result.find((project) => project.repo === "hosted")?.link).toBe(
      "https://www.prostcounter.fun",
    );
    expect(result.find((project) => project.repo === "unhosted")?.link).toBeNull();
  });

  it("treats an empty homepage string as no link", () => {
    const repos = [makeRepo({ name: "blank", homepage: "" })];

    const [project] = selectRepos(repos, []);

    expect(project.link).toBeNull();
  });

  it("returns an empty array when nothing qualifies", () => {
    expect(selectRepos([], [])).toEqual([]);
  });
});

describe("fallbackProjects", () => {
  it("builds renderable projects from overrides alone", () => {
    const overrides: ProjectOverride[] = [
      { repo: "a", title: "A", description: "First", order: 2 },
      { repo: "b", title: "B", description: "Second", order: 1 },
    ];

    const result = fallbackProjects(overrides, "ignaguri");

    expect(result.map((project) => project.repo)).toEqual(["b", "a"]);
    expect(result[0].url).toBe("https://github.com/ignaguri/b");
    expect(result[0].techs).toEqual([]);
    expect(result[0].pushedAt).toBeNull();
  });

  it("skips overrides missing a title or description", () => {
    const overrides: ProjectOverride[] = [
      { repo: "complete", title: "Complete", description: "Has both" },
      { repo: "titleless", description: "No title" },
      { repo: "descriptionless", title: "No description" },
    ];

    const result = fallbackProjects(overrides, "ignaguri");

    expect(result.map((project) => project.repo)).toEqual(["complete"]);
  });
});

describe("refineTechs", () => {
  it("drops markup, styling and scripting languages", () => {
    const result = refineTechs(["TypeScript", "HTML", "CSS", "Shell", "Svelte"]);

    expect(result).toEqual(["TypeScript", "Svelte"]);
  });

  it("caps the list at four entries", () => {
    const result = refineTechs(["TypeScript", "PLpgSQL", "Swift", "Python", "Ruby", "Go"]);

    expect(result).toEqual(["TypeScript", "PLpgSQL", "Swift", "Python"]);
  });

  it("preserves GitHub's byte-descending order", () => {
    const result = refineTechs(["Swift", "TypeScript"]);

    expect(result).toEqual(["Swift", "TypeScript"]);
  });

  it("matches the denylist regardless of casing", () => {
    expect(refineTechs(["html", "SHELL", "Css"])).toEqual([]);
  });

  it("returns an empty list when every language is filtered out", () => {
    expect(refineTechs(["HTML", "CSS"])).toEqual([]);
  });

  it("handles a repo with no detected languages", () => {
    expect(refineTechs([])).toEqual([]);
  });
});
