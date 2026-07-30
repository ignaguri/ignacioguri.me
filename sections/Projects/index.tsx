import Link from "next/link";

import type { Project } from "@lib/types";

import { fetchProjects } from "@lib/github";

function ProjectEntry({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-2 sm:flex-row sm:gap-8">
      {/* Empty when the repo has no stars: a placeholder glyph here is noise
          visually and gets announced as "em dash" on every row. */}
      <div className="shrink-0 font-mono text-xs text-dim sm:w-32 sm:pt-1">
        {project.stars > 0 && (
          <span aria-label={`${project.stars} stars on GitHub`}>★ {project.stars}</span>
        )}
      </div>

      <div className="flex-1">
        <h3 className="font-display text-base font-bold">{project.title}</h3>
        <p className="mt-1 text-sm text-muted">{project.description}</p>

        {project.techs.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.techs.map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-accent-bg px-2 py-0.5 font-mono text-[11px] text-accent-text"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-3 flex gap-4 text-sm">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Repo: ${project.title}`}
          >
            Repo
          </a>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live site: ${project.title}`}
            >
              Live site
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default async function Projects() {
  const projects = await fetchProjects();

  if (projects.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="projects-heading">
      <div className="mb-8 flex items-baseline gap-4">
        <h2
          id="projects-heading"
          className="font-mono text-xs uppercase tracking-[0.14em] text-dim"
        >
          Projects
        </h2>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>

      <div className="space-y-10">
        {projects.map((project) => (
          <ProjectEntry key={project.repo} project={project} />
        ))}
      </div>

      <p className="mt-10 border-t border-line pt-6 text-sm text-muted">
        <Link href="/playground" className="text-accent-text">
          Playground →
        </Link>{" "}
        a few of these, live and runnable, no résumé required.
      </p>
    </section>
  );
}
