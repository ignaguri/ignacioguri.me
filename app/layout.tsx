"use client";

import ThemeSwitcher from "@components/ThemeSwitcher";
import Footer from "@sections/Footer";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { useEffect, useState } from "react";

import type { PropsWithChildren } from "react";

import "@styles/global.css";

export default function RootLayout({ children }: PropsWithChildren) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved user preference on component mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

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
          <header className="w-full flex justify-end p-4">
            <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </header>
          <main className="flex-grow w-full">{children}</main>
          <Analytics />
        </div>
        <Footer />
      </body>
    </html>
  );
}
