import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";
import { missions } from "@/content/missions";
import { featuredActions } from "@/content/actions";
import { MissionCard } from "@/components/cards/MissionCard";
import { ValueCard } from "@/components/cards/ValueCard";
import { StatCard } from "@/components/cards/StatCard";
import { NewsCard } from "@/components/cards/NewsCard";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { CTASection } from "@/components/sections/CTASection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Accueil",
  description:
    "Présentation institutionnelle de la Police Internationale d’Intervention Générale : missions, valeurs, gouvernance et actions prioritaires.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Présentation"
            title="Une organisation active, structurée et engagée pour l’intérêt général"
            description={siteConfig.quickPresentation.join(" ")}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {siteConfig.stats.map((stat) => (
              <RevealOnScroll key={stat.label}>
                <StatCard value={stat.value} label={stat.label} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      <section className="section-shell">
        <SectionHeading
          eyebrow="Missions clés"
          title="Des interventions orientées vers la protection, la veille et l’assistance"
          description="La P.I.G agit sur plusieurs champs complémentaires pour répondre aux enjeux humains, sociaux, institutionnels et sécuritaires."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {missions.slice(0, 3).map((mission, index) => (
            <RevealOnScroll key={mission.slug} delay={index * 0.08}>
              <MissionCard {...mission} />
            </RevealOnScroll>
          ))}
        </div>
      </section>
      <section className="section-shell">
        <SectionHeading
          eyebrow="Valeurs fondamentales"
          title="Un socle institutionnel fondé sur la dignité, l’équité et la responsabilité"
          description="La lisibilité de l’action publique et la confiance reposent sur des principes clairs, appliqués dans les pratiques et les missions."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {siteConfig.values.map((value, index) => (
            <RevealOnScroll key={value.title} delay={index * 0.06}>
              <ValueCard {...value} />
            </RevealOnScroll>
          ))}
        </div>
      </section>
      <LeadershipSection />
      <TimelineSection />
      <section className="section-shell">
        <SectionHeading
          eyebrow="Interventions mises en avant"
          title="Des actions récentes illustrant le terrain, la coordination et la gouvernance"
          description="Les images disponibles documentent des séquences institutionnelles utiles pour comprendre l’activité de la P.I.G."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {featuredActions.map((item, index) => (
            <RevealOnScroll key={item.title} delay={index * 0.08}>
              <NewsCard
                category={item.category}
                title={item.title}
                summary={item.summary}
                image={item.image}
              />
            </RevealOnScroll>
          ))}
        </div>
      </section>
      <CTASection
        title="Besoin d’un point de contact institutionnel ?"
        description="Accédez aux bureaux de référence, aux informations de coordination et aux contacts clés de la P.I.G."
        primaryHref="/contact"
        primaryLabel="Voir les contacts"
        secondaryHref="/a-propos"
        secondaryLabel="Comprendre l’organisation"
      />
    </>
  );
}
