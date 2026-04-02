"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type RevealOnScrollProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function RevealOnScroll({
  children,
  delay = 0,
  className,
}: RevealOnScrollProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
