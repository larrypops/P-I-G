type ValueCardProps = {
  title: string;
  description: string;
};

export function ValueCard({ title, description }: ValueCardProps) {
  return (
    <article className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
      <div className="h-2 w-16 rounded-full bg-accent" />
      <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-muted">{description}</p>
    </article>
  );
}
