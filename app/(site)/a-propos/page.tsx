import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { BreadcrumbJsonLd } from "@/components/layout/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "À propos",
  description:
    "Historique, cadre légal, reconnaissance institutionnelle et positionnement international de la P.I.G.",
  path: "/a-propos",
});

const recognitions = [
  "Nations Unies (HCDH/CDHD) : ADM/250/YNB/MO/20201/09 du 14 janvier 2009 à Yaoundé.",
  "Présidence de la République du Cameroun : B38/CAB/PR du 28 janvier 2008.",
  "Premier Ministre du Cameroun : A520/Cab/PM du 10 novembre 1999.",
  "Ministre de la Justice – Garde des Sceaux : 08758/PO38/00/DANS du 27 septembre 2000.",
  "MINATD : 00587/L/MINATD/DAP/CES du 1er mars 2006.",
  "Ministère de la Défense : 080057/LE/CNSP/20°GSP/680 du 5 février 2008.",
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "À propos", path: "/a-propos" },
        ]}
      />
      <ImageBanner
        image="/images/hero/siege-national-cadres-minat-2024.jpg"
        title="Historique, légitimité et projection internationale"
        description="La P.I.G s’inscrit dans une trajectoire institutionnelle née en 1998, articulée autour de la reconnaissance, de la protection et de l’action responsable."
      />
      <section className="section-shell">
        <SectionHeading
          eyebrow="Cadre fondateur"
          title="Une évolution du HACIG vers la P.I.G dans une logique de continuité institutionnelle"
          description="La Police Internationale d’Intervention Générale succède au Haut Commissariat d’Intervention Générale et conserve une vocation d’intervention, de veille et de service ancrée dans l’intérêt général."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-border bg-white p-8 shadow-soft">
            <h2 className="font-display text-3xl font-semibold text-ink">Historique</h2>
            <p className="mt-5 leading-8 text-muted">
              Fondée le 21 décembre 1998, la P.I.G déploie une mission de protection
              des personnes, de promotion des droits humains, d’investigation, de
              prévention et d’assistance. Son histoire traduit une volonté de structurer
              une réponse institutionnelle crédible, juridiquement consciente et tournée
              vers les réalités internationales.
            </p>
            <p className="mt-4 leading-8 text-muted">
              Son action est présentée comme conforme à la Résolution 21/A(III) de
              l’Assemblée générale des Nations Unies du 10 décembre 1948 et s’appuie,
              au Cameroun, sur la Loi n°90/053 du 19 décembre 1990.
            </p>
          </article>
          <article className="rounded-[2rem] border border-border bg-surface p-8">
            <h2 className="font-display text-3xl font-semibold text-ink">Positionnement</h2>
            <p className="mt-5 leading-8 text-muted">
              La P.I.G se présente comme une organisation de recherche, d’intervention,
              de médiation, de sensibilisation et de coopération. Son rôle institutionnel
              consiste à conjuguer vigilance, présence de terrain, pédagogie et capacité
              de coordination avec les partenaires publics, internationaux et associatifs.
            </p>
            <p className="mt-4 leading-8 text-muted">
              La plateforme éditoriale du site met volontairement en avant une image
              sérieuse, humaine et institutionnelle, afin de refléter la dimension
              stratégique et non agressive de l’organisation.
            </p>
          </article>
        </div>
      </section>
      <section className="section-shell">
        <SectionHeading
          eyebrow="Reconnaissance"
          title="Repères de reconnaissance et d’homologation"
          description="Les références ci-dessous synthétisent les principaux repères de reconnaissance institutionnelle mentionnés dans la documentation de l’organisation."
        />
        <div className="mt-12 grid gap-4">
          {recognitions.map((item) => (
            <article key={item} className="rounded-[1.75rem] border border-border bg-white px-6 py-5 shadow-soft">
              <p className="leading-7 text-ink">{item}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
