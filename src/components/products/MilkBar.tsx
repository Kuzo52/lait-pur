"use client";

import { AnimatePresence, motion } from "framer-motion";
import { products, type ProductId } from "@/data/content";
import { useProductTheme } from "@/context/ProductThemeContext";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function MilkBar() {
  const { product, setProductId } = useProductTheme();

  return (
    <section
      id="milk-bar"
      className="relative scroll-mt-24 overflow-hidden px-5 py-24 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--graphite)]/45 uppercase">
            The Milk Bar
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight text-[var(--graphite)]">
            Четыре характера. Одна&nbsp;ферма.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--graphite)]/60">
            Переключайте вкус&nbsp;— фон мягко меняет оттенок упаковки. Выберите
            свой ритуал утра.
          </p>
        </motion.div>

        <div
          role="tablist"
          aria-label="Линейка вкусов"
          className="mb-12 flex flex-wrap gap-2"
        >
          {products.map((item) => {
            const active = item.id === product.id;
            return (
              <button
                key={item.id}
                role="tab"
                type="button"
                aria-selected={active}
                onClick={() => setProductId(item.id as ProductId)}
                className={cn(
                  "relative rounded-[12px] px-5 py-2.5 text-sm font-medium transition-[color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97]",
                  active
                    ? "text-[var(--graphite)]"
                    : "text-[var(--graphite)]/50 hover:text-[var(--graphite)]/80",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="milk-tab"
                    className="absolute inset-0 rounded-[12px] border border-[var(--graphite)]/10 bg-white/55 shadow-[0_8px_30px_rgba(28,28,26,0.06)] backdrop-blur-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span
                    className="size-2.5 rounded-full"
                    style={{ background: item.accent }}
                  />
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="relative"
            >
              <p className="font-display text-4xl text-[var(--graphite)] md:text-5xl">
                {product.name}
              </p>
              <p className="mt-3 text-lg text-[var(--graphite)]/70">
                {product.tagline}
              </p>
              <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--graphite)]/60">
                {product.description}
              </p>

              <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-[var(--graphite)]/10 pt-8">
                {[
                  { label: "Объём", value: product.volume },
                  { label: "Ккал", value: product.calories },
                  { label: "Белок", value: product.protein },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-[11px] tracking-[0.16em] text-[var(--graphite)]/40 uppercase">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 font-display text-xl text-[var(--graphite)]">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-8 text-sm text-[var(--graphite)]/50">
                <span className="tracking-[0.14em] uppercase">Вкус&nbsp;— </span>
                {product.tasting}
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`pack-${product.id}`}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -12 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="relative mx-auto flex h-[420px] w-full max-w-sm items-center justify-center"
            >
              <div
                className="absolute inset-8 rounded-[40%] opacity-70 blur-3xl"
                style={{
                  background: `radial-gradient(circle, ${product.accent}66, transparent 68%)`,
                }}
              />
              <ProductPack
                name={product.name}
                accent={product.accent}
                accentDeep={product.accentDeep}
                milk={product.milk}
                label={product.label}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProductPack({
  name,
  accent,
  accentDeep,
  milk,
  label,
}: {
  name: string;
  accent: string;
  accentDeep: string;
  milk: string;
  label: string;
}) {
  return (
    <motion.div
      className="relative h-[360px] w-[160px]"
      animate={{ y: [0, -8, 0], rotate: [-1.5, 1.5, -1.5] }}
      transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className="absolute left-1/2 top-0 h-9 w-16 -translate-x-1/2 rounded-t-[8px]"
        style={{
          background: `linear-gradient(180deg, ${accentDeep}, ${accent})`,
        }}
      />
      <div
        className="absolute left-1/2 top-8 h-[310px] w-[150px] -translate-x-1/2 overflow-hidden rounded-[38%_38%_46%_46%/24%_24%_40%_40%] border border-white/60"
        style={{
          background: `linear-gradient(160deg, rgba(255,255,255,0.5), ${milk}99 40%, ${accent}44)`,
          boxShadow: "0 28px 50px rgba(28,28,26,0.14)",
        }}
      >
        <div
          className="absolute inset-x-0 bottom-0 h-[72%]"
          style={{
            background: `linear-gradient(180deg, ${milk}, ${accent}33)`,
          }}
        />
        <div
          className="absolute top-[38%] left-1/2 w-[108px] -translate-x-1/2 -translate-y-1/2 rounded-[12px] px-2 py-3 text-center"
          style={{ background: label }}
        >
          <p className="text-[9px] tracking-[0.2em] text-[var(--graphite)]/45 uppercase">
            Lait Pur
          </p>
          <p className="font-display text-base text-[var(--graphite)]">{name}</p>
        </div>
        <div className="absolute top-6 bottom-8 left-3 w-3 rounded-full bg-white/50" />
      </div>
    </motion.div>
  );
}
