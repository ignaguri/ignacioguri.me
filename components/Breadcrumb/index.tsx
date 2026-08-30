import Link from "next/link";

export interface Crumb {
  label: string;
  /** Omitted on the last crumb: the current page is not a link. */
  href?: string;
}

export default function Breadcrumb({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-dim">
        {trail.map((crumb, index) => (
          <li key={crumb.label} className="flex items-center gap-2">
            {crumb.href ? (
              <Link href={crumb.href} className="text-dim hover:text-ink">
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-muted">
                {crumb.label}
              </span>
            )}

            {index < trail.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
