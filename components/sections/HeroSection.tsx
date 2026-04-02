import Image from "next/image";
import { siteConfig } from "@/content/site";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-10 sm:pb-28 sm:pt-16">
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-gold-radial" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
            Organisation internationale institutionnelle
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {siteConfig.legalName}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {siteConfig.baseline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
            Présente sur des enjeux de protection, d’investigation, de médiation et
            d’assistance, la P.I.G porte une action responsable au service des
            populations, de la gouvernance et de la coopération internationale.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <AnimatedButton href="/missions">Découvrir les missions</AnimatedButton>
            <AnimatedButton href="/contact" variant="secondary">
              Contacter les bureaux
            </AnimatedButton>
          </div>
        </div>
        <div className="relative z-10">
          <div className="absolute -left-10 top-10 hidden h-40 w-40 rounded-full bg-accent/20 blur-3xl lg:block" />
          <div className="rounded-[2.5rem] border border-white/60 bg-white/70 p-4 shadow-soft backdrop-blur">
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src="/images/hero/siege-national-cadres-minat-2024.jpg"
                alt="Séance institutionnelle au siège national avec les cadres du MINAT"
                width={1200}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="mt-4 flex items-center gap-4 rounded-[1.5rem] bg-[#0d1e36] px-5 py-4 text-white">
              <Image
                src="/images/logo/pig-embleme-or.jpg"
                alt="Logo officiel de la P.I.G"
                width={72}
                height={61}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                  Signature institutionnelle
                </p>
                <p className="mt-1 text-base">{siteConfig.slogan}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
