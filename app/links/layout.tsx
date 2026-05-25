import { ThemeProvider } from "@/providers/ThemeProvider";
import getLinksSettings from "@/service/linksSettings";

export default async function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getLinksSettings();

  return (
    <ThemeProvider defaultTheme={settings?.theme ?? "dark"}>
      {children}
    </ThemeProvider>
  );
}
