import { BreadcrumbJsonLd } from "@/components/layout/BreadcrumbJsonLd";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { GalleryGrid, type GalleryItem } from "@/components/sections/GalleryGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Galerie institutionnelle",
  description:
    "Galerie institutionnelle de la P.I.G : événements, gouvernance, portraits et interventions visuelles.",
  path: "/galerie",
});

const galleryItems: GalleryItem[] = [
  {
    src: "/images/galerie/siege-national-cadres-minat-2024.jpg",
    alt: "Séance photo institutionnelle au siège national avec les cadres du MINAT",
    category: "Institution",
    title: "Séance au siège national avec les cadres du MINAT",
  },
  {
    src: "/images/galerie/protection-consommateurs-terrain.jpg",
    alt: "Mission de protection des consommateurs",
    category: "Interventions",
    title: "Mission de protection des consommateurs",
  },
  {
    src: "/images/galerie/suivi-minat-2024-1.jpg",
    alt: "Mission de suivi institutionnel par les cadres du MINAT",
    category: "Coordination",
    title: "Mission de suivi institutionnel 2024",
  },
  {
    src: "/images/galerie/suivi-minat-2024-2.jpg",
    alt: "Mission de suivi institutionnel par les cadres du MINAT",
    category: "Coordination",
    title: "Mission de suivi institutionnel 2024, vue complémentaire",
  },
  {
    src: "/images/galerie/delegue-regional-ouest-jean-paul-jomgang.jpg",
    alt: "Délégué régional de l’Ouest",
    category: "Organisation",
    title: "Délégué régional de l’Ouest",
  },
  {
    src: "/images/galerie/delegue-regional-littoral-fabrice-mogoue.jpg",
    alt: "Délégué régional du Littoral",
    category: "Organisation",
    title: "Délégué régional du Littoral",
  },
  {
    src: "/images/galerie/chargee-relations-publiques-simone-daniella-yaker.jpg",
    alt: "Chargée des relations publiques de la P.I.G",
    category: "Portraits",
    title: "Chargée des relations publiques",
    fit: "contain",
  },
  {
    src: "/images/galerie/premier-haut-commissaire-nebot-etienne.jpg",
    alt: "Premier Haut Commissaire Général NEBOT Etienne",
    category: "Historique",
    title: "Premier Haut Commissaire Général",
    fit: "contain",
  },
  {
    src: "/images/galerie/trois-premiers-hauts-commissaires-1998-2024.jpg",
    alt: "Trois premiers hauts commissaires de la P.I.G",
    category: "Historique",
    title: "Repères historiques des hauts commissaires",
    fit: "contain",
  },
  ...Array.from({ length: 7 }, (_, index) => ({
    src: `/images/galerie/reunion-strategique-2025-${index + 1}.jpg`,
    alt: "Réunion stratégique des responsables de la P.I.G",
    category: "Gouvernance",
    title: `Réunion stratégique 2025 - vue ${index + 1}`,
  })),
  ...Array.from({ length: 7 }, (_, index) => ({
    src: `/images/galerie/inauguration-siege-baham-${index + 1}.jpg`,
    alt: "Inauguration du nouveau siège national à Baham",
    category: "Événements",
    title: `Inauguration du siège national à Baham - vue ${index + 1}`,
  })),
];

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Galerie", path: "/galerie" },
        ]}
      />
      <ImageBanner
        image="/images/actualites/reunion-strategique-2025-2.jpg"
        title="Galerie institutionnelle"
        description="Un espace visuel sobre pour parcourir les portraits, les temps forts et les scènes institutionnelles documentés dans le dossier source."
      />
      <section className="section-shell">
        <SectionHeading
          eyebrow="Galerie"
          title="Images classées par catégories pour préserver leur cohérence documentaire"
          description="Les filtres permettent de distinguer gouvernance, événements, interventions, portraits et représentations organisationnelles."
        />
        <div className="mt-12">
          <GalleryGrid items={galleryItems} />
        </div>
      </section>
    </>
  );
}
