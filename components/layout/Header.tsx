"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Accueil P.I.G">
          <Image
            src="/images/logo/pig-embleme-or.jpg"
            alt="Logo de la P.I.G"
            width={48}
            height={41}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <p className="font-display text-xl font-semibold text-ink">P.I.G</p>
            <p className="text-xs uppercase tracking-[0.16em] text-muted">
              Intervention générale
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition hover:text-secondary",
                pathname === item.href ? "text-secondary" : "text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="rounded-full border border-border p-2 text-ink lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-border bg-white px-6 py-4 lg:hidden">
          <div className="grid gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-medium",
                  pathname === item.href ? "bg-surface text-secondary" : "text-ink",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
