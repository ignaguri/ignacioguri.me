export interface ProfileLocation {
  city: string;
  country: string;
  countryCode: string;
  flag: string;
}

export interface ProfileLanguage {
  name: string;
  code: string;
  level: string;
}

export interface Profile {
  name: string;
  role: string;
  intro: string;
  now: string;
  location: ProfileLocation;
  origin: ProfileLocation;
  languages: ProfileLanguage[];
  stack: string[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  photo: {
    src: string;
    alt: string;
  };
  employer: {
    name: string;
    url: string;
  };
}

export const profile: Profile = {
  name: "Ignacio Gurí",
  role: "Senior Frontend Engineer",
  intro: "If something can be an app, I'll probably end up building it. Hence the side projects.",
  now: "Guest Experience & Visibility at Holidu, helping travellers find the right place to stay.",
  location: {
    city: "Munich",
    country: "Germany",
    countryCode: "DE",
    flag: "🇩🇪",
  },
  origin: {
    city: "Córdoba",
    country: "Argentina",
    countryCode: "AR",
    flag: "🇦🇷",
  },
  languages: [
    { name: "Spanish", code: "es", level: "Native" },
    { name: "English", code: "en", level: "Professional" },
    { name: "German", code: "de", level: "Limited" },
  ],
  stack: ["TypeScript", "React", "Next.js", "Node.js", "Vue.js", "Swift", "Python"],
  socials: {
    github: "https://github.com/ignaguri",
    linkedin: "https://www.linkedin.com/in/ignacio-guri/",
    email: "ignacioguri@gmail.com",
  },
  photo: {
    src: "/ignacio.jpg",
    alt: "Ignacio Gurí",
  },
  employer: {
    name: "Holidu GmbH",
    url: "https://www.holidu.com",
  },
};
