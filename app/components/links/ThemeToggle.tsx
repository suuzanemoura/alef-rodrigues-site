"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const mounted = useMounted();

  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) {
    return <div className="fixed right-4 top-4 h-10 w-10" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className="fixed right-4 top-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white/80 text-neutral-700 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-secondary dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:text-white cursor-pointer"
    >
      {isDark ? (
        <Sun className="h-[18px] w-[18px]" strokeWidth={2} />
      ) : (
        <Moon className="h-[18px] w-[18px]" strokeWidth={2} />
      )}
    </button>
  );
}
