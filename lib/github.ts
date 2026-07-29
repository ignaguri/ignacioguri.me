import { cacheLife, cacheTag } from "next/cache";
import { Octokit } from "octokit";

import type { Project, RepoSummary } from "@lib/types";

import { GITHUB_USERNAME, projectOverrides } from "@lib/data/projects";
import { fallbackProjects, refineTechs, selectRepos } from "@lib/projects";

const octokit = new Octokit({
  auth: process.env.GITHUB_API_TOKEN,
});

async function fetchTechs(username: string, repo: string): Promise<string[]> {
  try {
    const { data } = await octokit.rest.repos.listLanguages({
      owner: username,
      repo,
    });
    return refineTechs(Object.keys(data));
  } catch {
    return [];
  }
}

/**
 * Fetches the curated project set. Never throws.
 *
 * Falls back to the hand-written entries in two cases: the GitHub call failed,
 * or no repo carries the portfolio topic yet. Both degrade to showing the
 * curated projects without live language data, rather than rendering an error
 * or an empty section.
 */
export async function fetchProjects(): Promise<Project[]> {
  "use cache";
  cacheLife({ revalidate: 604800 }); // 7 days
  cacheTag("github-projects");

  try {
    const { data } = await octokit.rest.repos.listForUser({
      type: "owner",
      username: GITHUB_USERNAME,
      per_page: 100,
    });

    const selected = selectRepos(data as unknown as RepoSummary[], projectOverrides);

    if (selected.length === 0) {
      return fallbackProjects(projectOverrides, GITHUB_USERNAME);
    }

    return await Promise.all(
      selected.map(async (project) => ({
        ...project,
        techs: await fetchTechs(GITHUB_USERNAME, project.repo),
      })),
    );
  } catch (error) {
    console.error("[github] falling back to curated projects:", error);
    return fallbackProjects(projectOverrides, GITHUB_USERNAME);
  }
}
