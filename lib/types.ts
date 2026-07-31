export type PropsWithClassName<T> = T & {
  className?: string;
};

export type OnlyClassNameProps = {
  className?: string;
};

/** Narrowed shape of a GitHub repo — only the fields the selection logic reads. */
export interface RepoSummary {
  name: string;
  description: string | null;
  homepage: string | null;
  html_url: string;
  topics: string[];
  fork: boolean;
  archived: boolean;
  private: boolean;
  stargazers_count: number;
  pushed_at: string;
}

/** Hand-written curation for a repo. Fields left out fall back to GitHub's data. */
export interface ProjectOverride {
  repo: string;
  title?: string;
  description?: string;
  order?: number;
}

/** A repo that passed selection, before language data is fetched. */
export interface SelectedRepo {
  repo: string;
  title: string;
  description: string;
  url: string;
  link: string | null;
  stars: number;
  pushedAt: string | null;
}

/** A fully resolved project ready to render. */
export type Project = SelectedRepo & {
  techs: string[];
};

/** A curated playground app: something runnable/previewable, not career evidence. */
export interface PlaygroundApp {
  slug: string;
  title: string;
  description: string;
  /** "embed" gets a dedicated /playground/[slug] page with an iframe; "external" just links out. */
  kind: "embed" | "external";
  href: string;
}
