import Image from "next/image";
import { governance } from "@/content/organisation";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LeadershipSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading
        eyebrow="Direction générale"
        title="Une gouvernance lisible, orientée vers la responsabilité et la coordination"
        description="La direction générale et le bureau exécutif structurent la vision, la représentation institutionnelle et le suivi des priorités opérationnelles."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-card">
          <div className="relative h-full min-h-[22rem] bg-surface p-4">
            <Image
              src="/images/leadership/trois-premiers-hauts-commissaires-1998-2024.jpg"
              alt="Repères historiques des hauts commissaires de la P.I.G"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="grid gap-6">
          {governance.leadership.map((leader) => (
            <article
              key={leader.name}
              className="rounded-[2rem] border border-border bg-white p-7 shadow-soft"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                {leader.role}
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-ink">
                {leader.name}
              </h3>
              <p className="mt-4 leading-7 text-muted">{leader.description}</p>
            </article>
          ))}
          <article className="rounded-[2rem] border border-border bg-surface p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Bureau exécutif
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {governance.executiveOffice.map((item) => (
                <p
                  key={item}
                  className="rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink"
                >
                  {item}
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
