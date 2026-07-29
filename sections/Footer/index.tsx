import { profile } from "@lib/data/profile";

export default function Footer() {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t border-line text-sm text-muted">
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
    </footer>
  );
}
