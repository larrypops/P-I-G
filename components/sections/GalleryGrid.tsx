"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  title: string;
};

type GalleryGridProps = {
  items: GalleryItem[];
  withFilters?: boolean;
};

export function GalleryGrid({ items, withFilters = true }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = useMemo(
    () => ["Tous", ...Array.from(new Set(items.map((item) => item.category)))],
    [items],
  );

  const filteredItems =
    activeCategory === "Tous"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const selectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <>
      {withFilters ? (
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setSelectedIndex(null);
              }}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary",
                activeCategory === category
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white text-ink hover:border-secondary hover:text-secondary",
              )}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item, index) => (
          <button
            key={`${item.src}-${item.title}`}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="group overflow-hidden rounded-[1.75rem] border border-border bg-white text-left shadow-soft"
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                {item.category}
              </p>
              <p className="mt-2 font-medium text-ink">{item.title}</p>
            </div>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {selectedItem ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#08111f]/85 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white"
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-ink shadow-soft"
                aria-label="Fermer la visionneuse"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative h-[70vh] max-h-[52rem] min-h-[20rem]">
                <Image src={selectedItem.src} alt={selectedItem.alt} fill className="object-contain" />
              </div>
              <div className="border-t border-border p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                  {selectedItem.category}
                </p>
                <p className="mt-2 text-lg font-medium text-ink">{selectedItem.title}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
