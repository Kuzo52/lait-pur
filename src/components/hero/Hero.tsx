"use client";

import { motion } from "framer-motion";
import { LetterReveal } from "@/components/hero/LetterReveal";
import { MilkBottle } from "@/components/hero/MilkBottle";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealImage } from "@/components/ui/RevealImage";
import { ClientOnly } from "@/components/ui/ClientOnly";
import { BRAND, IMAGES } from "@/data/content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-[100dvh] flex-col overflow-hidden bg-transparent pt-[max(5.5rem,env(safe-area-inset-top))]"
    >
      <div className="absolute inset-0 z-0">
        <RevealImage
          src={IMAGES.heroBottle}
          alt="Эстетичная стеклянная бутылка молока без логотипов"
          className="absolute inset-0 h-full w-full !rounded-none"
          imgClassName="h-full w-full scale-105 object-cover object-[center_35%] !rounded-none"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/95 via-[#FAF8F5]/82 to-[#FAF8F5]/35 md:via-[#FAF8F5]/78 md:to-[#FAF8F5]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-[#FAF8F5]/45" />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-8%] z-[1] flex justify-center opacity-50 md:hidden"
        aria-hidden
      >
        <ClientOnly>
          <div className="origin-bottom scale-[0.7]">
            <MilkBottle />
          </div>
        </ClientOnly>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-6 px-5 pb-28 md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:px-8 md:pb-16 lg:px-10">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p
            className="mb-4 font-display tracking-[0.14em] text-[#1c1c1a]"
            style={{ fontSize: "clamp(3rem, 11vw, 7rem)" }}
          >
            {BRAND}
          </p>

          <ClientOnly
            fallback={
              <h1 className="max-w-[14ch] font-display text-[clamp(1.65rem,3.8vw,2.9rem)] leading-[1.12] font-medium tracking-wide text-[#1c1c1a]">
                Молоко, которое чувствуешь
              </h1>
            }
          >
            <LetterReveal
              text="Молоко, которое чувствуешь"
              className="max-w-[14ch] text-[clamp(1.65rem,3.8vw,2.9rem)] leading-[1.12] font-medium tracking-wide text-[#1c1c1a]"
              as="h1"
            />
          </ClientOnly>

          <p className="mt-5 max-w-md text-base leading-relaxed text-[#1c1c1a]/70 md:text-lg">
            Скандинавская органика. Чистый состав, стекло и&nbsp;вкус северных
            пастбищ&nbsp;— без&nbsp;лишнего шума.
          </p>

          <div className="mt-9">
            <MagneticButton href="#milk-bar" className="text-base md:text-lg">
              Выбрать вкус
            </MagneticButton>
          </div>
        </div>

        <div className="relative z-10 hidden md:block">
          <ClientOnly>
            <MilkBottle />
          </ClientOnly>
        </div>
      </div>

      <ClientOnly>
        <motion.div
          className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block"
          animate={{ y: [0, 8, 0], opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: EASE }}
        >
          <div className="h-10 w-px bg-gradient-to-b from-transparent via-[#1c1c1a]/40 to-transparent" />
        </motion.div>
      </ClientOnly>
    </section>
  );
}
