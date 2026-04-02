import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageBannerProps = {
  image: string;
  title: string;
  description: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
};

export function ImageBanner({
  image,
  title,
  description,
  imageFit = "cover",
  imagePosition = "center",
}: ImageBannerProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border">
        <div className="absolute inset-0 bg-gradient-to-r from-[#08111f]/85 via-[#08111f]/45 to-transparent" />
        <div className={cn("relative h-[28rem] w-full", imageFit === "contain" ? "bg-surface p-6" : "")}>
          <Image
            src={image}
            alt={title}
            fill
            className={cn(imageFit === "contain" ? "object-contain" : "object-cover")}
            style={{ objectPosition: imagePosition }}
          />
        </div>
        <div className="absolute inset-0 flex items-end p-8 sm:p-12">
          <div className="max-w-2xl text-white">
            <h2 className="font-display text-4xl font-semibold sm:text-5xl">{title}</h2>
            <p className="mt-4 text-base leading-7 text-white/85">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
