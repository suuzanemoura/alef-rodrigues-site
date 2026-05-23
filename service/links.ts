import { notion } from "@/lib/notion";
import {
  getCheckbox,
  getNumber,
  getRichText,
  getTitle,
  getUrl,
  isFullPage,
} from "../lib/notion-utils";

export async function getLinks() {
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
      title: getTitle(properties["Título"]),
      description: getRichText(properties["Descrição"]),
      url: getUrl(properties["URL"]),
      icon: getRichText(properties["Ícone"]),
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
