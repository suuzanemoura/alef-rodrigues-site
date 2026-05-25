export default function Loading() {
  return (
    <main className="relative min-h-dvh w-full overflow-hidden bg-gradient-to-br from-[#d1dbed] to-[#e0e9ef] text-foreground dark:bg-background dark:bg-gradient-to-br dark:from-secondary-hover dark:via-secondary dark:to-secondary-dark">
      <div className="absolute inset-0 w-full h-full bg-[url(/bg-pattern.svg)] bg-cover bg-center bg-no-repeat mix-blend-screen opacity-70 dark:mix-blend-overlay dark:opacity-100" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[380px] bg-gradient-to-b from-brand-secondary to-transparent dark:opacity-30" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl dark:bg-primary/15" />
      <div className="absolute top-4 right-4 flex w-full justify-end">
        <div className="h-11 w-11 rounded-full border border-white/40 bg-white/40 shadow-sm backdrop-blur-md animate-pulse dark:border-white/10 dark:bg-white/5" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[440px] flex-col items-center px-5 pt-10 pb-8">
        <section className="flex w-full flex-col items-center text-center">
          <div className="h-28 w-28 rounded-full bg-white/50 shadow-xl ring-4 ring-white/40 animate-pulse dark:bg-white/10 dark:ring-white/10" />

          <div className="mt-6 h-8 w-56 rounded-full bg-white/60 animate-pulse dark:bg-white/10" />
          <div className="mt-3 h-4 w-40 rounded-full bg-white/50 animate-pulse dark:bg-white/10" />
          <div className="mt-4 h-24 w-full max-w-[320px] rounded-full bg-white/45 animate-pulse dark:bg-white/10" />
        </section>

        <nav aria-label="Carregando links principais" className="mt-9 w-full">
          <ul className="flex flex-col gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <li
                key={index}
                className="h-20 rounded-2xl border border-white/40 bg-white/55 shadow-lg backdrop-blur-md animate-pulse dark:border-white/10 dark:bg-white/5"
              />
            ))}
          </ul>
        </nav>

        <footer className="mt-auto flex flex-col items-center gap-4 pb-2 pt-8">
          <div className="h-3 w-52 rounded-full bg-white/45 animate-pulse dark:bg-white/10" />
        </footer>
      </div>
    </main>
  );
}
