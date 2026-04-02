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
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {directionGeneral.map((leader) => (
          <article
            key={`${leader.position}-${leader.name}`}
            className="overflow-hidden rounded-[2.25rem] border border-border bg-white shadow-soft"
          >
            <div className="relative aspect-[3/4] bg-surface p-5 sm:aspect-[4/5] md:p-6">
              {leader.image ? (
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-contain"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <Image
                    src="/images/logo/pig-embleme-or.jpg"
                    alt="Emblème de la P.I.G en attente du portrait officiel"
                    width={170}
                    height={144}
                    className="h-auto w-32 object-contain opacity-90 sm:w-40"
                  />
                </div>
              )}
            </div>
            <div className="border-t border-border px-6 py-6 sm:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                {leader.title}
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                {leader.name}
              </h3>
              <p className="mt-2 text-base font-medium text-ink sm:text-lg">{leader.position}</p>
              <p className="mt-4 leading-7 text-muted">{leader.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-10">
        <article className="rounded-[2rem] border border-border bg-white p-7 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Bureau exécutif
          </p>
          <h3 className="mt-3 font-display text-3xl font-semibold text-ink">
            Un bureau structuré autour des fonctions de coordination et d’appui
          </h3>
          <p className="mt-3 max-w-3xl leading-7 text-muted">
            Les membres du bureau sont définis dans le fichier JSON de gouvernance et
            peuvent être complétés avec leur nom, leur poste, leur description et leur photo.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {bureauMembers.map((member) => (
              <article
                key={`${member.priority ?? 999}-${member.position}-${member.name}`}
                className="overflow-hidden rounded-[1.75rem] border border-border bg-surface"
              >
                <div className="relative aspect-[3/4] bg-white p-4">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Image
                        src="/images/logo/pig-embleme-or.jpg"
                        alt="Emblème de la P.I.G"
                        width={120}
                        height={102}
                        className="h-auto w-24 object-contain opacity-90"
                      />
                    </div>
                  )}
                </div>
                <div className="border-t border-border p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                    {member.title}
                  </p>
                  <h4 className="mt-2 text-lg font-semibold text-ink">{member.name}</h4>
                  <p className="mt-1 text-sm font-medium text-ink">{member.position}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </article>

        <article className="rounded-[2rem] border border-border bg-white p-7 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Représentation territoriale
          </p>
          <h3 className="mt-3 font-display text-3xl font-semibold text-ink">
            Des relais régionaux identifiés dans le dossier visuel
          </h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {governance.territorialRepresentation.map((delegate) => (
              <article
                key={delegate.name}
                className="overflow-hidden rounded-[1.75rem] border border-border bg-surface"
              >
                <div className="relative aspect-[3/4] bg-white p-4">
                  <Image src={delegate.image} alt={delegate.name} fill className="object-contain" />
                </div>
                <div className="border-t border-border p-5">
                  <h4 className="text-lg font-semibold text-ink">{delegate.name}</h4>
                  <p className="mt-1 text-sm font-medium text-ink">{delegate.role}</p>
                </div>
              </article>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
