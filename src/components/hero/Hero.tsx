"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { LetterReveal } from "@/components/hero/LetterReveal";
import { MilkBottle } from "@/components/hero/MilkBottle";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-[max(5.5rem,env(safe-area-inset-top))]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 20%, rgba(184,212,232,0.45), transparent 55%), radial-gradient(ellipse 60% 40% at 85% 70%, rgba(197,213,192,0.35), transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-8 px-5 pb-16 md:grid-cols-2 md:gap-4 md:px-8 lg:px-10">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.p
            className="mb-5 font-display tracking-tight text-[var(--graphite)]"
            style={{ fontSize: "clamp(3.25rem, 9vw, 6.75rem)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            Lait&nbsp;Pur
          </motion.p>

          <LetterReveal
            text="Молоко, которое чувствуешь"
            className="max-w-[14ch] text-[clamp(1.65rem,3.6vw,2.75rem)] leading-[1.15] font-medium tracking-tight text-[var(--graphite)]"
            as="h1"
          />

          <motion.p
            className="mt-5 max-w-md text-base leading-relaxed text-[var(--graphite)]/65 md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: EASE }}
          >
            Органическая линейка с&nbsp;нормандских пастбищ. Чистый состав,
            стеклянная упаковка и&nbsp;вкус, который не&nbsp;нужно объяснять.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center justify-center gap-3 md:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.75, ease: EASE }}
          >
            <a
              href="#milk-bar"
              className="group inline-flex items-center gap-2 rounded-[12px] bg-[var(--graphite)] px-7 py-3.5 text-sm font-medium tracking-wide text-[var(--milk)] transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[var(--graphite)]/90 active:scale-[0.97]"
            >
              Попробовать линейку
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <MilkBottle />
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        animate={{ y: [0, 8, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-10 w-px bg-gradient-to-b from-transparent via-[var(--graphite)]/40 to-transparent" />
      </motion.div>
    </section>
  );
}
