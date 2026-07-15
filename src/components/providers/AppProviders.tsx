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
      className="relative min-h-[100dvh] flex-1 overflow-hidden transition-[background-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        backgroundColor: product.bgSoft || "#FAF8F5",
        ["--accent" as string]: product.accent,
        ["--accent-deep" as string]: product.accentDeep,
        ["--bg-soft" as string]: product.bgSoft,
      }}
    >
      {children}
    </div>
  );
}
