import type { Metadata, Viewport } from "next";
import { Bebas_Neue, PT_Sans } from "next/font/google";
import "./globals.scss";

export const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const ptSans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pt-sans",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_URL ??
  "http://localhost:3000";

const metadataBase = new URL(
  siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`,
);

export const metadata: Metadata = {
  metadataBase,

  title: {
    default: "Alef Rodrigues | Nutricionista",
    template: "%s | Alef Rodrigues",
  },

  description:
    "Nutricionista com foco em emagrecimento, ganho de massa muscular e estratégias nutricionais personalizadas.",

  keywords: [
    "nutricionista",
    "emagrecimento",
    "ganho de massa",
    "nutrição esportiva",
    "reeducação alimentar",
    "consulta nutricional",
  ],

  authors: [
    {
      name: "Alef Rodrigues",
    },
  ],

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Alef Rodrigues | Nutricionista",
    description:
      "Consultas nutricionais com foco em emagrecimento e ganho de massa muscular.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alef Rodrigues",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#FFFFFF",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#051735",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bebasNeue.variable} ${ptSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
