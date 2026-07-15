"use client";

import { ProductThemeProvider, useProductTheme } from "@/context/ProductThemeContext";
import type { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  return <ProductThemeProvider>{children}</ProductThemeProvider>;
}

/** Без Framer Motion — иначе fixed/absolute blobs «запираются» в transform-контейнере. */
export function ThemeCanvas({ children }: { children: ReactNode }) {
  const { product } = useProductTheme();

  return (
    <div
      className="relative min-h-[100dvh] flex-1 overflow-hidden bg-[#F4F1EB]"
      style={{
        ["--accent" as string]: product.accent,
        ["--accent-deep" as string]: product.accentDeep,
        ["--bg-soft" as string]: product.bgSoft,
      }}
    >
      {children}
    </div>
  );
}
