import { Phone, Mail, MapPin } from "lucide-react";
import { contacts } from "@/content/contacts";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading
        eyebrow="Contacts"
        title="Des points de contact clairs pour les échanges institutionnels"
        description="Les bureaux de référence facilitent l’orientation des demandes, les prises de contact et la coordination des informations."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-[2rem] bg-[#0d1e36] p-8 text-white shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            {contacts.headquarters.title}
          </p>
          <h3 className="mt-3 font-display text-3xl font-semibold">
            {contacts.headquarters.contact}
          </h3>
          <p className="mt-2 text-base text-white/80">{contacts.headquarters.role}</p>
          <p className="mt-5 leading-7 text-white/80">{contacts.headquarters.note}</p>
        </article>
        <div className="grid gap-6">
          {contacts.offices.map((office) => (
            <article
              key={office.name}
              className="rounded-[2rem] border border-border bg-white p-7 shadow-soft"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                {office.name}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                {office.contact}
              </h3>
              <p className="mt-1 text-muted">{office.role}</p>
              <div className="mt-5 space-y-3 text-sm text-ink">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-secondary" />
                  <span>{office.address}</span>
                </p>
                <p className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-secondary" />
                  <span>{office.phone}</span>
                </p>
                <p className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-secondary" />
                  <span>{office.email}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
