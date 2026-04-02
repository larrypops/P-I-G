import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/layout/BreadcrumbJsonLd";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { OrgChartSection } from "@/components/sections/OrgChartSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bureauMembers, governance } from "@/content/organisation";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Organisation",
  description:
    "Direction générale, organes, départements, hiérarchie et représentation territoriale de la P.I.G.",
  path: "/organisation",
});

export default function OrganisationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Organisation", path: "/organisation" },
        ]}
      />
      <ImageBanner
        image="/images/leadership/trois-premiers-hauts-commissaires-1998-2024.jpg"
        title="Une gouvernance institutionnelle lisible et progressive"
        description="La P.I.G articule sa direction générale, ses organes, ses départements et sa hiérarchie autour d’un cadre structuré et identifiable."
        imageFit="contain"
      />
      <LeadershipSection />
      <section className="section-shell">
        <SectionHeading
          eyebrow="Bureau exécutif"
          title="Tous les membres du bureau peuvent être administrés depuis un seul fichier JSON"
          description="Cette grille reprend les membres déclarés dans la source de données de gouvernance. Il suffit d’y renseigner le nom, le titre, le poste, la description et l’image."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {bureauMembers.map((member) => (
            <article
              key={`${member.priority ?? 999}-${member.position}-${member.name}-organisation`}
              className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-soft"
            >
              <div className="relative h-72 bg-surface p-4">
                {member.image ? (
                  <Image src={member.image} alt={member.name} fill className="object-contain" />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Image
                      src="/images/logo/pig-embleme-or.jpg"
                      alt="Emblème de la P.I.G en attente du portrait officiel"
                      width={124}
                      height={106}
                      className="h-auto w-28 object-contain opacity-90"
                    />
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                  {member.title}
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
                  {member.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-ink">{member.position}</p>
                <p className="mt-4 leading-7 text-muted">{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <OrgChartSection />
      <TimelineSection />
      <section className="section-shell">
        <SectionHeading
          eyebrow="Représentation"
          title="Présences régionales mises en avant dans le dossier visuel"
          description="Les portraits ci-dessous sont utilisés avec prudence comme repères de représentation régionale explicitement nommés dans le dossier source."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {governance.territorialRepresentation.map((person) => (
            <article
              key={person.name}
              className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-soft"
            >
              <div className="relative h-80 bg-surface p-4">
                <Image src={person.image} alt={person.name} fill className="object-contain" />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                  {person.role}
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
                  {person.name}
                </h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
