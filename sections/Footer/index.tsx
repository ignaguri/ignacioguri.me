import Link from "next/link";

import { profile } from "@lib/data/profile";

export default function Footer() {
  return (
    <footer className="flex h-24 w-full flex-col items-center justify-center gap-1 border-t border-line text-sm text-muted sm:flex-row sm:gap-2">
      <span>
        Created with ♥ by{" "}
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-text"
        >
          @ignaguri
        </a>
      </span>
      <span className="hidden sm:inline" aria-hidden="true">
        ·
      </span>
      <Link href="/playground" className="text-accent-text">
        Playground
      </Link>
    </footer>
  );
}
