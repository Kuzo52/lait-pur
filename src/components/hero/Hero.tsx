"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { LetterReveal } from "@/components/hero/LetterReveal";
import { MilkBottle } from "@/components/hero/MilkBottle";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealImage } from "@/components/ui/RevealImage";
import { BRAND, IMAGES } from "@/data/content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col overflow-hidden pt-[max(5.5rem,env(safe-area-inset-top))]"
    >
      <div className="absolute inset-0">
        <RevealImage
          src={IMAGES.heroBottle}
          alt="Эстетичная стеклянная бутылка молока без логотипов"
          className="absolute inset-0 h-full w-full !rounded-none"
          imgClassName="scale-105 object-[center_35%] !rounded-none"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/95 via-[#FAF8F5]/82 to-[#FAF8F5]/35 md:via-[#FAF8F5]/78 md:to-[#FAF8F5]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-[#FAF8F5]/45" />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-8%] z-[1] flex justify-center opacity-50 md:hidden"
        aria-hidden
      >
        <div className="origin-bottom scale-[0.7]">
          <MilkBottle />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-6 px-5 pb-28 md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:px-8 md:pb-16 lg:px-10">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.p
            className="mb-4 font-display tracking-[0.14em] text-[var(--graphite)]"
            style={{ fontSize: "clamp(3rem, 11vw, 7rem)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {BRAND}
          </motion.p>

          <LetterReveal
            text="Молоко, которое чувствуешь"
            className="max-w-[14ch] text-[clamp(1.65rem,3.8vw,2.9rem)] leading-[1.12] font-medium tracking-wide text-[var(--graphite)]"
            as="h1"
          />

          <motion.p
            className="mt-5 max-w-md text-base leading-relaxed text-[var(--graphite)]/70 md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: EASE }}
          >
            Скандинавская органика. Чистый состав, стекло и&nbsp;вкус северных
            пастбищ&nbsp;— без&nbsp;лишнего шума.
          </motion.p>

          <motion.div
            className="mt-9"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.75, ease: EASE }}
          >
            <MagneticButton href="#milk-bar">
              Попробовать линейку
              <ArrowDown className="size-4" />
            </MagneticButton>
          </motion.div>
        </div>

        <div className="relative hidden md:block">
          <MilkBottle />
        </div>
      </div>
    </section>
  );
}
