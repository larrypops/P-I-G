import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { jsonLd } from "@/lib/metadata";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} | Organisation institutionnelle internationale`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.shortName,
  category: "institutionnel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.legalName,
              alternateName: siteConfig.shortName,
              url: siteConfig.url,
              logo: new URL("/images/logo/pig-embleme-or.jpg", siteConfig.url).toString(),
              foundingDate: siteConfig.foundingDate,
              slogan: siteConfig.slogan,
              areaServed: "International",
              description: siteConfig.description,
            }),
          }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteConfig.legalName,
              url: siteConfig.url,
              inLanguage: "fr",
              description: siteConfig.description,
            }),
          }}
        />
        <div className="relative min-h-screen bg-institutional-grid bg-grid">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
