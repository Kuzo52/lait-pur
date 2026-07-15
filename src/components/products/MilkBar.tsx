"use client";

import { AnimatePresence, motion } from "framer-motion";
import { products, type ProductId } from "@/data/content";
import { useProductTheme } from "@/context/ProductThemeContext";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function MilkBar() {
  const { product, setProductId } = useProductTheme();

  return (
    <motion.section
      id="milk-bar"
      className="relative z-10 scroll-mt-24 overflow-hidden py-20 md:px-8 lg:px-10"
      animate={{ backgroundColor: product.bg }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl px-5 md:px-0">
          <p className="mb-3 text-[11px] font-medium tracking-[0.22em] text-[#1c1c1a]/40 uppercase">
            Линейка
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.08] tracking-wide text-[#1c1c1a]">
            Четыре вкуса одной фермы
          </h2>
          <p className="mt-4 max-w-lg text-base text-[#1c1c1a]/60">
            Классика и&nbsp;какао от&nbsp;стада; овёс и&nbsp;миндаль&nbsp;—
            растительная линия. Фон мягко принимает оттенок выбранного вкуса.
          </p>
        </div>

        <div className="mb-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 scrollbar-none md:grid md:snap-none md:grid-cols-4 md:overflow-visible md:px-0">
          {products.map((item) => {
            const active = item.id === product.id;
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setProductId(item.id as ProductId)}
                className={cn(
                  "glass-card relative w-[72vw] max-w-[260px] shrink-0 snap-center overflow-hidden rounded-[22px] p-5 text-left transition-[background-color,box-shadow] duration-500 md:w-auto md:max-w-none",
                  active && "ring-1 ring-black/10 shadow-lg",
                )}
                style={{ backgroundColor: active ? item.hoverTint : undefined }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setProductId(item.id as ProductId)}
              >
                <div
                  className="mb-6 flex h-24 items-end justify-between rounded-2xl px-4 py-3"
                  style={{
                    background: `linear-gradient(145deg, ${item.milk}, ${item.accent}66)`,
                  }}
                >
                  <span className="font-display text-3xl text-[#1c1c1a]/80">
                    {item.glyph}
                  </span>
                  <span
                    className="mb-1 size-3 rounded-full"
                    style={{ background: item.accentDeep }}
                  />
                </div>
                <p className="font-display text-2xl tracking-wide text-[#1c1c1a]">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-[#1c1c1a]/55">{item.tagline}</p>
              </motion.button>
            );
          })}
        </div>

        <div className="px-5 md:px-0">
          <motion.div
            className="glass-card overflow-hidden rounded-[28px]"
            animate={{ backgroundColor: product.hoverTint }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <div className="grid items-center gap-8 p-7 md:grid-cols-[1.1fr_0.9fr] md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <p className="text-[11px] tracking-[0.2em] text-[#1c1c1a]/40 uppercase">
                    Сигнал {product.glyph}
                  </p>
                  <p className="mt-2 font-display text-4xl tracking-wide text-[#1c1c1a] md:text-5xl">
                    {product.name}
                  </p>
                  <p className="mt-3 text-lg text-[#1c1c1a]/70">{product.tagline}</p>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-[#1c1c1a]/60">
                    {product.description}
                  </p>
                  <dl className="mt-8 grid max-w-sm grid-cols-3 gap-3 border-t border-[#1c1c1a]/10 pt-6">
                    {[
                      { label: "Объём", value: product.volume },
                      { label: "Ккал", value: product.calories },
                      { label: "Белок", value: product.protein },
                    ].map((s) => (
                      <div key={s.label}>
                        <dt className="text-[10px] tracking-[0.16em] text-[#1c1c1a]/40 uppercase">
                          {s.label}
                        </dt>
                        <dd className="mt-1 font-display text-xl text-[#1c1c1a]">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </motion.div>
              </AnimatePresence>

              <div className="mx-auto hidden w-full max-w-[200px] md:block">
                <div
                  className="aspect-square rounded-full opacity-80 blur-2xl"
                  style={{
                    background: `radial-gradient(circle, ${product.accent}99, transparent 70%)`,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
