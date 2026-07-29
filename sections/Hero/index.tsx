import Avatar from "@components/Avatar";
import BentoGrid from "@components/BentoGrid";
import BentoTile from "@components/BentoTile";
import GithubIcon from "@components/Icons/Github";
import LinkedInIcon from "@components/Icons/LinkedIn";
import MailIcon from "@components/Icons/Mail";

import { profile } from "@lib/data/profile";

const TILE_LABEL = "font-mono text-[10px] uppercase tracking-[0.14em] text-dim";
const SOCIAL_LINK = "text-muted no-underline transition-colors hover:text-ink";

export default function Hero() {
  const { location, origin, languages, stack, socials } = profile;

  return (
    <section aria-labelledby="hero-name">
      <BentoGrid>
        <BentoTile colSpan={1} rowSpan={2} className="flex flex-col justify-between gap-6">
          <div>
            <Avatar size={64} priority />
            <h1
              id="hero-name"
              className="mt-4 font-display text-3xl font-extrabold leading-none tracking-tight lg:text-4xl"
            >
              {profile.name}
            </h1>
            <p className="mt-2 text-sm text-muted">{profile.role}</p>
            <p className="mt-4 text-sm">{profile.intro}</p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className={SOCIAL_LINK}
              >
                <LinkedInIcon className="size-5" />
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className={SOCIAL_LINK}
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={`mailto:${socials.email}`}
                aria-label={`Email ${socials.email}`}
                className={SOCIAL_LINK}
              >
                <MailIcon className="size-5" />
              </a>
            </div>
          </div>
        </BentoTile>

        <BentoTile colSpan={2} tone="muted">
          <p className={TILE_LABEL}>Now</p>
          <p className="mt-2 text-sm">{profile.now}</p>
        </BentoTile>

        <BentoTile>
          <p className={TILE_LABEL}>Based in</p>
          <p className="mt-2 text-sm">
            {location.city} {location.flag}
          </p>
          <p className="text-xs text-muted">
            from {origin.city} {origin.flag}
          </p>
        </BentoTile>

        <BentoTile>
          <p className={TILE_LABEL}>Languages</p>
          <ul className="mt-2 space-y-0.5 text-xs">
            {languages.map((language) => (
              <li key={language.code}>
                {language.name} <span className="text-muted">{language.level}</span>
              </li>
            ))}
          </ul>
        </BentoTile>

        <BentoTile colSpan={3}>
          <p className={TILE_LABEL}>Stack</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-accent-bg px-2 py-0.5 font-mono text-[11px] text-accent-text"
              >
                {tech}
              </li>
            ))}
          </ul>
        </BentoTile>
      </BentoGrid>
    </section>
  );
}
