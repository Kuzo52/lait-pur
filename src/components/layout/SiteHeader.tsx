"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BRAND, navLinks } from "@/data/content";
import { cn } from "@/lib/utils";
import { ClientOnly } from "@/components/ui/ClientOnly";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function SiteHeader() {
  const [elevated, setElevated] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
          elevated
            ? "border-b border-black/5 bg-[#FAF8F5]/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="relative z-10 mx-auto flex h-16 max-w-7xl items-center justify-between px-5 pt-[env(safe-area-inset-top)] md:h-[4.25rem] md:px-8 lg:px-10">
          <a
            href="#top"
            className="font-display text-2xl tracking-[0.12em] text-[#1c1c1a]"
            onClick={() => setOpen(false)}
          >
            {BRAND}
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Основная">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#1c1c1a]/60 transition-colors hover:text-[#1c1c1a]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#milk-bar"
            className="hidden text-sm font-medium tracking-wide text-[#1c1c1a] transition-opacity hover:opacity-55 md:inline-flex"
          >
            Выбрать вкус →
          </a>
        </div>
      </header>

      <ClientOnly>
        <div className="fixed inset-x-0 bottom-[max(0.85rem,env(safe-area-inset-bottom))] z-[60] flex justify-center px-4 md:hidden">
          <div className="relative z-10 flex w-full max-w-sm items-center gap-1 rounded-full border border-white/70 bg-white/60 p-1.5 shadow-[0_8px_32px_rgba(120,110,90,0.12)] backdrop-blur-md">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex-1 rounded-full px-2 py-2.5 text-center text-[11px] font-medium tracking-wide text-[#1c1c1a]/80"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-black text-white"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-4" stroke="currentColor" /> : <Menu className="size-4" stroke="currentColor" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-nav"
              className="fixed inset-0 z-[55] flex flex-col bg-[#FAF8F5]/90 backdrop-blur-lg md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <nav
                className="relative z-10 flex flex-1 flex-col justify-center gap-2 px-8 pt-[env(safe-area-inset-top)] pb-[calc(6rem+env(safe-area-inset-bottom))]"
                aria-label="Мобильная"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display rounded-[16px] px-3 py-4 text-4xl tracking-wide text-[#1c1c1a]"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#milk-bar"
                  onClick={() => setOpen(false)}
                  className="mt-8 text-lg font-medium tracking-wide text-[#1c1c1a]"
                >
                  Выбрать вкус →
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </ClientOnly>
    </>
  );
}
