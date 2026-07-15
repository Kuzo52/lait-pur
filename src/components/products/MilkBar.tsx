"use client";

import { AnimatePresence, motion } from "framer-motion";
import { products, type ProductId } from "@/data/content";
import { useProductTheme } from "@/context/ProductThemeContext";
import { RevealImage } from "@/components/ui/RevealImage";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function MilkBar() {
  const { product, setProductId } = useProductTheme();

  return (
    <section
      id="milk-bar"
      className="relative scroll-mt-24 overflow-hidden py-24 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 max-w-2xl px-5 md:px-0"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--graphite)]/45 uppercase">
            Молочная полка
          </p>
          <h2 className="font-display text-[clamp(2.2rem,4.4vw,3.5rem)] leading-[1.1] text-[var(--graphite)]">
            Четыре характера. Одна&nbsp;ферма.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--graphite)]/60">
            Выберите вкус&nbsp;— фон мягко окрашивается в&nbsp;пастельный оттенок
            упаковки.
          </p>
        </motion.div>

        {/* Мобилка: горизонтальный скролл; десктоп: сетка */}
        <div className="mb-10 md:px-0">
          <div className="-mx-0 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 scrollbar-none md:mx-0 md:grid md:snap-none md:grid-cols-2 md:overflow-visible md:px-0 xl:grid-cols-4">
            {products.map((item) => {
              const active = item.id === product.id;
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => setProductId(item.id as ProductId)}
                  className={cn(
                    "group glass-card relative w-[78vw] max-w-[280px] shrink-0 snap-center overflow-hidden rounded-[22px] p-3 text-left transition-[transform,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:w-auto md:max-w-none",
                    active && "ring-1 ring-[var(--graphite)]/15 shadow-xl",
                  )}
                  style={{ backgroundColor: active ? item.hoverTint : undefined }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setProductId(item.id as ProductId)}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ backgroundColor: item.hoverTint }}
                  />
                  <div className="relative z-10">
                    <div className="relative mb-3 aspect-[4/5] overflow-hidden rounded-[16px]">
                      <RevealImage
                        src={item.image}
                        alt={item.imageAlt}
                        className="absolute inset-0"
                        imgClassName="transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                      <span
                        className="absolute top-3 left-3 size-2.5 rounded-full shadow"
                        style={{ background: item.accent }}
                      />
                    </div>
                    <p className="font-display text-2xl text-[var(--graphite)]">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-[var(--graphite)]/55">
                      {item.tagline}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="px-5 md:px-0">
          <motion.div
            className="glass-card overflow-hidden rounded-[28px]"
            animate={{ backgroundColor: product.hoverTint }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <div className="grid items-stretch gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="flex flex-col justify-center p-8 md:p-12"
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
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="relative min-h-[280px] lg:min-h-[480px]"
                >
                  <RevealImage
                    src={product.image}
                    alt={product.imageAlt}
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/5" />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
