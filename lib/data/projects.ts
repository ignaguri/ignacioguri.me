import type { ProjectOverride } from "@lib/types";

/** Repos must carry this GitHub topic to appear on the site. */
export const PORTFOLIO_TOPIC = "portfolio";

export const GITHUB_USERNAME = "ignaguri";

// Descriptions are reviewed and finalised in Task 15.
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
    order: 3,
  },
];
