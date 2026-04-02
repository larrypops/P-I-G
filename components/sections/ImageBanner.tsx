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
        <div className="absolute inset-0 bg-gradient-to-t from-[#08111f]/88 via-[#08111f]/42 to-transparent sm:bg-gradient-to-r" />
        <div
          className={cn(
            "relative h-[22rem] w-full sm:h-[28rem]",
            imageFit === "contain" ? "bg-surface p-4 sm:p-6" : "",
          )}
        >
          <Image
            src={image}
            alt={title}
            fill
            className={cn(imageFit === "contain" ? "object-contain" : "object-cover")}
            style={{ objectPosition: imagePosition }}
          />
        </div>
        <div className="absolute inset-0 flex items-end p-5 sm:p-12">
          <div className="max-w-2xl text-white">
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-5xl">
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/85 sm:mt-4 sm:text-base sm:leading-7">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
