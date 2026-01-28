import FloatingNav from "@components/FloatingNav";
import Footer from "@sections/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";

import "@styles/global.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ignacioguri.me"),
  title: {
    default: "Ignacio Guri's page",
    template: "%s | Ignacio Guri",
  },
  description: "This is Ignacio Guri's personal webpage",
  authors: [{ name: "Ignacio Guri" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Ignacio Guri's page",
    description: "This is Ignacio Guri's personal webpage",
    url: "https://ignacioguri.me",
    siteName: "Ignacio Guri",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Ignacio Guri's page",
    description: "This is Ignacio Guri's personal webpage",
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
              name: "Ignacio Guri",
              url: "https://ignacioguri.me",
              jobTitle: "Senior Frontend Engineer",
              sameAs: [
                "https://www.linkedin.com/in/ignacio-guri/",
                "https://github.com/ignaguri",
              ],
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
