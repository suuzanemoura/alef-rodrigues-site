import { notion } from "@/lib/notion";
import {
  getCheckbox,
  getNumber,
  getRichText,
  getTitle,
  getUrl,
  isFullPage,
} from "@/lib/notion-utils";

export default async function LinksPage() {
  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_LINKS_BUTTONS_DB!,
  });

  const links = response.results
    .filter(isFullPage)
    .map((item) => {
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

  console.log(activeLinks);

  return (
    <main>
      <h1>Links</h1>

      <ul>
        {activeLinks.map((link) => (
          <li key={link.title}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <strong>{link.title}</strong>
              <span>{link.description}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}