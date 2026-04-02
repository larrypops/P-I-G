import Image from "next/image";
import { cn } from "@/lib/utils";

type NewsCardProps = {
  category: string;
  title: string;
  summary: string;
  image: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
};

export function NewsCard({
  category,
  title,
  summary,
  image,
  imageFit = "cover",
  imagePosition = "center",
}: NewsCardProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-card">
      <div className={cn("relative h-64", imageFit === "contain" ? "bg-surface p-4" : "")}>
        <Image
          src={image}
          alt={title}
          fill
          className={cn(imageFit === "contain" ? "object-contain" : "object-cover")}
          style={{ objectPosition: imagePosition }}
        />
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
          {category}
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-ink">{title}</h3>
        <p className="mt-3 leading-7 text-muted">{summary}</p>
      </div>
    </article>
  );
}
