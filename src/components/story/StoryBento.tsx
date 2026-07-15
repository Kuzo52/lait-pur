"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, Sun, Droplets } from "lucide-react";
import { storyTiles } from "@/data/content";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const icons = {
  cows: Sun,
  organic: Leaf,
  packaging: Recycle,
  craft: Droplets,
} as const;

const accents = {
  sage: "from-[#C5D5C0]/50 to-transparent",
  sky: "from-[#B8D4E8]/55 to-transparent",
  cream: "from-[#E8DFD0]/60 to-transparent",
  graphite: "from-[var(--graphite)]/[0.06] to-transparent",
} as const;

export function StoryBento() {
  return (
    <section id="story" className="relative scroll-mt-24 px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--graphite)]/45 uppercase">
            Our Story
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight text-[var(--graphite)]">
            Ферма, где вкус начинается с&nbsp;тишины
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--graphite)]/60">
            Три принципа Lait&nbsp;Pur: спокойные животные, чистая органика
            и&nbsp;упаковка, которая не&nbsp;остаётся послевкусием в&nbsp;земле.
          </p>
        </motion.div>

        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {storyTiles.map((tile, i) => {
            const Icon = icons[tile.id as keyof typeof icons];
            return (
              <motion.article
                key={tile.id}
                className={cn(
                  "group relative overflow-hidden rounded-[24px] border border-[var(--graphite)]/[0.06] bg-white/40 p-7 backdrop-blur-sm",
                  tile.span,
                )}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: EASE }}
                whileHover={{ y: -4 }}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-500 group-hover:opacity-100",
                    accents[tile.accent],
                  )}
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <p className="text-[11px] font-medium tracking-[0.18em] text-[var(--graphite)]/45 uppercase">
                      {tile.eyebrow}
                    </p>
                    <motion.span
                      className="flex size-10 items-center justify-center rounded-[12px] border border-[var(--graphite)]/8 bg-white/55 text-[var(--graphite)]"
                      whileHover={{ rotate: -8, scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    >
                      <Icon className="size-4" strokeWidth={1.6} />
                    </motion.span>
                  </div>

                  <h3
                    className={cn(
                      "font-display text-[var(--graphite)]",
                      tile.id === "cows"
                        ? "text-3xl md:text-4xl"
                        : "text-2xl",
                    )}
                  >
                    {tile.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--graphite)]/60 md:text-[15px]">
                    {tile.body}
                  </p>

                  {tile.id === "cows" && (
                    <div className="mt-auto pt-10">
                      <FloatingHerd />
                    </div>
                  )}

                  {tile.id === "organic" && (
                    <div className="mt-auto flex items-end gap-1 pt-8">
                      {[92, 100, 88, 96].map((h, idx) => (
                        <motion.div
                          key={idx}
                          className="w-3 rounded-t-full bg-[#7FA892]/70"
                          style={{ height: h * 0.45 }}
                          animate={{ scaleY: [1, 1.12, 1] }}
                          transition={{
                            duration: 2.2 + idx * 0.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: idx * 0.15,
                          }}
                        />
                      ))}
                      <span className="ml-2 self-center text-xs text-[var(--graphite)]/45">
                        травяной индекс
                      </span>
                    </div>
                  )}

                  {tile.id === "packaging" && (
                    <motion.div
                      className="mt-auto flex justify-end pt-6"
                      animate={{ rotate: [0, 6, 0, -6, 0] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="relative h-16 w-10 rounded-[10px] border border-[var(--graphite)]/15 bg-white/70">
                        <div className="absolute inset-x-1.5 top-2 bottom-2 rounded-[6px] border border-dashed border-[#9BB8C9]/60" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FloatingHerd() {
  return (
    <div className="relative h-20 w-full max-w-sm">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 rounded-full bg-[var(--graphite)]/8"
          style={{
            width: 48 + i * 14,
            height: 28 + i * 4,
            left: 12 + i * 70,
          }}
          animate={{ y: [0, -6 - i * 2, 0], x: [0, 4, 0] }}
          transition={{
            duration: 3.4 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          <div className="absolute -top-3 left-1/2 size-5 -translate-x-1/2 rounded-full bg-[var(--graphite)]/12" />
          <div className="absolute -top-1 left-[55%] size-2 rounded-full bg-[var(--graphite)]/20" />
        </motion.div>
      ))}
    </div>
  );
}
