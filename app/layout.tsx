import SkipLink from "@components/SkipLink";
import ThemeToggle from "@components/ThemeToggle";
import { profile } from "@lib/data/profile";
import { buildPersonSchema } from "@lib/jsonLd";
import Footer from "@sections/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Bricolage_Grotesque, JetBrains_Mono, Public_Sans } from "next/font/google";
import Script from "next/script";

import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";

import "@styles/global.css";

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const bodyFont = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

/**
 * Search snippet and social preview text. Leads with the facts worth matching
 * on (role, city, employer) and closes with the hero line, so the description
 * follows the page copy instead of drifting from it. Kept under 160 chars.
 * "Holidu" rather than employer.name, which is the legal "Holidu GmbH".
 */
const description = `${profile.role} in ${profile.location.city}, currently at Holidu. ${profile.intro}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://ignacioguri.me"),
  title: {
    default: "Ignacio Gurí — Senior Frontend Engineer",
    template: "%s | Ignacio Gurí",
  },
  description,
  alternates: {
    canonical: "https://ignacioguri.me",
  },
  authors: [{ name: "Ignacio Gurí" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Ignacio Gurí — Senior Frontend Engineer",
    description,
    url: "https://ignacioguri.me",
    siteName: "Ignacio Gurí",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignacio Gurí — Senior Frontend Engineer",
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfd" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0e14" },
  ],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var stored = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var isDark = stored === 'dark' || (stored === null && prefersDark);
                document.documentElement.classList.toggle('dark', isDark);
              } catch (e) {}
            })();`,
          }}
        />
        {/*
          A plain <script>, not next/script. next/script's default
          afterInteractive strategy injects the tag client-side, leaving the
          structured data absent from the server-rendered HTML entirely. A
          plain tag in a Server Component renders straight into the markup.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPersonSchema()) }}
        />
      </head>
      <body className="bg-paper text-ink font-sans antialiased">
        <SkipLink />
        <div className="relative flex min-h-screen flex-col">
          <ThemeToggle className="fixed right-4 top-4 z-40" />
          <main id="main" className="grow">
            {children}
          </main>
          <Analytics />
        </div>
        <Footer />
      </body>
    </html>
  );
}
