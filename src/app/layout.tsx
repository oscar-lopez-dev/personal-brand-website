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

export const metadata: Metadata = {
  title: "Oscar López Martínez | Fullstack to AI Engineer",
  description:
    "Bridging robust .NET enterprise backend architectures with modern TypeScript, React, and applied AI systems.",
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
