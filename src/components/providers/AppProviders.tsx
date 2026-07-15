"use client";

import { motion } from "framer-motion";
import { ProductThemeProvider, useProductTheme } from "@/context/ProductThemeContext";
import type { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  return <ProductThemeProvider>{children}</ProductThemeProvider>;
}

export function ThemeCanvas({ children }: { children: ReactNode }) {
  const { product } = useProductTheme();

  return (
    <motion.div
      className="relative min-h-full flex-1"
      animate={{ backgroundColor: product.bg }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{
        ["--accent" as string]: product.accent,
        ["--accent-deep" as string]: product.accentDeep,
        ["--bg-soft" as string]: product.bgSoft,
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${product.bgSoft}, transparent 70%)`,
        }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="relative z-10 flex min-h-full flex-col">{children}</div>
    </motion.div>
  );
}
