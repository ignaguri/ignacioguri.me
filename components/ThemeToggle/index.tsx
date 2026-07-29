"use client";

import MoonIcon from "@components/Icons/Moon";
import SunIcon from "@components/Icons/Sun";
import classNames from "classnames";
import { useEffect, useState } from "react";

import type { OnlyClassNameProps } from "@lib/types";

const STORAGE_KEY = "theme";

export default function ThemeToggle({ className }: OnlyClassNameProps) {
  const [isDark, setIsDark] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Seed from what the inline script already decided, so the system
    // preference is never clobbered.
    setIsDark(document.documentElement.classList.contains("dark"));
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemChange = (event: MediaQueryListEvent) => {
      // Only follow the system while the user has made no explicit choice.
      if (localStorage.getItem(STORAGE_KEY) !== null) {
        return;
      }
      document.documentElement.classList.toggle("dark", event.matches);
      setIsDark(event.matches);
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem(STORAGE_KEY, nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className={classNames(
        "inline-flex size-9 items-center justify-center rounded-full",
        "border border-line bg-surface text-muted",
        "transition-colors hover:text-ink",
        className,
      )}
    >
      {/* Rendered only after mount so SSR markup matches either theme. */}
      {hasMounted && (isDark ? <MoonIcon className="size-4" /> : <SunIcon className="size-4" />)}
    </button>
  );
}
