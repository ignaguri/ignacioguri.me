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

/** A fully resolved project ready to render. Private ones have no repo url. */
export type Project = Omit<SelectedRepo, "url"> & {
  url: string | null;
  techs: string[];
  isPrivate?: true;
};

/** A project whose repo is private, written by hand since GitHub won't list it. */
export interface PrivateProject {
  /** GitHub repo name, so the entry drops out once the repo turns public. */
  repo: string;
  title: string;
  description: string;
  techs: string[];
  order?: number;
}

/** A curated playground app: something runnable/previewable, not career evidence. */
export interface PlaygroundApp {
  slug: string;
  title: string;
  description: string;
  /**
   * "embed" gets a dedicated /playground/[slug] page with an iframe, "page" is a
   * hand-built route under /playground, "external" just links out.
   */
  kind: "embed" | "page" | "external";
  href: string;
}

/** An app published on the stores. `category` is schema.org's applicationCategory. */
export interface PublishedApp {
  slug: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  stores: { appStore: string; googlePlay?: string };
  repoUrl?: string;
}
