import { governance } from "@/content/organisation";
import { SectionHeading } from "@/components/ui/SectionHeading";

type SpecializedCouncilsSectionProps = {
  compact?: boolean;
};

export function SpecializedCouncilsSection({
  compact = false,
}: SpecializedCouncilsSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading
        eyebrow="Conseils spécialisés"
        title="Des organes spécialisés au service de l’expertise, de l’orientation et de la coordination"
        description="Ces conseils renforcent la capacité d’analyse, d’accompagnement et de réponse de la P.I.G sur des enjeux juridiques, scientifiques, sociaux, environnementaux et stratégiques."
      />
      <div
        className={
          compact
            ? "mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            : "mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        }
      >
        {governance.specializedOrgans.map((council, index) => (
          <article
            key={council}
            className="rounded-[1.75rem] border border-border bg-white p-6 shadow-soft"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface text-sm font-semibold text-secondary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                Conseil
              </p>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
              {council}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
