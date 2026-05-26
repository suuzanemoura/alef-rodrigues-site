import { ThemeProvider } from "@/providers/ThemeProvider";
import { ThemeScope } from "@/providers/ThemeScope";
import getLinksSettings from "@/service/linksSettings";

export default async function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getLinksSettings();
  const theme = settings?.theme ?? "dark";

  return (
    <ThemeProvider defaultTheme={theme}>
      <ThemeScope>{children}</ThemeScope>
    </ThemeProvider>
  );
}
