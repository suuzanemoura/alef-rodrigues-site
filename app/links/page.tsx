import { getLinks } from "@/service/links";
import { Header } from "@/app/components/links/Header";
import { getLinksSettings } from "@/service/linksSettings";
import { ThemeToggle } from "../components/links/ThemeToggle";
import { LinkButton } from "../components/links/LinkButton";
export { generateMetadata } from "./metadata";
import { isInstagramBrowser } from "@/lib/isInstagramBrowser";
import { headers } from "next/headers";

export const revalidate = 60;

type LinksPageProps = {
  searchParams?: Promise<{
    utm_source?: string | string[];
  }>;
};

export default async function LinksPage({ searchParams }: LinksPageProps) {
  const settings = await getLinksSettings();
  const links = await getLinks();
  const ua = (await headers()).get("user-agent") ?? undefined;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const utmSource = Array.isArray(resolvedSearchParams?.utm_source)
    ? resolvedSearchParams?.utm_source[0]
    : resolvedSearchParams?.utm_source;
  const isInstagram =
    isInstagramBrowser(ua) || utmSource?.toLowerCase() === "ig";

  const filteredLinks = (links ?? []).filter((link) => {
    return !(isInstagram && link.icon === "instagram");
  });

  return (
    <main className="relative min-h-dvh bg-gradient-to-br from-[#d1dbed] to-[#e0e9ef] text-foreground dark:bg-background flex flex-col items-center w-full dark:bg-gradient-to-br dark:from-secondary-hover dark:via-secondary dark:to-secondary-dark bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 w-full h-full bg-[url(/bg-pattern.svg)] bg-cover bg-center bg-no-repeat mix-blend-screen dark:mix-blend-overlay" />

      <ThemeToggle />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[380px] bg-gradient-to-b from-brand-secondary to-transparent dark:opacity-30" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl dark:bg-primary/15" />

      <Header
        title={settings?.title}
        subtitle={settings?.subtitle}
        description={settings?.description}
        avatar={settings?.avatar}
      />

      <nav
        aria-label="Links principais"
        className="mx-auto w-full px-5 max-w-[440px] mt-9 mb-8"
      >
        <ul className="flex flex-col gap-4">
          {(filteredLinks ?? []).map((link) => (
            <LinkButton key={link.id} link={link} />
          ))}
        </ul>
      </nav>

      <footer className="mt-auto  flex flex-col items-center gap-4 pb-8">
        <p className="text-xs tracking-wide text-secondary/90 dark:text-neutral-400">
          © {new Date().getFullYear()} Alef Rodrigues · CRN 19100552
        </p>
      </footer>
    </main>
  );
}
