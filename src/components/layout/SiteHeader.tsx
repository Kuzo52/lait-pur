"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/data/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [elevated, setElevated] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setElevated(y > 24);
  });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
        elevated
          ? "border-b border-[var(--graphite)]/8 bg-[var(--milk)]/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[4.25rem] md:px-8 lg:px-10">
        <a
          href="#top"
          className="font-display text-xl tracking-tight text-[var(--graphite)] transition-transform active:scale-[0.97]"
          onClick={() => setOpen(false)}
        >
          Lait&nbsp;Pur
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--graphite)]/60 transition-colors duration-300 hover:text-[var(--graphite)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#milk-bar"
          className="hidden rounded-[12px] bg-[var(--graphite)] px-4 py-2 text-sm font-medium text-[var(--milk)] transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-90 active:scale-[0.97] md:inline-flex"
        >
          Выбрать вкус
        </a>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-[12px] border border-[var(--graphite)]/10 bg-white/40 text-[var(--graphite)] backdrop-blur-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      <motion.div
        id="mobile-nav"
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden border-t border-[var(--graphite)]/8 bg-[var(--milk)]/92 backdrop-blur-xl md:hidden"
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Мобильная">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-[12px] px-3 py-3 text-sm text-[var(--graphite)]/75 transition-colors hover:bg-white/50 hover:text-[var(--graphite)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#milk-bar"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-[12px] bg-[var(--graphite)] px-3 py-3 text-center text-sm font-medium text-[var(--milk)] active:scale-[0.97]"
          >
            Выбрать вкус
          </a>
        </nav>
      </motion.div>
    </header>
  );
}
