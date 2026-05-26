"use client";

import { useTheme } from "@/providers/ThemeProvider";

export function ThemeScope({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();

  return (
    <div className={resolvedTheme === "dark" ? "dark" : ""}>{children}</div>
  );
}
