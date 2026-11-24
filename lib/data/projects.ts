import type { PrivateProject, ProjectOverride } from "@lib/types";

/** Repos must carry this GitHub topic to appear on the site. */
export const PORTFOLIO_TOPIC = "portfolio";

export const GITHUB_USERNAME = "ignaguri";

export const projectOverrides: ProjectOverride[] = [
  {
    repo: "oktoberfest-attendance",
    title: "ProstCounter",
    description: "Track how many Maß you and your friends survive across Oktoberfest.",
    order: 1,
  },
  {
    repo: "football-with-friends",
    title: "football-with-friends",
    description: "Organising the weekly match without the WhatsApp chaos.",
    order: 2,
  },
  {
    repo: "immoscout-helper",
    title: "immoscout-helper",
    description: "Chrome extension that scores flat listings and drafts the reply to the landlord.",
    order: 4,
  },
  {
    repo: "ig-cleanup",
    title: "Instagram Cleanup",
    description:
      "Chrome extension to swipe through who you follow and decide who stays. Keyboard or voice.",
    order: 5,
  },
];

/** Private repos worth showing. GitHub can't list them, so they're written by hand. */
export const privateProjects: PrivateProject[] = [
  {
    repo: "oktoberfest-scanner-ts",
    title: "Oktoberfest Scanner",
    description:
      "Watches the beer tents' reservation pages and pings me the moment a table frees up. Stores every scan, so it also charts when tables drop.",
    techs: ["TypeScript", "Svelte", "Hono", "SQLite"],
    order: 3,
  },
];
