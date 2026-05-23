import { notion } from "@/lib/notion";
import { isFullPage } from "../lib/notion-utils";

export async function getLinksSettings() {
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
    title:
      properties["Título"]?.type === "rich_text"
        ? properties["Título"].rich_text[0]?.plain_text
        : "",

    subtitle:
      properties["Subtítulo"]?.type === "rich_text"
        ? properties["Subtítulo"].rich_text[0]?.plain_text
        : "",

    description:
      properties["Descrição"]?.type === "rich_text"
        ? properties["Descrição"].rich_text[0]?.plain_text
        : "",
    avatar,
    theme:
      properties["Tema"]?.type === "select"
        ? properties["Tema"].select?.name
        : "dark",
    seoTitle:
      properties["SEO Título"]?.type === "rich_text"
        ? properties["SEO Título"].rich_text[0]?.plain_text
        : "",

    seoDescription:
      properties["SEO Descrição"]?.type === "rich_text"
        ? properties["SEO Descrição"].rich_text[0]?.plain_text
        : "",
    openGraphTitle:
      properties["Open Graph Título"]?.type === "rich_text"
        ? properties["Open Graph Título"].rich_text[0]?.plain_text
        : "",
  };
}

export default getLinksSettings;
