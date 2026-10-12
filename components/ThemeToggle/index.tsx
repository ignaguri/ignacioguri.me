"use client";

import MoonIcon from "@components/Icons/Moon";
import SunIcon from "@components/Icons/Sun";
import { applyTheme, THEME_CHANGE_EVENT, THEME_STORAGE_KEY } from "@lib/theme";
import classNames from "classnames";
import { useEffect, useState } from "react";

import type { OnlyClassNameProps } from "@lib/types";

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
      if (localStorage.getItem(THEME_STORAGE_KEY) !== null) {
        return;
      }
      document.documentElement.classList.toggle("dark", event.matches);
      setIsDark(event.matches);
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  useEffect(() => {
    const handleThemeChange = (event: Event) => {
      setIsDark((event as CustomEvent<boolean>).detail);
    };

    window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange);
    return () => window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange);
  }, []);

  const toggleTheme = () => {
    applyTheme(!isDark);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className={classNames(
        "inline-flex size-11 items-center justify-center rounded-full",
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
