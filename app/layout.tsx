"use client";

import FloatingNav from "@components/FloatingNav";
import Footer from "@sections/Footer";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

import type { PropsWithChildren } from "react";

import "@styles/global.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <Head>
        <title>Ignacio Gurí&apos;s page</title>
        <meta
          name="description"
          content="This is Ignacio Gurí's personal webpage"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              const theme = localStorage.getItem('theme');
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              } else if (theme === 'light') {
                document.documentElement.classList.remove('dark');
              }
            })();`,
          }}
        />
      </Head>
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
