import { governance } from "@/content/organisation";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function OrgChartSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading
        eyebrow="Organisation"
        title="Une architecture institutionnelle structurée par organes, départements et services"
        description="La P.I.G combine gouvernance, expertise spécialisée et chaîne hiérarchique claire afin d’assurer lisibilité, efficacité et responsabilité."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-border bg-white p-7 shadow-soft">
          <h3 className="font-display text-2xl font-semibold text-ink">Organes de gouvernance</h3>
          <div className="mt-5 grid gap-3">
            {governance.organs.map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-surface px-4 py-3">
                {item}
              </div>
            ))}
          </div>
          <h4 className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Organes spécialisés
          </h4>
          <div className="mt-4 grid gap-3">
            {governance.specializedOrgans.map((item) => (
              <div key={item} className="rounded-2xl border border-border px-4 py-3">
                {item}
              </div>
            ))}
          </div>
        </article>
        <article className="rounded-[2rem] border border-border bg-white p-7 shadow-soft">
          <h3 className="font-display text-2xl font-semibold text-ink">Départements et services</h3>
          <div className="mt-5 space-y-4">
            {governance.departments.map((department) => (
              <div key={department.title} className="rounded-2xl border border-border bg-surface p-5">
                <p className="font-semibold text-ink">{department.title}</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                  {department.services.map((service) => (
                    <li key={service}>• {service}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </div>
      <div className="mt-8 rounded-[2rem] border border-border bg-white p-7 shadow-soft">
        <h3 className="font-display text-2xl font-semibold text-ink">Hiérarchie opérationnelle</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {governance.hierarchy.map((group) => (
            <div key={group.title} className="rounded-2xl border border-border bg-surface p-5">
              <p className="font-semibold text-ink">{group.title}</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                {group.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
