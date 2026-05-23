import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#020a1f] via-secondary to-[#03102a]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-3xl animate-pulse"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-primary/15 blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      ></div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16">
        <section className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_8px_40px_-12px_rgba(35,178,249,0.25)] backdrop-blur-xl sm:p-12 animate-[fade-in_0.5s_ease-out]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.08] to-transparent"
          ></div>
          <div className="relative flex flex-col">
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#0a3a6e] shadow-lg shadow-primary/30 ring-1 ring-white/10">
                <Image
                  src="/favicon-32x32.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="mix-blend-darken"
                />
              </div>
              <div className="text-center">
                <p className="text-base font-semibold tracking-wide text-white">
                  Alef Rodrigues
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-primary/70">
                  Nutricionista Esportivo
                </p>
              </div>
            </div>

            <span className="mt-6 inline-flex items-center gap-2 self-center rounded-full border border-primary/30 bg-white/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur animate-[fade-in_0.6s_ease-out]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Em breve
            </span>

            <h1 className="mt-6 text-center text-4xl text-white sm:text-5xl md:text-6xl animate-[fade-in_0.7s_ease-out]">
              Site em{" "}
              <span className="bg-gradient-to-r from-primary to-[#7ad4ff] bg-clip-text text-transparent">
                desenvolvimento
              </span>
            </h1>

            <p className="mx-auto max-w-xl text-center text-base leading-relaxed text-white/80 sm:text-lg animate-[fade-in_0.9s_ease-out]">
              Enquanto isso, acesse meus canais e informações principais.
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 animate-[fade-in_1.1s_ease-out]">
              <Link
                href="/links"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-primary to-[#0a3a6e] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] active:scale-100"
              >
                Acessar página de links
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-10 text-center text-xs text-white/70 animate-[fade-in_1.3s_ease-out]">
          © {new Date().getFullYear()} Alef Rodrigues · Nutricionista
        </footer>
      </div>
    </main>
  );
}
