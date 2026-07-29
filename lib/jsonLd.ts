import { experience } from "@lib/data/experience";
import { profile } from "@lib/data/profile";

const SITE_URL = "https://ignacioguri.me";

/**
 * Builds the Person schema from profile data rather than repeating facts by
 * hand. The previous hand-written version had already drifted: it listed AWS,
 * Firebase and Python under knowsAbout while none appeared on the page.
 */
export function buildPersonSchema(): Record<string, unknown> {
  const [currentRole] = experience;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: SITE_URL,
    image: `${SITE_URL}${profile.photo.src}`,
    jobTitle: profile.role,
    email: `mailto:${profile.socials.email}`,
    description: profile.now,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location.city,
      addressCountry: profile.location.countryCode,
    },
    nationality: {
      "@type": "Country",
      name: profile.origin.country,
    },
    worksFor: {
      "@type": "Organization",
      name: profile.employer.name,
      url: profile.employer.url,
    },
    alumniOf: experience
      .filter((role) => role.id !== currentRole.id)
      .map((role) => ({
        "@type": "Organization",
        name: role.company,
      })),
    knowsAbout: profile.stack,
    knowsLanguage: profile.languages.map((language) => ({
      "@type": "Language",
      name: language.name,
      alternateName: language.code,
    })),
    sameAs: [profile.socials.linkedin, profile.socials.github],
  };
}
