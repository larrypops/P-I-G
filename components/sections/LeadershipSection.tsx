import Image from "next/image";
import { bureauMembers, directionGeneral, governance } from "@/content/organisation";
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
          <div className="relative min-h-[16rem] bg-surface p-4 sm:min-h-[22rem]">
            <Image
              src="/images/leadership/trois-premiers-hauts-commissaires-1998-2024.jpg"
              alt="Repères historiques des hauts commissaires de la P.I.G"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="grid gap-6">
          {directionGeneral.map((leader) => (
            <article
              key={`${leader.position}-${leader.name}`}
              className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-soft"
            >
              <div className="grid gap-5 p-5 sm:p-7 md:grid-cols-[10rem_1fr] md:items-center">
                <div className="relative h-56 overflow-hidden rounded-[1.5rem] border border-border bg-surface md:h-48">
                  {leader.image ? (
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-contain md:object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center p-5">
                      <Image
                        src="/images/logo/pig-embleme-or.jpg"
                        alt="Emblème de la P.I.G en attente du portrait officiel"
                        width={110}
                        height={94}
                        className="h-auto w-24 object-contain opacity-90"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                    {leader.title}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-semibold text-ink">
                    {leader.name}
                  </h3>
                  <p className="mt-2 text-base font-medium text-ink">{leader.position}</p>
                  <p className="mt-4 leading-7 text-muted">{leader.description}</p>
                </div>
              </div>
            </article>
          ))}
          <article className="rounded-[2rem] border border-border bg-surface p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Bureau exécutif
            </p>
            <p className="mt-3 leading-7 text-muted">
              Les membres du bureau sont définis dans le fichier JSON de gouvernance et
              peuvent être complétés avec leur nom, leur poste, leur description et leur photo.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {bureauMembers.slice(0, 6).map((member) => (
                <article
                  key={`${member.priority ?? 999}-${member.position}-${member.name}`}
                  className="rounded-2xl border border-border bg-white p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                    {member.title}
                  </p>
                  <h4 className="mt-2 text-base font-semibold text-ink">{member.name}</h4>
                  <p className="mt-1 text-sm font-medium text-ink">{member.position}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{member.description}</p>
                </article>
              ))}
            </div>
          </article>
        </div>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-border bg-white p-7 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Bureau étendu
          </p>
          <div className="mt-5 grid gap-4">
            {bureauMembers.slice(6).map((member) => (
              <div
                key={`${member.priority ?? 999}-${member.position}-${member.name}-extended`}
                className="grid gap-4 rounded-2xl border border-border bg-surface p-4 md:grid-cols-[4.5rem_1fr] md:items-center"
              >
                <div className="relative h-28 overflow-hidden rounded-2xl border border-border bg-white md:h-[4.5rem]">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain md:object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center p-2">
                      <Image
                        src="/images/logo/pig-embleme-or.jpg"
                        alt="Emblème de la P.I.G"
                        width={48}
                        height={40}
                        className="h-auto w-10 object-contain opacity-90"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-ink">{member.name}</h4>
                  <p className="mt-1 text-sm font-medium text-ink">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
        <article className="rounded-[2rem] border border-border bg-white p-7 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Représentation territoriale
          </p>
          <div className="mt-5 grid gap-4">
            {governance.territorialRepresentation.map((delegate) => (
              <div
                key={delegate.name}
                className="grid gap-4 rounded-2xl border border-border bg-surface p-4 md:grid-cols-[5rem_1fr] md:items-center"
              >
                <div className="relative h-28 overflow-hidden rounded-2xl border border-border bg-white md:h-20">
                  <Image src={delegate.image} alt={delegate.name} fill className="object-contain" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-ink">{delegate.name}</h4>
                  <p className="mt-1 text-sm font-medium text-ink">{delegate.role}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
