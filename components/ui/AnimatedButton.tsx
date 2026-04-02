"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type AnimatedButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function AnimatedButton({
  href,
  children,
  variant = "primary",
  className,
}: AnimatedButtonProps) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary",
          variant === "primary"
            ? "bg-primary text-white shadow-card hover:bg-[#7b5d10]"
            : "border border-border bg-white text-ink hover:border-secondary hover:text-secondary",
          className,
        )}
      >
        {children}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}
