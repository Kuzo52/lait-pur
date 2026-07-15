"use client";

import { ClientOnly } from "@/components/ui/ClientOnly";
import { LetterReveal } from "@/components/hero/LetterReveal";
import { BRAND } from "@/data/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-[100dvh] flex-col overflow-hidden pt-[max(5.5rem,env(safe-area-inset-top))]"
    >
      {/* Свежий фон hero */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#ffffff_0%,transparent_55%)]" />
        <div className="absolute -top-24 -left-20 h-[55vmax] w-[55vmax] rounded-full bg-[#E8F2F0]/70 blur-[90px]" />
        <div className="absolute top-[20%] -right-24 h-[45vmax] w-[45vmax] rounded-full bg-[#F5EDE3]/80 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] h-[40vmax] w-[40vmax] rounded-full bg-[#EEF1F6]/65 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(28,28,26,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-5 pb-28 text-center md:px-8 md:pb-16">
        <p className="mb-4 text-[11px] font-medium tracking-[0.28em] text-[#1c1c1a]/40 uppercase">
          Органика · Скандинавия
        </p>

        <p
          className="font-display tracking-[0.18em] text-[#1c1c1a]"
          style={{ fontSize: "clamp(3.5rem, 14vw, 8rem)" }}
        >
          {BRAND}
        </p>

        <ClientOnly
          fallback={
            <h1 className="mt-3 max-w-[14ch] font-display text-[clamp(1.6rem,3.8vw,2.6rem)] leading-[1.15] tracking-wide text-[#1c1c1a]/85">
              Молоко как система чистоты
            </h1>
          }
        >
          <LetterReveal
            text="Молоко как система чистоты"
            className="mt-3 max-w-[14ch] text-[clamp(1.6rem,3.8vw,2.6rem)] leading-[1.15] tracking-wide text-[#1c1c1a]/85"
            as="h1"
          />
        </ClientOnly>

        <p className="mt-5 max-w-md text-base leading-relaxed text-[#1c1c1a]/55 md:text-lg">
          Точная линейка, стеклянный цикл и&nbsp;вкус северных пастбищ.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#milk-bar"
            className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#1c1c1a] transition-opacity hover:opacity-60"
          >
            Выбрать вкус
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          <a
            href="#journey"
            className="text-sm font-medium tracking-wide text-[#1c1c1a]/45 transition-colors hover:text-[#1c1c1a]"
          >
            Смотреть путь
          </a>
        </div>
      </div>
    </section>
  );
}
