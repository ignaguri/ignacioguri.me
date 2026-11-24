import { experience } from "@lib/data/experience";
import { playgroundApps } from "@lib/data/playground";
import { profile } from "@lib/data/profile";
import { getRoutableSlugs } from "@lib/playground";

export const navigationTargets = [
  "/",
  "/playground",
  ...getRoutableSlugs(playgroundApps).map((slug) => `/playground/${slug}`),
];

/** Everything about a tool except how it runs. Shared with the /playground/webmcp page. */
export type WebMcpToolSpec = Omit<WebMCP.ModelContextTool, "execute"> & { title: string };

const noInput = { type: "object", properties: {} };

export const webMcpToolSpecs = [
  {
    name: "get_profile",
    title: "Profile",
    description:
      "Who Ignacio Gurí is: role, current work, location, languages, tech stack and contact links.",
    inputSchema: noInput,
    annotations: { readOnlyHint: true },
  },
  {
    name: "get_experience",
    title: "Work experience",
    description:
      "Ignacio's work history, newest first: companies, positions with dates, and a one-line summary of each role.",
    inputSchema: noInput,
    annotations: { readOnlyHint: true },
  },
  {
    name: "list_projects",
    title: "Side projects",
    description:
      "Ignacio's side projects from GitHub, with description, repo URL, live link and tech stack.",
    inputSchema: noInput,
    annotations: { readOnlyHint: true },
  },
  {
    name: "list_playground_apps",
    title: "Playground apps",
    description:
      "Small runnable apps in the site's playground. Ones with a path can be opened with navigate, the rest live on their own url.",
    inputSchema: noInput,
    annotations: { readOnlyHint: true },
  },
  {
    name: "navigate",
    title: "Open a page",
    description: "Open a page of this site in the current tab.",
    inputSchema: {
      type: "object",
      properties: { path: { type: "string", enum: navigationTargets } },
      required: ["path"],
    },
  },
  {
    name: "set_theme",
    title: "Set theme",
    description: "Switch the site between light and dark theme.",
    inputSchema: {
      type: "object",
      properties: { theme: { type: "string", enum: ["light", "dark"] } },
      required: ["theme"],
    },
  },
] as const satisfies WebMcpToolSpec[];

type ToolName = (typeof webMcpToolSpecs)[number]["name"];

export interface WebMcpDeps {
  navigate: (path: string) => void;
  setTheme: (isDark: boolean) => void;
  fetchProjects: (signal: AbortSignal) => Promise<unknown>;
}

type StringExecutor = WebMCP.ToolExecuteCallback<Record<string, unknown>, string>;

export function createWebMcpTools(
  deps: WebMcpDeps,
): (WebMcpToolSpec & { execute: StringExecutor })[] {
  const executors: Record<ToolName, StringExecutor> = {
    get_profile: async () => JSON.stringify(profile),
    get_experience: async () =>
      JSON.stringify(
        experience.map(({ company, context, positions, summary }) => ({
          company,
          context,
          positions,
          summary,
        })),
      ),
    list_projects: async (_input, { signal }) => JSON.stringify(await deps.fetchProjects(signal)),
    list_playground_apps: async () =>
      JSON.stringify(
        playgroundApps.map(({ slug, title, description, kind, href }) =>
          kind === "external"
            ? { title, description, url: href }
            : { title, description, path: `/playground/${slug}` },
        ),
      ),
    navigate: async ({ path }) => {
      if (typeof path !== "string" || !navigationTargets.includes(path)) {
        return `Unknown path. Valid paths: ${navigationTargets.join(", ")}`;
      }
      deps.navigate(path);
      return `Navigated to ${path}`;
    },
    set_theme: async ({ theme }) => {
      if (theme !== "light" && theme !== "dark") {
        return 'Unknown theme. Use "light" or "dark".';
      }
      deps.setTheme(theme === "dark");
      return `Theme set to ${theme}`;
    },
  };

  return webMcpToolSpecs.map((spec) => ({ ...spec, execute: executors[spec.name] }));
}
