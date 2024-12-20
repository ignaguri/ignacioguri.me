import { Octokit } from "octokit";
import { Endpoints } from "@octokit/types";
import { Project } from "@lib/types";

const octokit = new Octokit({
  auth: process.env.GITHUB_API_TOKEN,
});

type ListForUserResponse =
  Endpoints["GET /users/{username}/repos"]["response"]["data"];
type ListLanguagesResponse =
  Endpoints["GET /repos/{owner}/{repo}/languages"]["response"]["data"];

interface CacheEntry {
  data: Project[];
  expiry: number;
}

const cache: { [key: string]: CacheEntry } = {};
const CACHE_DURATION = 1000 * 60 * 60 * 24 * 7; // 1 week

export async function fetchGitHubProjects(username: string) {
  const cacheKey = `github_projects_${username}`;
  const now = Date.now();

  if (cache[cacheKey] && cache[cacheKey].expiry > now) {
    return cache[cacheKey].data;
  }

  try {
    const { data: repos }: { data: ListForUserResponse } =
      await octokit.rest.repos.listForUser({
        type: "owner",
        username,
      });

    const projects = await Promise.all(
      repos.map(async (repo) => {
        if (repo.fork || repo.archived || repo.private) {
          return [];
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
      })
    );

    const topProjects = projects
      .flat()
      .sort((a, b) => b.commitCount - a.commitCount);

    // Cache the result
    cache[cacheKey] = {
      data: topProjects,
      expiry: now + CACHE_DURATION,
    };

    return topProjects;
  } catch (error) {
    throw error;
  }
}
