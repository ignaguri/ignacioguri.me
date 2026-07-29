const PLACEHOLDER_ROWS = [0, 1, 2];

export default function ProjectsSkeleton() {
  return (
    <section aria-hidden="true">
      <div className="mb-8 flex items-baseline gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-dim">Projects</span>
        <span className="h-px flex-1 bg-line" />
      </div>

      <div className="space-y-10">
        {PLACEHOLDER_ROWS.map((row) => (
          <div key={row} className="flex animate-pulse flex-col gap-2 sm:flex-row sm:gap-8">
            <div className="h-4 w-12 shrink-0 rounded bg-line sm:w-32" />
            <div className="flex-1 space-y-2">
              <div className="h-5 w-48 rounded bg-line" />
              <div className="h-4 w-full max-w-md rounded bg-line" />
              <div className="h-4 w-24 rounded bg-line" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
