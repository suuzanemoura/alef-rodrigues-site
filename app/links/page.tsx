import { getLinks } from "@/service/links";
import { getLinksSettings } from "@/service/linksSettings";

export default async function LinksPage() {
  const settings = await getLinksSettings();
  const activeLinks = await getLinks();

  return (
    <main>
      <h1>{settings?.title}</h1>
      <p>{settings?.subtitle}</p>
      <p>{settings?.description}</p>

      <ul>
        {(activeLinks ?? []).map((link) => (
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