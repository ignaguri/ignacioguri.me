import { cacheLife, cacheTag } from "next/cache";
import { Octokit } from "octokit";

import type { Project } from "@lib/types";
import type { Endpoints } from "@octokit/types";

const octokit = new Octokit({
  auth: process.env.GITHUB_API_TOKEN,
});

type ListForUserResponse =
  Endpoints["GET /users/{username}/repos"]["response"]["data"];
type ListLanguagesResponse =
  Endpoints["GET /repos/{owner}/{repo}/languages"]["response"]["data"];

export async function fetchGitHubProjects(
  username: string,
): Promise<Project[]> {
  "use cache";
  cacheLife({ revalidate: 604800 }); // 7 days
  cacheTag("github-projects");

  const { data: repos }: { data: ListForUserResponse } =
    await octokit.rest.repos.listForUser({
      type: "owner",
      username,
    });

  const projects = await Promise.all(
    repos.map(async (repo) => {
      if (repo.fork || repo.archived || repo.private) {
        return null;
      }

      const { data: languagesData }: { data: ListLanguagesResponse } =
        await octokit.rest.repos.listLanguages({
          owner: username,
          repo: repo.name,
        });
      const techs = Object.keys(languagesData);

      // Fetch the first page of commits to get the total count
      const { data: commitsData, headers } =
        await octokit.rest.repos.listCommits({
          owner: username,
          per_page: 10,
          repo: repo.name,
        });

      let commitCount = commitsData.length;

      if (commitCount === 10 && headers.link) {
        const lastPageMatch = headers.link.match(/&page=(\d+)>; rel="last"/);
        if (lastPageMatch) {
          const lastPage = parseInt(lastPageMatch[1], 10);
          const lastPageCommits = await octokit.rest.repos.listCommits({
            owner: username,
            page: lastPage,
            per_page: 10,
            repo: repo.name,
          });
          commitCount = (lastPage - 1) * 10 + lastPageCommits.data.length;
        }
      }

      return {
        commitCount,
        description: repo.description,
        id: repo.id,
        link: repo.homepage ?? null,
        name: repo.name,
        repo: repo.html_url,
        techs,
      };
    }),
  );

  return projects
    .filter((project): project is Project => project !== null)
    .sort((a, b) => b.commitCount - a.commitCount);
}
