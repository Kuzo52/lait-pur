"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { type MouseEvent } from "react";
import { ClientOnly } from "@/components/ui/ClientOnly";
import { LetterReveal } from "@/components/hero/LetterReveal";
import { BRAND, heroMarquee } from "@/data/content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  const mx = useMotionValue(50);
  const my = useMotionValue(40);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const glow = useMotionTemplate`radial-gradient(520px circle at ${sx}% ${sy}%, rgba(255,255,255,0.85), transparent 55%)`;

  function onMove(e: MouseEvent<HTMLElement>) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  }

  return (
    <section
      id="top"
      onMouseMove={onMove}
      className="surface-hero relative z-10 flex min-h-[100dvh] flex-col overflow-hidden pt-[max(5.5rem,env(safe-area-inset-top))]"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute -top-28 -left-16 h-[48vmax] w-[48vmax] rounded-full bg-[#C9DCD6]/55 blur-[110px]" />
        <div className="absolute top-[22%] -right-24 h-[40vmax] w-[40vmax] rounded-full bg-[#E8D9C8]/50 blur-[120px]" />
        <ClientOnly>
          <motion.div className="absolute inset-0 opacity-80" style={{ background: glow }} />
        </ClientOnly>
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(28,28,26,0.1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 40% 35%, black 8%, transparent 72%)",
          }}
        />
        <p
          className="absolute top-[18%] right-[6%] hidden font-display text-[clamp(5rem,14vw,9rem)] leading-none text-[#1c1c1a]/[0.05] select-none md:block"
          aria-hidden
        >
          01
        </p>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-24 md:px-8 md:pb-16 lg:px-10">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.p
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1c1c1a]/10 bg-white/50 px-3 py-1.5 text-[11px] font-medium tracking-[0.22em] text-[#1c1c1a]/50 uppercase backdrop-blur-sm"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <span className="size-1.5 rounded-full bg-[#8a9a8e]" />
              Сконе · органика · стекло
            </motion.p>

            <motion.p
              className="font-display leading-none tracking-[0.14em] text-[#1c1c1a]"
              style={{ fontSize: "clamp(4rem, 16vw, 9rem)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: EASE }}
            >
              {BRAND}
            </motion.p>

            <ClientOnly
              fallback={
                <h1 className="mt-4 max-w-[16ch] font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.12] tracking-wide text-[#1c1c1a]">
                  Молоко с ясной логикой
                </h1>
              }
            >
              <LetterReveal
                text="Молоко с ясной логикой"
                className="mt-4 max-w-[16ch] text-[clamp(1.75rem,4vw,3rem)] leading-[1.12] tracking-wide text-[#1c1c1a]"
                as="h1"
              />
            </ClientOnly>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-[#1c1c1a]/60 md:text-lg">
              От сырья до&nbsp;стеклянной бутылки&nbsp;— одна цепочка
              без&nbsp;лишних звеньев. Четыре вкуса, один стандарт чистоты.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#about"
                className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#1c1c1a] transition-opacity hover:opacity-55"
              >
                Узнать о&nbsp;нас
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#milk-bar"
                className="text-sm font-medium tracking-wide text-[#1c1c1a]/45 transition-colors hover:text-[#1c1c1a]"
              >
                Смотреть линейку
              </a>
            </div>
          </div>

          <motion.aside
            className="hidden lg:block"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: EASE }}
          >
            <div className="glass-card rounded-[28px] p-6">
              <p className="text-[11px] tracking-[0.2em] text-[#1c1c1a]/40 uppercase">
                Сегодня в системе
              </p>
              <ul className="mt-5 space-y-4">
                {[
                  { n: "01", t: "Пастбище", d: "утро без стресса" },
                  { n: "02", t: "Лаборатория", d: "проверка партии" },
                  { n: "03", t: "Розлив", d: "холодная линия" },
                ].map((row) => (
                  <li
                    key={row.n}
                    className="flex items-baseline justify-between gap-4 border-b border-[#1c1c1a]/8 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="font-display text-xl text-[#1c1c1a]/35">
                      {row.n}
                    </span>
                    <div className="flex-1 text-right">
                      <p className="font-medium text-[#1c1c1a]">{row.t}</p>
                      <p className="text-sm text-[#1c1c1a]/45">{row.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>

        <div className="mt-14 overflow-hidden border-y border-[#1c1c1a]/8 py-4 md:mt-20">
          <ClientOnly
            fallback={
              <p className="text-center text-sm tracking-[0.18em] text-[#1c1c1a]/40 uppercase">
                {heroMarquee.join(" · ")}
              </p>
            }
          >
            <motion.div
              className="flex w-max gap-10 text-sm tracking-[0.2em] text-[#1c1c1a]/40 uppercase"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              {[...heroMarquee, ...heroMarquee].map((item, i) => (
                <span key={`${item}-${i}`} className="flex items-center gap-10">
                  {item}
                  <span className="size-1 rounded-full bg-[#1c1c1a]/25" />
                </span>
              ))}
            </motion.div>
          </ClientOnly>
        </div>
      </div>
    </section>
  );
}
