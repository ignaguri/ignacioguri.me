export const THEME_STORAGE_KEY = "theme";

/** Fired on window whenever the theme is set outside the toggle (e.g. by an agent). */
export const THEME_CHANGE_EVENT = "themechange";

export function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle("dark", isDark);
  window.dispatchEvent(new CustomEvent<boolean>(THEME_CHANGE_EVENT, { detail: isDark }));
  try {
    localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
  } catch {
    // Storage blocked: the theme still applies for this visit.
  }
}
