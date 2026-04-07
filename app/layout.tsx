import FloatingNav from "@components/FloatingNav";
import Footer from "@sections/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";

import "@styles/global.css";

const description =
  "Ignacio Gurí — Senior Frontend Engineer specializing in React, TypeScript, and Node.js. View my experience, skills, and open-source projects.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ignacioguri.me"),
  title: {
    default: "Ignacio Gurí — Senior Frontend Engineer",
    template: "%s | Ignacio Gurí",
  },
  description,
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
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function() {
              var theme = localStorage.getItem('theme');
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              } else if (theme === 'light') {
                document.documentElement.classList.remove('dark');
              }
            })();`,
          }}
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ignacio Gurí",
              url: "https://ignacioguri.me",
              jobTitle: "Senior Frontend Engineer",
              description:
                "Senior Frontend Engineer specializing in React, TypeScript, and Node.js.",
              knowsAbout: [
                "React",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Next.js",
                "Vue.js",
                "HTML",
                "CSS",
                "Swift",
                "Firebase",
                "AWS",
              ],
              sameAs: ["https://www.linkedin.com/in/ignacio-guri/", "https://github.com/ignaguri"],
            }),
          }}
        />
      </head>
      <body className="bg-white dark:bg-gray-900">
        <div className="container min-h-screen flex flex-col justify-center items-center mx-auto py-0 px-2 sm:px-4">
          <FloatingNav />
          <main className="grow w-full">{children}</main>
          <Analytics />
        </div>
        <Footer />
      </body>
    </html>
  );
}
