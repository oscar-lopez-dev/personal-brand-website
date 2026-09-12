import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { I18nProvider } from "@/i18n/context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const SITE_TITLE = "Oscar López Martínez | Fullstack to AI Engineer";
const SITE_DESCRIPTION =
  "Bridging robust .NET enterprise backend architectures with modern TypeScript, React, and applied AI systems.";
const SITE_URL = "https://oscarlopez.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Oscar López Martínez",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_ES",
    url: SITE_URL,
    siteName: "Oscar López Martínez",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/avatar.jpg",
        width: 1024,
        height: 1024,
        alt: "Oscar López Martínez - Fullstack to AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/avatar.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-brand-background text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
