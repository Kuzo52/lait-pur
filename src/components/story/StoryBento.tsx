"use client";

import { motion } from "framer-motion";
import { storyTiles } from "@/data/content";
import { cn } from "@/lib/utils";
import { ClientOnly } from "@/components/ui/ClientOnly";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function StoryBento() {
  return (
    <section id="story" className="relative z-10 scroll-mt-24 px-5 py-20 md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-[11px] font-medium tracking-[0.22em] text-[#1c1c1a]/40 uppercase">
            История
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.08] tracking-wide text-[#1c1c1a]">
            Ферма как точный процесс
          </h2>
          <p className="mt-4 max-w-lg text-base text-[#1c1c1a]/60">
            MŪNA строится на цифрах и&nbsp;ритме: пастбище, чистота, цикл упаковки.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {storyTiles.map((tile, i) => (
            <ClientOnly
              key={tile.id}
              fallback={
                <article
                  className={cn(
                    "glass-card relative overflow-hidden rounded-[24px] p-6",
                    tile.span,
                  )}
                >
                  <TileBody tile={tile} />
                </article>
              }
            >
              <motion.article
                className={cn(
                  "glass-card relative overflow-hidden rounded-[24px] p-6",
                  tile.span,
                )}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.65, ease: EASE }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="pointer-events-none absolute -right-8 -bottom-10 font-display text-[7rem] leading-none text-[#1c1c1a]/[0.04]"
                  aria-hidden
                >
                  {tile.metric}
                </div>
                <TileBody tile={tile} />
              </motion.article>
            </ClientOnly>
          ))}
        </div>
      </div>
    </section>
  );
}

function TileBody({
  tile,
}: {
  tile: (typeof storyTiles)[number];
}) {
  return (
    <div className="relative z-10 flex h-full min-h-[160px] flex-col">
      <p className="text-[11px] tracking-[0.18em] text-[#1c1c1a]/40 uppercase">
        {tile.eyebrow}
      </p>
      <h3 className="mt-3 font-display text-2xl tracking-wide text-[#1c1c1a]">
        {tile.title}
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#1c1c1a]/60">
        {tile.body}
      </p>
      <div className="mt-auto flex items-end justify-between pt-8">
        <p className="font-display text-4xl text-[#1c1c1a]">{tile.metric}</p>
        <p className="max-w-[8rem] text-right text-[11px] text-[#1c1c1a]/45">
          {tile.metricLabel}
        </p>
      </div>
    </div>
  );
}
