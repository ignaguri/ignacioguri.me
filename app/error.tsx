"use client";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <main className="flex flex-col justify-center items-center py-20 px-4 text-center">
      <h1 className="text-6xl font-bold text-ink">Oops!</h1>
      <p className="mt-4 text-xl text-muted">Something went wrong</p>
      <p className="mt-2 text-base text-dim">{error.message || "An unexpected error occurred."}</p>
      <button
        onClick={reset}
        className="mt-8 text-accent-text underline underline-offset-2 hover:text-ink transition-colors cursor-pointer"
        type="button"
      >
        Try again
      </button>
    </main>
  );
}
