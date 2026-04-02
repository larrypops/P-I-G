import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/layout/BreadcrumbJsonLd";
import { ContactCards } from "@/components/sections/ContactCards";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contacts et bureaux de référence de la P.I.G en France et au Cameroun, avec repères de direction générale.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <ImageBanner
        image="/images/contacts/chargee-relations-publiques-simone-daniella-yaker.jpg"
        title="Contacts institutionnels et bureaux de référence"
        description="Une page de contact rassurante et claire, structurée autour des bureaux, de la direction générale et des canaux disponibles."
      />
      <ContactCards />
      <section className="section-shell">
        <SectionHeading
          eyebrow="Formulaire"
          title="Prise de contact"
          description="Ce formulaire est présenté côté interface pour préparer les échanges. Il peut être relié plus tard à un backend ou à un service d’email."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <form className="rounded-[2rem] border border-border bg-white p-8 shadow-soft">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-ink">
                Nom complet
                <input
                  type="text"
                  className="rounded-2xl border border-border bg-surface px-4 py-3 outline-none focus:border-secondary"
                  placeholder="Votre nom"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink">
                Email
                <input
                  type="email"
                  className="rounded-2xl border border-border bg-surface px-4 py-3 outline-none focus:border-secondary"
                  placeholder="nom@exemple.org"
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-medium text-ink">
              Sujet
              <input
                type="text"
                className="rounded-2xl border border-border bg-surface px-4 py-3 outline-none focus:border-secondary"
                placeholder="Objet de votre demande"
              />
            </label>
            <label className="mt-5 grid gap-2 text-sm font-medium text-ink">
              Message
              <textarea
                rows={6}
                className="rounded-[1.5rem] border border-border bg-surface px-4 py-3 outline-none focus:border-secondary"
                placeholder="Décrivez votre demande en quelques lignes."
              />
            </label>
            <button
              type="submit"
              className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white"
            >
              Envoyer la demande
            </button>
          </form>
          <article className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-soft">
            <div className="relative h-full min-h-[22rem]">
              <Image
                src="/images/organisation/delegue-regional-littoral-fabrice-mogoue.jpg"
                alt="Représentation institutionnelle de la P.I.G"
                fill
                className="object-cover"
              />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
