import { BreadcrumbJsonLd } from "@/components/layout/BreadcrumbJsonLd";
import { NewsCard } from "@/components/cards/NewsCard";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { actionDomains, featuredActions } from "@/content/actions";
import { MissionCard } from "@/components/cards/MissionCard";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Actions et domaines d’intervention",
  description:
    "Domaines d’intervention de la P.I.G : humanitaire, protection des consommateurs, investigations, inspections, secours, environnement et gouvernance.",
  path: "/actions",
});

export default function ActionsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Actions", path: "/actions" },
        ]}
      />
      <ImageBanner
        image="/images/actions/protection-consommateurs-terrain.jpg"
        title="Des domaines d’intervention ancrés dans le terrain et la responsabilité"
        description="Les actions documentées dans le dossier montrent une organisation présente sur la prévention, la coordination, la protection et l’encadrement institutionnel."
      />
      <section className="section-shell">
        <SectionHeading
          eyebrow="Domaines d’intervention"
          title="Une action publique plurielle entre prévention, contrôle et assistance"
          description="Les champs ci-dessous synthétisent les domaines explicitement mentionnés dans la documentation source."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {actionDomains.map((domain) => (
            <MissionCard
              key={domain.title}
              title={domain.title}
              description={domain.description}
              image={domain.image}
            />
          ))}
        </div>
      </section>
      <section className="section-shell">
        <SectionHeading
          eyebrow="Cas illustratifs"
          title="Exemples visuels d’interventions et de coordination"
          description="Les cartes suivantes utilisent les images les plus explicites du dossier pour illustrer des actions cohérentes avec leur contexte."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {featuredActions.map((item) => (
            <NewsCard
              key={item.title}
              category={item.category}
              title={item.title}
              summary={item.summary}
              image={item.image}
            />
          ))}
        </div>
      </section>
    </>
  );
}
