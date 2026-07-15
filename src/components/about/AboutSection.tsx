"use client";

import { motion } from "framer-motion";
import { BRAND, aboutPoints } from "@/data/content";
import { ClientOnly } from "@/components/ui/ClientOnly";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function AboutSection() {
  return (
    <section
      id="about"
      className="surface-sage relative z-10 scroll-mt-24 px-5 py-20 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="mb-3 text-[11px] font-medium tracking-[0.22em] text-[#1c1c1a]/40 uppercase">
              О&nbsp;нас
            </p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.08] tracking-wide text-[#1c1c1a]">
              Кто стоит за {BRAND}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#1c1c1a]/60">
              Мы&nbsp;делаем питьевую линейку с&nbsp;прозрачной логикой:
              классика и&nbsp;какао&nbsp;— от&nbsp;нашего стада; овёс
              и&nbsp;миндаль&nbsp;— растительная линия с&nbsp;той&nbsp;же
              дисциплиной розлива.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#1c1c1a]/60">
              Бренд родился в&nbsp;Сконе. Мы&nbsp;не&nbsp;собираем историю
              из&nbsp;чужих лозунгов&nbsp;— собираем её из&nbsp;утра
              на&nbsp;ферме и&nbsp;вечера на&nbsp;вашем столе.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-1">
            {aboutPoints.map((point, i) => (
              <ClientOnly
                key={point.title}
                fallback={
                  <article className="glass-card rounded-[22px] p-6">
                    <PointBody index={i} point={point} />
                  </article>
                }
              >
                <motion.article
                  className="glass-card rounded-[22px] p-6"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <PointBody index={i} point={point} />
                </motion.article>
              </ClientOnly>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PointBody({
  index,
  point,
}: {
  index: number;
  point: (typeof aboutPoints)[number];
}) {
  return (
    <div className="flex gap-5">
      <span className="font-display text-2xl text-[#1c1c1a]/25">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-display text-2xl tracking-wide text-[#1c1c1a]">
          {point.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#1c1c1a]/60 md:text-[15px]">
          {point.body}
        </p>
      </div>
    </div>
  );
}
