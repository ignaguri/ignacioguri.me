import { Octokit } from "octokit";
import { Endpoints } from "@octokit/types";

const octokit = new Octokit({
  auth: process.env.GITHUB_API_TOKEN,
});

type ListForUserResponse = Endpoints["GET /users/{username}/repos"]["response"]["data"];
type ListLanguagesResponse = Endpoints["GET /repos/{owner}/{repo}/languages"]["response"]["data"];
type ListCommitsResponse = Endpoints["GET /repos/{owner}/{repo}/commits"]["response"]["data"];

const cache: { [key: string]: { data: any; expiry: number } } = {};
const CACHE_DURATION = 1000 * 60 * 60 * 24 * 7; // 1 week

export async function fetchGitHubProjects(username: string) {
  const cacheKey = `github_projects_${username}`;
  const now = Date.now();

  if (cache[cacheKey] && cache[cacheKey].expiry > now) {
    return cache[cacheKey].data;
  }

  try {
    const { data: repos }: { data: ListForUserResponse } = await octokit.rest.repos.listForUser({
      username,
      type: "owner",
    });

    const projects = await Promise.all(
      repos.map(async (repo) => {
        if (repo.fork || repo.archived || repo.private) {
          return [];
        }

        const { data: languagesData }: { data: ListLanguagesResponse } = await octokit.rest.repos.listLanguages({
          owner: username,
          repo: repo.name,
        });
        const techs = Object.keys(languagesData);

        // Fetch the first page of commits to get the total count
        const { data: commitsData, headers } = await octokit.rest.repos.listCommits({
          owner: username,
          repo: repo.name,
          per_page: 10,
        });

        let commitCount = commitsData.length;

        if (commitCount === 10 && headers.link) {
          const lastPageMatch = headers.link.match(/&page=(\d+)>; rel="last"/);
          if (lastPageMatch) {
            const lastPage = parseInt(lastPageMatch[1], 10);
            const lastPageCommits = await octokit.rest.repos.listCommits({
              owner: username,
              repo: repo.name,
              per_page: 10,
              page: lastPage,
            });
            commitCount = (lastPage - 1) * 10 + lastPageCommits.data.length;
          }
        }

        return {
          commitCount,
          description: repo.description,
          link: repo.homepage,
          id: repo.id,
          name: repo.name,
          repo: repo.html_url,
          techs,
        };
      })
    );

    const topProjects = projects.flat().sort((a, b) => b.commitCount - a.commitCount);

    // Cache the result
    cache[cacheKey] = {
      data: topProjects,
      expiry: now + CACHE_DURATION,
    };

    return topProjects;
  } catch (error) {
    console.error(`error in fetchGitHubProjects: ${error}`);
    throw error;
  }
}
