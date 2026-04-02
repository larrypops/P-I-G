import Link from "next/link";
import { navigation } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { contacts } from "@/content/contacts";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#08111f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
        <div>
          <p className="font-display text-3xl font-semibold">{siteConfig.shortName}</p>
          <p className="mt-4 max-w-md leading-7 text-white/75">{siteConfig.description}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Navigation
          </p>
          <div className="mt-5 grid gap-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/80 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Contacts
          </p>
          <div className="mt-5 space-y-4 text-white/80">
            <p>{contacts.offices[0]?.phone}</p>
            <p>{contacts.offices[0]?.email}</p>
            <p>{contacts.offices[1]?.phone}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
