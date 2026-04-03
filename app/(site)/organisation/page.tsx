import { BreadcrumbJsonLd } from "@/components/layout/BreadcrumbJsonLd";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { OrgChartSection } from "@/components/sections/OrgChartSection";
import { SpecializedCouncilsSection } from "@/components/sections/SpecializedCouncilsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
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
      <SpecializedCouncilsSection />
      <OrgChartSection />
      <TimelineSection />
    </>
  );
}
