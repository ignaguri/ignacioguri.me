"use client";

import GithubIcon from "@components/Icons/Github";
import LinkedInIcon from "@components/Icons/LinkedIn";
import MailIcon from "@components/Icons/Mail";
import ThemeSwitcher from "@components/ThemeSwitcher";
import { useEffect, useState } from "react";

export default function FloatingNav() {
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
    <nav className="fixed top-4 right-4 z-50">
      <div className="flex flex-col gap-3">
        <a
          href="https://www.linkedin.com/in/ignacio-guri/"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="size-5 text-gray-700 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400" />
        </a>

        <a
          href="https://github.com/ignaguri"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon className="size-5 text-gray-700 dark:text-white transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-100" />
        </a>

        <a
          href="mailto:ignacioguri@gmail.com"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          aria-label="Email"
        >
          <MailIcon className="size-5 text-gray-700 dark:text-gray-300 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400" />
        </a>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer">
          <div className="flex items-center justify-center">
            <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </nav>
  );
}
