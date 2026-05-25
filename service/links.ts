import { notion } from "@/lib/notion";
import {
  getCheckbox,
  getNumber,
  getRichText,
  getTitle,
  getUrl,
  getSelect,
  isFullPage,
} from "../lib/notion-utils";

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description?: string;
  order: number;
  active: boolean;
  icon?: "nutrium" | "whatsapp" | "instagram" | "tiktok" | "info" | "default";
  featured?: boolean;
};

export async function getLinks(): Promise<LinkItem[] | null> {
  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_LINKS_BUTTONS_DB!,
  });

  const page = response.results.filter(isFullPage)[0];

  if (!page) {
    return null;
  }

  const links = response.results.filter(isFullPage).map((item) => {
    const properties = item.properties;

    return {
      id: item.id,
      title: getTitle(properties["Título"]),
      description: getRichText(properties["Descrição"]),
      url: getUrl(properties["URL"]),
      icon: getSelect(properties["Ícone"], "default") as LinkItem["icon"],
      order: getNumber(properties["Ordem"]),
      active: getCheckbox(properties["Ativo"]),
      featured: getCheckbox(properties["Destaque"]),
    };
  });

  const activeLinks = links
    .filter((link) => link.active)
    .sort((a, b) => a.order - b.order);

  return activeLinks;
}
