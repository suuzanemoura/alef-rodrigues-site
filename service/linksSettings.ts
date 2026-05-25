import { notion } from "@/lib/notion";
import { getRichText, getSelect, isFullPage } from "../lib/notion-utils";

type Theme = "light" | "dark" | "system";

export interface LinksSettings {
  title: string;
  subtitle: string;
  description: string;
  avatar: string;
  theme: Theme;
  seoTitle: string;
  seoDescription: string;
  openGraphTitle: string;
}

export async function getLinksSettings(): Promise<LinksSettings | null> {
  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_LINKS_SETTINGS_DB!,
  });

  const page = response.results.filter(isFullPage)[0];

  if (!page) {
    return null;
  }

  const properties = page.properties;

  const photoProperty =
    properties["Foto"]?.type === "files"
      ? properties["Foto"].files[0]
      : undefined;

  const avatar =
    photoProperty?.type === "file"
      ? photoProperty.file.url
      : photoProperty?.type === "external"
        ? photoProperty.external.url
        : "";

  return {
    title: getRichText(properties["Título"]),
    subtitle: getRichText(properties["Subtítulo"]),
    description: getRichText(properties["Descrição"]),
    avatar,
    theme: getSelect(properties["Tema"], "dark") as Theme,
    seoTitle: getRichText(properties["SEO Título"]),

    seoDescription: getRichText(properties["SEO Descrição"]),
    openGraphTitle: getRichText(properties["Open Graph Título"]),
  };
}

export default getLinksSettings;
