import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/layout/BreadcrumbJsonLd";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { OrgChartSection } from "@/components/sections/OrgChartSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { governance } from "@/content/organisation";
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
      />
      <LeadershipSection />
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
              <div className="relative h-80">
                <Image src={person.image} alt={person.name} fill className="object-cover" />
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
