import { getLinksSettings } from "../../service/linksSettings";

export async function generateMetadata() {
  const settings = await getLinksSettings();

  const seoTitle = settings?.seoTitle ?? "Links | Alef Rodrigues";

  const seoDescription =
    settings?.seoDescription ??
    "Consultas, atendimento, redes sociais e conteúdos do Alef Rodrigues.";

  const openGraphTitle = settings?.openGraphTitle ?? "Links | Alef Rodrigues";

  return {
    title: seoTitle,

    description: seoDescription,

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: openGraphTitle,
      description: seoDescription,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Links Alef Rodrigues",
        },
      ],
    },
  };
}
