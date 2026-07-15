"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, Sun, Droplets } from "lucide-react";
import { RevealImage } from "@/components/ui/RevealImage";
import { storyTiles } from "@/data/content";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const icons = {
  cows: Sun,
  organic: Leaf,
  packaging: Recycle,
  craft: Droplets,
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
          <h2 className="font-display text-[clamp(2.2rem,4.4vw,3.5rem)] leading-[1.1] text-[var(--graphite)]">
            Ферма, где вкус начинается с&nbsp;тишины
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--graphite)]/60">
            Три принципа Lait&nbsp;Pur: спокойные животные, чистая органика
            и&nbsp;упаковка без&nbsp;послевкусия в&nbsp;земле.
          </p>
        </motion.div>

        <div className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {storyTiles.map((tile, i) => {
            const Icon = icons[tile.id as keyof typeof icons];
            const isHero = tile.id === "cows";

            return (
              <motion.article
                key={tile.id}
                className={cn(
                  "group glass-card relative overflow-hidden rounded-[24px]",
                  tile.span,
                )}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: EASE }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <RevealImage
                  src={tile.image}
                  alt={tile.imageAlt}
                  className={cn(
                    "absolute inset-0",
                    isHero ? "opacity-100" : "opacity-90",
                  )}
                  imgClassName="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div
                  className={cn(
                    "absolute inset-0",
                    isHero
                      ? "bg-gradient-to-t from-[var(--graphite)]/75 via-[var(--graphite)]/25 to-transparent"
                      : "bg-gradient-to-t from-[var(--graphite)]/70 via-[var(--graphite)]/30 to-[var(--graphite)]/10",
                  )}
                />

                <div
                  className={cn(
                    "relative z-10 flex h-full flex-col p-7",
                    isHero ? "min-h-[360px] justify-end md:min-h-[460px]" : "min-h-[240px] justify-end",
                  )}
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <p className="text-[11px] font-medium tracking-[0.18em] text-white/65 uppercase">
                      {tile.eyebrow}
                    </p>
                    <span className="flex size-10 items-center justify-center rounded-[12px] border border-white/25 bg-white/15 text-white backdrop-blur-md">
                      <Icon className="size-4" strokeWidth={1.6} />
                    </span>
                  </div>
                  <h3
                    className={cn(
                      "font-display text-white",
                      isHero ? "text-3xl md:text-4xl" : "text-2xl",
                    )}
                  >
                    {tile.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80 md:text-[15px]">
                    {tile.body}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
