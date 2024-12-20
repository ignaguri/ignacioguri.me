export type PropsWithClassName<T> = T & {
  className?: string;
};

export type OnlyClassNameProps = {
  className?: string;
};

export interface Project {
  commitCount: number;
  description: string | null;
  link: string | null;
  id: number;
  name: string;
  repo: string;
  techs: string[];
}
