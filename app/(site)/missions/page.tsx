import { MissionCard } from "@/components/cards/MissionCard";
import { CTASection } from "@/components/sections/CTASection";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { BreadcrumbJsonLd } from "@/components/layout/BreadcrumbJsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { missions } from "@/content/missions";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Missions",
  description:
    "Panorama des missions de la P.I.G : droits humains, renseignement, secours, médiation, protection des consommateurs et formation.",
  path: "/missions",
});

export default function MissionsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Missions", path: "/missions" },
        ]}
      />
      <ImageBanner
        image="/images/actions/suivi-minat-2024-1.jpg"
        title="Des missions complémentaires au service de l’intérêt général"
        description="Les activités de la P.I.G s’articulent entre prévention, intervention, accompagnement, expertise et diffusion d’une culture institutionnelle responsable."
      />
      <section className="section-shell">
        <SectionHeading
          eyebrow="Missions"
          title="Une action structurée autour de priorités institutionnelles claires"
          description="Chaque domaine répond à un besoin concret : protéger, documenter, former, secourir, prévenir ou rapprocher les parties."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {missions.map((mission) => (
            <MissionCard key={mission.slug} {...mission} />
          ))}
        </div>
      </section>
      <CTASection
        title="Explorer les domaines d’intervention"
        description="Les missions se traduisent sur le terrain par des actions de coordination, de contrôle, d’assistance et de présence institutionnelle."
        primaryHref="/actions"
        primaryLabel="Voir les actions"
        secondaryHref="/contact"
        secondaryLabel="Joindre un bureau"
      />
    </>
  );
}
