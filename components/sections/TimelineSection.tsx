import { leadershipTimeline } from "@/content/timeline";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TimelineSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading
        eyebrow="Historique de gouvernance"
        title="Une continuité institutionnelle depuis 1998"
        description="La timeline des hauts commissaires éclaire la progression de la P.I.G, de sa fondation à sa gouvernance actuelle."
      />
      <div className="mt-12 space-y-6 border-l border-border pl-6">
        {leadershipTimeline.map((item) => (
          <article key={item.name} className="relative rounded-[2rem] border border-border bg-white p-6 shadow-soft">
            <span className="absolute -left-[2.15rem] top-8 h-4 w-4 rounded-full border-4 border-surface bg-secondary" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              {item.period}
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{item.name}</h3>
            <p className="mt-1 text-sm font-medium text-ink">{item.title}</p>
            <p className="mt-4 leading-7 text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
