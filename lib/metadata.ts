import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.ogImage,
}: MetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: new URL(image, siteConfig.url).toString(),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL(image, siteConfig.url).toString()],
    },
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data);
}
