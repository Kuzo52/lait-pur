"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { timelineSteps } from "@/data/content";
import { ClientOnly } from "@/components/ui/ClientOnly";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function CowToGlass() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.5"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  return (
    <section
      id="journey"
      ref={ref}
      className="relative z-10 scroll-mt-24 px-5 py-20 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 text-[11px] font-medium tracking-[0.22em] text-[#1c1c1a]/40 uppercase">
            Путь
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.08] tracking-wide text-[#1c1c1a]">
            От фермы до стакана
          </h2>
          <p className="mt-4 text-base text-[#1c1c1a]/60">
            Линия заполняется по&nbsp;скроллу&nbsp;— как поток молока.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-2 bottom-2 left-[15px] w-px bg-[#1c1c1a]/10 md:left-1/2 md:-translate-x-1/2" />
          <ClientOnly>
            <motion.div
              className="absolute top-2 left-[15px] w-px origin-top md:left-1/2 md:-translate-x-1/2"
              style={{
                scaleY: progress,
                height: "calc(100% - 1rem)",
                background:
                  "linear-gradient(180deg, #fffdf8, #eae4d9 50%, #c5d5c0)",
              }}
            />
          </ClientOnly>

          <ol className="relative space-y-10">
            {timelineSteps.map((step, index) => (
              <TimelineItem
                key={step.id}
                index={index}
                total={timelineSteps.length}
                progress={progress}
                title={step.title}
                time={step.time}
                body={step.body}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  index,
  total,
  progress,
  title,
  time,
  body,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  title: string;
  time: string;
  body: string;
}) {
  const threshold = (index + 0.3) / total;
  const opacity = useTransform(progress, [threshold - 0.1, threshold], [0.4, 1]);
  const isLeft = index % 2 === 0;

  return (
    <motion.li
      style={{ opacity }}
      className={`relative flex gap-5 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <div
        className={`hidden w-1/2 md:block ${isLeft ? "pr-10 text-right" : "pl-10 text-left"}`}
      >
        <div className="glass-card inline-block w-full max-w-sm rounded-[20px] p-5 text-left">
          <p className="text-[11px] tracking-[0.18em] text-[#1c1c1a]/40 uppercase">
            {time}
          </p>
          <h3 className="mt-2 font-display text-2xl tracking-wide text-[#1c1c1a]">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#1c1c1a]/60">{body}</p>
        </div>
      </div>

      <div className="relative z-10 flex w-8 shrink-0 justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
        <span className="mt-1 flex size-8 items-center justify-center rounded-full border border-white bg-[#FAF8F5] shadow-sm">
          <span className="size-2 rounded-full bg-[#1c1c1a]" />
        </span>
      </div>

      <div className="glass-card flex-1 rounded-[20px] p-5 md:hidden">
        <p className="text-[11px] tracking-[0.18em] text-[#1c1c1a]/40 uppercase">
          {time}
        </p>
        <h3 className="mt-2 font-display text-2xl tracking-wide text-[#1c1c1a]">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#1c1c1a]/60">{body}</p>
      </div>

      <div className="hidden w-1/2 md:block" />
    </motion.li>
  );
}
