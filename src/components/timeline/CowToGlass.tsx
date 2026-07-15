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

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function CowToGlass() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.55"],
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
      className="relative scroll-mt-24 px-5 py-24 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--graphite)]/45 uppercase">
            Cow-to-Glass
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight text-[var(--graphite)]">
            От&nbsp;фермы до&nbsp;стакана
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--graphite)]/60">
            Струйка молока заполняет путь по&nbsp;мере скролла&nbsp;— так
            же&nbsp;честно, как&nbsp;наш день на&nbsp;ферме.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute top-3 bottom-3 left-[19px] w-[3px] rounded-full bg-[var(--graphite)]/8 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            className="absolute top-3 left-[19px] w-[3px] origin-top rounded-full md:left-1/2 md:-translate-x-1/2"
            style={{
              scaleY: progress,
              height: "calc(100% - 1.5rem)",
              background:
                "linear-gradient(180deg, #FFFDF8 0%, #E8F0F4 40%, #C5D5C0 100%)",
              boxShadow: "0 0 18px rgba(255,253,248,0.8)",
            }}
          />

          <ol className="relative space-y-14 md:space-y-20">
            {timelineSteps.map((step, index) => (
              <TimelineItem
                key={step.id}
                index={index}
                title={step.title}
                time={step.time}
                body={step.body}
                progress={progress}
                total={timelineSteps.length}
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
  title,
  time,
  body,
  progress,
  total,
}: {
  index: number;
  title: string;
  time: string;
  body: string;
  progress: MotionValue<number>;
  total: number;
}) {
  const threshold = (index + 0.35) / total;
  const opacity = useTransform(progress, [threshold - 0.12, threshold], [0.35, 1]);
  const scale = useTransform(progress, [threshold - 0.12, threshold], [0.92, 1]);
  const nodeScale = useTransform(
    progress,
    [threshold - 0.08, threshold],
    [0.7, 1],
  );
  const isLeft = index % 2 === 0;

  return (
    <motion.li
      style={{ opacity, scale }}
      className={`relative flex gap-6 md:gap-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div
        className={`hidden w-1/2 md:block ${isLeft ? "pr-12 text-right" : "pl-12 text-left"}`}
      >
        <p className="text-xs tracking-[0.18em] text-[var(--graphite)]/40 uppercase">
          {time}
        </p>
        <h3 className="mt-2 font-display text-2xl text-[var(--graphite)] md:text-3xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--graphite)]/60 md:text-[15px]">
          {body}
        </p>
      </div>

      <div className="relative z-10 flex w-10 shrink-0 justify-center md:absolute md:left-1/2 md:w-auto md:-translate-x-1/2">
        <motion.span
          style={{ scale: nodeScale }}
          className="mt-1 flex size-10 items-center justify-center rounded-full border border-white/70 bg-[#FFFDF8] shadow-[0_8px_24px_rgba(28,28,26,0.1)]"
        >
          <span className="size-2.5 rounded-full bg-[var(--graphite)]/70" />
        </motion.span>
      </div>

      <div className="flex-1 pb-2 md:hidden">
        <p className="text-xs tracking-[0.18em] text-[var(--graphite)]/40 uppercase">
          {time}
        </p>
        <h3 className="mt-2 font-display text-2xl text-[var(--graphite)]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--graphite)]/60">
          {body}
        </p>
      </div>

      <div className="hidden w-1/2 md:block" />
    </motion.li>
  );
}
