import Script from "next/script";
import { BreadcrumbJsonLd } from "@/components/layout/BreadcrumbJsonLd";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { NewsCard } from "@/components/cards/NewsCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { jsonLd, createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site";

export const metadata = createPageMetadata({
  title: "Actualités et interventions",
  description:
    "Temps forts institutionnels, réunions stratégiques, inaugurations et activités de terrain de la P.I.G.",
  path: "/actualites",
});

const newsItems = [
  {
    title: "Inauguration du nouveau siège national à Baham",
    category: "Événement institutionnel",
    summary:
      "Une séquence visuelle consacrée à l’inauguration du nouveau siège national, illustrant la visibilité publique et l’ancrage institutionnel de l’organisation.",
    image: "/images/actualites/inauguration-siege-baham-1.jpg",
  },
  {
    title: "Réunion stratégique des responsables en 2025",
    category: "Gouvernance",
    summary:
      "Des sessions de travail interne ont permis de consolider l’orientation opérationnelle, la coordination et le suivi des priorités.",
    image: "/images/actualites/reunion-strategique-2025-1.jpg",
  },
  {
    title: "Séance institutionnelle au siège national avec les cadres du MINAT",
    category: "Coordination",
    summary:
      "La documentation visuelle témoigne d’un cadre de dialogue et de représentation au sein du siège national en 2024.",
    image: "/images/hero/siege-national-cadres-minat-2024.jpg",
  },
];

export default function NewsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Actualités", path: "/actualites" },
        ]}
      />
      <Script
        id="actualites-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@graph": newsItems.map((item) => ({
              "@type": "Article",
              headline: item.title,
              description: item.summary,
              image: new URL(item.image, siteConfig.url).toString(),
              publisher: {
                "@type": "Organization",
                name: siteConfig.legalName,
              },
            })),
          }),
        }}
      />
      <ImageBanner
        image="/images/actualites/inauguration-siege-baham-2.jpg"
        title="Actualités, événements marquants et vie institutionnelle"
        description="Cette page met en récit les images les plus contextualisées du dossier à travers une lecture éditoriale institutionnelle et prudente."
      />
      <section className="section-shell">
        <SectionHeading
          eyebrow="Éditorial institutionnel"
          title="Des séquences visuelles qui racontent la présence, la coordination et l’activité"
          description="Les actualités sont construites à partir des intitulés d’origine des dossiers images afin de préserver la cohérence documentaire."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {newsItems.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </div>
      </section>
      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-border bg-white p-8 shadow-soft">
            <h2 className="font-display text-3xl font-semibold text-ink">
              Réunion stratégique
            </h2>
            <p className="mt-5 leading-8 text-muted">
              Les vues de réunion stratégique sont employées pour illustrer les dynamiques
              de coordination, de réflexion et de conduite institutionnelle. Elles appuient
              la crédibilité d’un site sérieux sans surinterpréter des situations précises.
            </p>
          </article>
          <article className="rounded-[2rem] border border-border bg-surface p-8">
            <h2 className="font-display text-3xl font-semibold text-ink">
              Inauguration et visibilité publique
            </h2>
            <p className="mt-5 leading-8 text-muted">
              Les visuels liés au siège national à Baham nourrissent une narration
              institutionnelle autour de l’implantation, de l’accueil et de la projection
              publique de l’organisation.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
