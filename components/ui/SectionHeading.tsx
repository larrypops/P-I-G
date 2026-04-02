type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
