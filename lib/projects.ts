import type {
  PrivateProject,
  Project,
  ProjectOverride,
  RepoSummary,
  SelectedRepo,
} from "@lib/types";

import { PORTFOLIO_TOPIC } from "@lib/data/projects";

/** Repos with no explicit order sort after those that have one. */
const NO_EXPLICIT_ORDER = Number.MAX_SAFE_INTEGER;

/** Most tags worth showing per project, before the list turns into noise. */
const MAX_TECHS = 4;

/**
 * Markup, styling and scripting that GitHub counts as a language but that says
 * nothing about a project. Every web repo has HTML and CSS, so listing them
 * only pushes the interesting entries out of view.
 */
const UNINTERESTING_LANGUAGES = new Set([
  "batchfile",
  "css",
  "dockerfile",
  "html",
  "less",
  "makefile",
  "markdown",
  "mdx",
  "powershell",
  "procfile",
  "scss",
  "shell",
]);

/**
 * Trims GitHub's language breakdown to the few that characterise a project.
 * Input is expected in GitHub's order, which is descending by bytes, so the
 * cap keeps the most substantial languages.
 */
export function refineTechs(languages: string[]): string[] {
  return languages
    .filter((language) => !UNINTERESTING_LANGUAGES.has(language.toLowerCase()))
    .slice(0, MAX_TECHS);
}

function indexOverrides(overrides: ProjectOverride[]): Map<string, ProjectOverride> {
  return new Map(overrides.map((override) => [override.repo, override]));
}

function isEligible(repo: RepoSummary): boolean {
  if (repo.fork || repo.archived || repo.private) {
    return false;
  }
  return repo.topics.includes(PORTFOLIO_TOPIC);
}

/**
 * Filters repos down to the tagged, non-fork, non-archived, non-private set,
 * applies hand-written overrides, and sorts by explicit order then recency.
 */
export function selectRepos(repos: RepoSummary[], overrides: ProjectOverride[]): SelectedRepo[] {
  const overridesByRepo = indexOverrides(overrides);

  const selected = repos.filter(isEligible).map((repo) => {
    const override = overridesByRepo.get(repo.name);

    return {
      repo: repo.name,
      title: override?.title ?? repo.name,
      description: override?.description ?? repo.description ?? "",
      url: repo.html_url,
      link: repo.homepage ? repo.homepage : null,
      stars: repo.stargazers_count,
      pushedAt: repo.pushed_at,
    };
  });

  return selected.sort((a, b) => {
    const orderA = overridesByRepo.get(a.repo)?.order ?? NO_EXPLICIT_ORDER;
    const orderB = overridesByRepo.get(b.repo)?.order ?? NO_EXPLICIT_ORDER;

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    const pushedA = a.pushedAt ?? "";
    const pushedB = b.pushedAt ?? "";
    return pushedB.localeCompare(pushedA);
  });
}

/**
 * Renders the curated set without GitHub. Used when the API is unavailable, or
 * when no repo carries the portfolio topic, so the section degrades instead of
 * disappearing. Only overrides carrying both a title and a description can
 * stand alone.
 */
export function fallbackProjects(overrides: ProjectOverride[], username: string): Project[] {
  return overrides
    .filter((override) => Boolean(override.title) && Boolean(override.description))
    .sort((a, b) => (a.order ?? NO_EXPLICIT_ORDER) - (b.order ?? NO_EXPLICIT_ORDER))
    .map((override) => ({
      repo: override.repo,
      title: override.title as string,
      description: override.description as string,
      url: `https://github.com/${username}/${override.repo}`,
      link: null,
      stars: 0,
      pushedAt: null,
      techs: [],
    }));
}

/**
 * Adds the hand-written private projects to the GitHub ones, sorted by
 * explicit order. Unordered entries keep their relative position at the end.
 */
export function mergeProjects(
  publicProjects: Project[],
  privates: PrivateProject[],
  overrides: ProjectOverride[],
): Project[] {
  const overridesByRepo = indexOverrides(overrides);
  const publicRepos = new Set(publicProjects.map((project) => project.repo));
  // A private repo made public later would otherwise show twice.
  const stillPrivate = privates.filter((entry) => !publicRepos.has(entry.repo));

  const ordered = [
    ...publicProjects.map((project) => ({
      project,
      order: overridesByRepo.get(project.repo)?.order ?? NO_EXPLICIT_ORDER,
    })),
    ...stillPrivate.map((entry) => ({
      project: {
        repo: entry.repo,
        title: entry.title,
        description: entry.description,
        url: null,
        link: null,
        stars: 0,
        pushedAt: null,
        techs: entry.techs,
        isPrivate: true as const,
      },
      order: entry.order ?? NO_EXPLICIT_ORDER,
    })),
  ];

  // Array.prototype.sort is stable, so ties keep GitHub's recency order.
  return ordered.sort((a, b) => a.order - b.order).map(({ project }) => project);
}
