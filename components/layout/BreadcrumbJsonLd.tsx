import Script from "next/script";
import { jsonLd } from "@/lib/metadata";
import { siteConfig } from "@/content/site";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type BreadcrumbJsonLdProps = {
  items: BreadcrumbItem[];
};

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  return (
    <Script
      id={`breadcrumb-${items.map((item) => item.path).join("-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLd({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: new URL(item.path, siteConfig.url).toString(),
          })),
        }),
      }}
    />
  );
}
