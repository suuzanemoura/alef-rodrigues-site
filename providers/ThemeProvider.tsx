"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = "links-theme";

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "dark";

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveTheme(theme: Theme): ResolvedTheme {
  return theme === "system" ? getSystemTheme() : theme;
}

export function ThemeProvider({
  children,
  defaultTheme,
}: {
  children: React.ReactNode;
  defaultTheme: Theme;
}) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return defaultTheme;
    }

    const storedTheme = window.localStorage.getItem(
      STORAGE_KEY,
    ) as Theme | null;

    if (
      storedTheme === "light" ||
      storedTheme === "dark" ||
      storedTheme === "system"
    ) {
      return storedTheme;
    }

    return defaultTheme;
  });

  const resolvedTheme = resolveTheme(theme);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme);

    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      setThemeState("system");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme: setThemeState,
    }),
    [theme, resolvedTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
