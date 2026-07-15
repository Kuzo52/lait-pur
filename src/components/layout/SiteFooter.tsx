"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Mail } from "lucide-react";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { navLinks, IMAGES, BRAND } from "@/data/content";
import { RevealImage } from "@/components/ui/RevealImage";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer
      id="subscribe"
      className="relative scroll-mt-24 overflow-hidden border-t border-[var(--graphite)]/8 px-5 pt-20 pb-[max(6rem,calc(5rem+env(safe-area-inset-bottom)))] md:px-8 md:pb-[max(2.5rem,env(safe-area-inset-bottom))] lg:px-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 overflow-hidden opacity-40">
        <RevealImage
          src={IMAGES.farmMist}
          alt=""
          className="absolute inset-0 !rounded-none"
          imgClassName="!rounded-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAF8F5]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 70% 80%, rgba(230,236,237,0.55), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-display text-4xl tracking-[0.12em] text-[var(--graphite)] md:text-5xl">
            {BRAND}
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--graphite)]/60">
            Подпишитесь на&nbsp;вечернюю рассылку: дегустации, сезонные партии
            и&nbsp;истории с&nbsp;пастбища&nbsp;— без&nbsp;шума.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
            noValidate
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Электронная почта
            </label>
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-[var(--graphite)]/35" />
              <input
                id="newsletter-email"
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error" || status === "success") {
                    setStatus("idle");
                  }
                }}
                placeholder="ваш@email.com"
                disabled={status === "loading" || status === "success"}
                className="h-12 w-full rounded-[12px] border border-white/70 bg-white/45 pr-4 pl-10 text-sm text-[var(--graphite)] outline-none backdrop-blur-xl transition-[border-color,box-shadow] placeholder:text-[var(--graphite)]/35 focus:border-[var(--graphite)]/25 focus:shadow-[0_0_0_4px_rgba(28,28,26,0.04)] disabled:opacity-60"
              />
            </div>
            <motion.button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="h-12 rounded-full bg-black px-6 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-70"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {status === "loading" ? "Отправляем…" : "Подписаться"}
            </motion.button>
          </form>

          <p className="mt-3 min-h-5 text-sm" role="status" aria-live="polite">
            {status === "error" && (
              <span className="text-[#8C5A4A]">
                Проверьте адрес&nbsp;— кажется, опечатка.
              </span>
            )}
            {status === "success" && (
              <span className="inline-flex items-center gap-1.5 text-[#5A7A8C]">
                <Check className="size-3.5" strokeWidth={2} />
                Готово. Добро пожаловать в&nbsp;круг {BRAND}.
              </span>
            )}
          </p>

          <PourAnimation active={status === "success"} />
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1 lg:justify-self-end xl:grid-cols-2">
          <nav aria-label="Карта сайта">
            <p className="text-[11px] tracking-[0.18em] text-[var(--graphite)]/40 uppercase">
              Навигация
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-[var(--graphite)]/65 transition-colors hover:text-[var(--graphite)]"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[11px] tracking-[0.18em] text-[var(--graphite)]/40 uppercase">
              Контакты
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--graphite)]/65">
              <li>
                <a
                  href="mailto:hello@muna.farm"
                  className="transition-colors hover:text-[var(--graphite)]"
                >
                  hello@muna.farm
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Skåne+Sweden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--graphite)]"
                >
                  Сконе,&nbsp;Швеция
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--graphite)]"
                >
                  Инстаграм
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-16 flex max-w-7xl flex-col gap-3 border-t border-[var(--graphite)]/8 pt-6 text-xs text-[var(--graphite)]/40 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {BRAND}. Все права защищены.
        </p>
        <div className="flex gap-5">
          <Link
            href="/privacy"
            className="transition-colors hover:text-[var(--graphite)]/70"
          >
            Конфиденциальность
          </Link>
          <Link
            href="/terms"
            className="transition-colors hover:text-[var(--graphite)]/70"
          >
            Условия
          </Link>
        </div>
      </div>
    </footer>
  );
}

function PourAnimation({ active }: { active: boolean }) {
  return (
    <div className="relative mt-10 h-36 w-28" aria-hidden>
      <AnimatePresence>
        {active &&
          [0, 1, 2, 3, 4].map((i) => (
            <motion.span
              key={`drop-${i}`}
              className="absolute left-1/2 size-2 -translate-x-1/2 rounded-full bg-[#FFFDF8] shadow-[0_0_8px_rgba(255,253,248,0.9)]"
              initial={{ top: 0, opacity: 0, scale: 0.6 }}
              animate={{ top: [0, 72], opacity: [0, 1, 0], scale: [0.6, 1, 0.8] }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.9,
                delay: i * 0.12,
                repeat: 2,
                ease: EASE,
              }}
              style={{ marginLeft: (i - 2) * 5 }}
            />
          ))}
      </AnimatePresence>

      <div className="absolute bottom-0 left-1/2 h-24 w-20 -translate-x-1/2 overflow-hidden rounded-b-[28px] rounded-t-[6px] border border-white/70 bg-white/30 backdrop-blur-[2px]">
        <motion.div
          className="absolute inset-x-0 bottom-0 origin-bottom"
          style={{
            background:
              "linear-gradient(180deg, #FFFDF8 0%, #F4EFE6 70%, #E8DFD0 100%)",
          }}
          initial={{ height: "12%" }}
          animate={{ height: active ? "78%" : "12%" }}
          transition={{ duration: 1.4, ease: EASE }}
        />
        <div className="absolute top-3 bottom-4 left-2 w-1.5 rounded-full bg-white/55" />
      </div>
    </div>
  );
}
