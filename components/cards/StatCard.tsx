type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <article className="rounded-[2rem] border border-border bg-white p-6 text-center shadow-soft">
      <p className="font-display text-4xl font-semibold text-primary">{value}</p>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-muted">
        {label}
      </p>
    </article>
  );
}
