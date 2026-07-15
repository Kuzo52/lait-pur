"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Mail } from "lucide-react";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { navLinks, BRAND } from "@/data/content";

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
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer
      id="subscribe"
      className="relative z-10 scroll-mt-24 border-t border-[#1c1c1a]/8 px-5 pt-16 pb-[max(6rem,calc(5rem+env(safe-area-inset-bottom)))] md:px-8 md:pb-10 lg:px-10"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-display text-4xl tracking-[0.14em] text-[#1c1c1a] md:text-5xl">
            {BRAND}
          </p>
          <p className="mt-4 max-w-md text-base text-[#1c1c1a]/60">
            Рассылка без&nbsp;шума: сезонные партии и&nbsp;дегустации.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            noValidate
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Электронная почта
            </label>
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-[#1c1c1a]/35" />
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                placeholder="ваш@email.com"
                disabled={status === "loading" || status === "success"}
                className="h-12 w-full rounded-full border border-[#1c1c1a]/10 bg-white/60 pr-4 pl-10 text-sm text-[#1c1c1a] outline-none backdrop-blur-md placeholder:text-[#1c1c1a]/35 focus:border-[#1c1c1a]/25"
              />
            </div>
            <motion.button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="h-12 rounded-full bg-black px-6 text-sm font-medium text-white disabled:opacity-60"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {status === "loading" ? "Отправляем…" : "Подписаться"}
            </motion.button>
          </form>

          <p className="mt-3 min-h-5 text-sm" role="status" aria-live="polite">
            {status === "error" && (
              <span className="text-[#8C5A4A]">Проверьте адрес.</span>
            )}
            {status === "success" && (
              <span className="inline-flex items-center gap-1.5 text-[#5A7A8C]">
                <Check className="size-3.5" />
                Готово. Добро пожаловать в {BRAND}.
              </span>
            )}
          </p>

          <PourGlass active={status === "success"} />
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <nav aria-label="Карта сайта">
            <p className="text-[11px] tracking-[0.18em] text-[#1c1c1a]/40 uppercase">
              Навигация
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#1c1c1a]/65 hover:text-[#1c1c1a]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-[11px] tracking-[0.18em] text-[#1c1c1a]/40 uppercase">
              Контакты
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-[#1c1c1a]/65">
              <li>
                <a href="mailto:hello@muna.farm">hello@muna.farm</a>
              </li>
              <li>Сконе, Швеция</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-[#1c1c1a]/8 pt-6 text-xs text-[#1c1c1a]/40 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {BRAND}. Все права защищены.
        </p>
        <div className="flex gap-5">
          <Link href="/privacy">Конфиденциальность</Link>
          <Link href="/terms">Условия</Link>
        </div>
      </div>
    </footer>
  );
}

function PourGlass({ active }: { active: boolean }) {
  return (
    <div className="relative mt-8 h-28 w-20" aria-hidden>
      <AnimatePresence>
        {active &&
          [0, 1, 2, 3].map((i) => (
            <motion.span
              key={i}
              className="absolute left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-white"
              initial={{ top: 0, opacity: 0 }}
              animate={{ top: [0, 56], opacity: [0, 1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, repeat: 2, ease: EASE }}
              style={{ marginLeft: (i - 1.5) * 4 }}
            />
          ))}
      </AnimatePresence>
      <div className="absolute bottom-0 left-1/2 h-20 w-16 -translate-x-1/2 overflow-hidden rounded-b-[22px] rounded-t-[4px] border border-white/80 bg-white/30 backdrop-blur-sm">
        <motion.div
          className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-[#fffdf8] to-[#eae4d9]"
          initial={{ height: "10%" }}
          animate={{ height: active ? "75%" : "10%" }}
          transition={{ duration: 1.2, ease: EASE }}
        />
      </div>
    </div>
  );
}
