import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata:Metadata = {
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
