"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BRAND, navLinks } from "@/data/content";
import { cn } from "@/lib/utils";

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
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          elevated
            ? "border-b border-[var(--graphite)]/8 bg-[var(--milk)]/75 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 pt-[env(safe-area-inset-top)] md:h-[4.25rem] md:px-8 lg:px-10">
          <motion.a
            href="#top"
            className="font-display text-xl tracking-tight text-[var(--graphite)]"
            whileTap={{ scale: 0.96 }}
            onClick={() => setOpen(false)}
          >
            {BRAND}
          </motion.a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Основная">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--graphite)]/60 transition-colors duration-300 hover:text-[var(--graphite)]"
                whileTap={{ scale: 0.96 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <motion.a
            href="#milk-bar"
            className="hidden rounded-[12px] bg-[var(--graphite)] px-4 py-2 text-sm font-medium text-[var(--milk)] transition-opacity duration-300 hover:opacity-90 md:inline-flex"
            whileTap={{ scale: 0.96 }}
          >
            Выбрать вкус
          </motion.a>
        </div>
      </header>

      {/* Плавающая кнопка меню — только мобилка */}
      <motion.button
        type="button"
        className="fixed right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-[60] flex size-14 items-center justify-center rounded-full border border-white/60 bg-[var(--graphite)] text-[var(--milk)] shadow-[0_12px_40px_rgba(28,28,26,0.25)] backdrop-blur-lg md:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.96 }}
        animate={{ rotate: open ? 90 : 0 }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-[55] flex flex-col bg-[var(--milk)]/80 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <nav
              className="flex flex-1 flex-col justify-center gap-2 px-8 pt-[env(safe-area-inset-top)] pb-[calc(6rem+env(safe-area-inset-bottom))]"
              aria-label="Мобильная"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display rounded-[16px] px-3 py-4 text-4xl text-[var(--graphite)]"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.45, ease: EASE }}
                  whileTap={{ scale: 0.96 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#milk-bar"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-[14px] bg-[var(--graphite)] px-5 py-4 text-center text-base font-medium text-[var(--milk)]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.45, ease: EASE }}
                whileTap={{ scale: 0.96 }}
              >
                Выбрать вкус
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
