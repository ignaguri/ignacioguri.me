import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center py-20 px-4 text-center">
      <h1 className="text-6xl font-bold text-ink">404</h1>
      <p className="mt-4 text-xl text-muted">Page not found</p>
      <p className="mt-2 text-base text-dim">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-8 text-accent-text underline underline-offset-2 hover:text-ink transition-colors">
        Go home
      </Link>
    </main>
  );
}
