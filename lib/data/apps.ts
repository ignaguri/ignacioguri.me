import type { PublishedApp } from "@lib/types";

export const publishedApps: PublishedApp[] = [
  {
    slug: "prostcounter",
    title: "ProstCounter",
    description:
      "Log every Maß and every tent at Oktoberfest and other beer festivals, then fight your friends for the top of the leaderboard.",
    icon: "/apps/prostcounter.jpg",
    category: "LifestyleApplication",
    stores: {
      appStore: "https://apps.apple.com/app/prostcounter/id6758376527",
      googlePlay: "https://play.google.com/store/apps/details?id=com.prostcounter.app",
    },
    repoUrl: "https://github.com/ignaguri/oktoberfest-attendance",
  },
  {
    slug: "fulbo-with-friends",
    title: "Fulbo with Friends",
    description:
      "The weekly football match, organised: create it, share it, and see who's actually coming.",
    icon: "/apps/fulbo-with-friends.jpg",
    category: "SportsApplication",
    stores: {
      appStore: "https://apps.apple.com/app/fulbo-with-friends/id6759833737",
    },
    repoUrl: "https://github.com/ignaguri/football-with-friends",
  },
  {
    slug: "contactfile",
    title: "Contactfile",
    description:
      "Finds the people saved twice across iCloud, Google and Exchange and merges them into one clean card. On-device AI, nothing leaves your iPhone.",
    icon: "/apps/contactfile.jpg",
    category: "UtilitiesApplication",
    stores: {
      appStore: "https://apps.apple.com/app/contactfile/id6829002286",
    },
  },
];
