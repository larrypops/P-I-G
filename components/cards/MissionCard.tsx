import Image from "next/image";
import { cn } from "@/lib/utils";

type MissionCardProps = {
  title: string;
  description: string;
  image: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
};

export function MissionCard({
  title,
  description,
  image,
  imageFit = "cover",
  imagePosition = "center",
}: MissionCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-border bg-white shadow-card transition-transform duration-300 hover:-translate-y-1">
      <div
        className={cn(
          "relative h-56 overflow-hidden",
          imageFit === "contain" ? "bg-surface p-4" : "",
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          className={cn(
            "transition duration-500 group-hover:scale-105",
            imageFit === "contain" ? "object-contain" : "object-cover",
          )}
          style={{ objectPosition: imagePosition }}
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold text-ink">{title}</h3>
        <p className="mt-3 text-base leading-7 text-muted">{description}</p>
      </div>
    </article>
  );
}
