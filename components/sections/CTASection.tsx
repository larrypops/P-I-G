import { AnimatedButton } from "@/components/ui/AnimatedButton";

type CTASectionProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-[2.5rem] bg-[#0d1e36] px-8 py-12 text-white shadow-soft sm:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/65">
          Contact institutionnel
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/78">{description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <AnimatedButton href={primaryHref}>{primaryLabel}</AnimatedButton>
          {secondaryHref && secondaryLabel ? (
            <AnimatedButton href={secondaryHref} variant="secondary" className="bg-white text-ink">
              {secondaryLabel}
            </AnimatedButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
