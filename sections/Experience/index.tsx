import Image from "next/image";

import type { Role } from "@lib/data/experience";

import { experience } from "@lib/data/experience";

function formatPeriod(from: string, to: string | null): string {
  if (to === null) {
    return `${from} — Present`;
  }
  return `${from} — ${to}`;
}

function RoleEntry({ role }: { role: Role }) {
  return (
    <article className="flex flex-col gap-4 sm:flex-row sm:gap-8">
      <div className="shrink-0 sm:w-32">
        <Image
          src={role.logo.src}
          alt={role.logo.alt}
          width={role.logo.width}
          height={role.logo.height}
          className="max-h-10 w-auto max-w-28 object-contain"
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      <div className="flex-1">
        <h3 className="font-display text-base font-bold">
          <a
            href={role.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink no-underline hover:underline"
          >
            {role.company}
          </a>
        </h3>
        <p className="mt-1 text-sm text-muted">{role.context}</p>

        <ul className="mt-3 space-y-1">
          {role.positions.map((position) => (
            <li
              key={`${position.title}-${position.from}`}
              className="flex flex-col gap-x-3 sm:flex-row sm:items-baseline"
            >
              <span className="font-mono text-xs text-dim sm:w-40 sm:shrink-0">
                {formatPeriod(position.from, position.to)}
              </span>
              <span className="text-sm font-medium">{position.title}</span>
            </li>
          ))}
        </ul>

        <p className="mt-3 text-sm text-muted">{role.summary}</p>
      </div>
    </article>
  );
}

export default function Experience() {
  const primaryRoles = experience.filter((role) => !role.collapsed);
  const collapsedRoles = experience.filter((role) => role.collapsed);

  return (
    <section aria-labelledby="experience-heading">
      <div className="mb-8 flex items-baseline gap-4">
        <h2
          id="experience-heading"
          className="font-mono text-xs uppercase tracking-[0.14em] text-dim"
        >
          Experience
        </h2>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>

      <div className="space-y-10">
        {primaryRoles.map((role) => (
          <RoleEntry key={role.id} role={role} />
        ))}
      </div>

      {collapsedRoles.length > 0 && (
        <details className="group mt-8">
          {/* Arrows are decorative and aria-hidden so the label is announced
              once. <details> already conveys expanded/collapsed state. */}
          <summary className="cursor-pointer font-mono text-xs text-dim marker:content-[''] hover:text-muted">
            <span aria-hidden="true" className="group-open:hidden">
              ▸{" "}
            </span>
            <span aria-hidden="true" className="hidden group-open:inline">
              ▾{" "}
            </span>
            Earlier roles
          </summary>
          <div className="mt-6 space-y-10">
            {collapsedRoles.map((role) => (
              <RoleEntry key={role.id} role={role} />
            ))}
          </div>
        </details>
      )}
    </section>
  );
}
