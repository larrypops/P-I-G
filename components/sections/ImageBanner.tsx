import Image from "next/image";

type ImageBannerProps = {
  image: string;
  title: string;
  description: string;
};

export function ImageBanner({ image, title, description }: ImageBannerProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border">
        <div className="absolute inset-0 bg-gradient-to-r from-[#08111f]/85 via-[#08111f]/45 to-transparent" />
        <Image src={image} alt={title} width={1600} height={900} className="h-[28rem] w-full object-cover" />
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
