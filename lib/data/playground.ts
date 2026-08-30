import type { PlaygroundApp } from "@lib/types";

export const playgroundApps: PlaygroundApp[] = [
  {
    slug: "votateneo",
    title: "VotAteneo",
    description:
      "A scrappy voting app I built for student council elections back in college, votes counted live, nothing saved for later.",
    kind: "embed",
    href: "https://ignaguri.github.io/VotAteneo/",
  },
  {
    slug: "appsistencia",
    title: "Appsistencia",
    description:
      "An old attendance tracker whose database died in 2020. Fixed it up to run on localStorage instead of a grave.",
    kind: "embed",
    href: "https://ignaguri.github.io/Appsistencia/",
  },
  {
    slug: "prostcounter",
    title: "ProstCounter",
    description:
      "Same app as in Projects, but here you actually get to log a round. Go count your Maß.",
    kind: "external",
    href: "https://www.prostcounter.fun",
  },
  {
    slug: "football-with-friends",
    title: "football-with-friends",
    description:
      "Also in Projects, but this is the live thing: jump in and see how the next match gets organised.",
    kind: "external",
    href: "https://football-with-friends.vercel.app",
  },
];
