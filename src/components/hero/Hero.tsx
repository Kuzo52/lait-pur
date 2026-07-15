"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { LiquidOrb } from "@/components/ui/LiquidOrb";
import { ClientOnly } from "@/components/ui/ClientOnly";
import { LetterReveal } from "@/components/hero/LetterReveal";
import { BRAND } from "@/data/content";
import { useProductTheme } from "@/context/ProductThemeContext";

export function Hero() {
  const { product } = useProductTheme();

  return (
    <section
      id="top"
      className="relative z-10 flex min-h-[100dvh] flex-col overflow-hidden pt-[max(5.5rem,env(safe-area-inset-top))]"
    >
      {/* Мобилка: орб за текстом */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[28%] z-0 flex justify-center opacity-40 md:hidden"
        aria-hidden
      >
        <LiquidOrb accent={product.accent} className="scale-110" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-5 pb-28 md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:px-8 md:pb-16 lg:px-10">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="mb-3 text-[11px] font-medium tracking-[0.28em] text-[#1c1c1a]/40 uppercase">
            Органика · Скандинавия
          </p>

          <p
            className="font-display tracking-[0.16em] text-[#1c1c1a]"
            style={{ fontSize: "clamp(3.2rem, 12vw, 7.5rem)" }}
          >
            {BRAND}
          </p>

          <ClientOnly
            fallback={
              <h1 className="mt-2 max-w-[12ch] font-display text-[clamp(1.7rem,4vw,2.85rem)] leading-[1.1] tracking-wide text-[#1c1c1a]">
                Молоко как система чистоты
              </h1>
            }
          >
            <LetterReveal
              text="Молоко как система чистоты"
              className="mt-2 max-w-[12ch] text-[clamp(1.7rem,4vw,2.85rem)] leading-[1.1] tracking-wide text-[#1c1c1a]"
              as="h1"
            />
          </ClientOnly>

          <p className="mt-5 max-w-md text-base leading-relaxed text-[#1c1c1a]/65 md:text-lg">
            Точная линейка, стеклянный цикл и&nbsp;вкус северных пастбищ&nbsp;—
            без визуального шума.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <MagneticButton href="#milk-bar" className="text-base">
              Выбрать вкус
            </MagneticButton>
            <a
              href="#journey"
              className="rounded-full border border-[#1c1c1a]/15 px-6 py-3.5 text-sm font-medium text-[#1c1c1a] transition-colors hover:bg-white/50"
            >
              Смотреть путь
            </a>
          </div>

          <dl className="mt-12 grid w-full max-w-md grid-cols-3 gap-3 border-t border-[#1c1c1a]/10 pt-8 text-left">
            {[
              { k: "12ч", v: "ферма → полка" },
              { k: "4", v: "вкуса" },
              { k: "0", v: "лишних добавок" },
            ].map((item) => (
              <div key={item.k} className="panel rounded-2xl px-3 py-3">
                <dt className="font-display text-2xl text-[#1c1c1a]">{item.k}</dt>
                <dd className="mt-1 text-[11px] leading-snug text-[#1c1c1a]/50">
                  {item.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative z-10 mx-auto hidden w-full max-w-sm md:block">
          <LiquidOrb accent={product.accent} />
          <p className="mt-6 text-center text-xs tracking-[0.2em] text-[#1c1c1a]/35 uppercase">
            {product.name}
          </p>
        </div>
      </div>
    </section>
  );
}
