"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useCallback, useRef, type MouseEvent } from "react";
import { useProductTheme } from "@/context/ProductThemeContext";
import { BRAND } from "@/data/content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function MilkBottle() {
  const { product } = useProductTheme();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const springX = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.6 });
  const springY = useSpring(my, { stiffness: 120, damping: 18, mass: 0.6 });

  const rotateY = useTransform(springX, [-0.5, 0.5], [-14, 14]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const liquidY = useTransform(springY, [-0.5, 0.5], [-6, 6]);
  const liquidX = useTransform(springX, [-0.5, 0.5], [-4, 4]);
  const gleamX = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const onMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(x);
      my.set(y);
    },
    [mx, my],
  );

  const onLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto flex h-[min(68vh,520px)] w-full max-w-[320px] items-center justify-center perspective-[1200px]"
      aria-hidden
    >
      <motion.div
        className="absolute inset-8 rounded-full opacity-60 blur-3xl"
        animate={{
          background: [
            `radial-gradient(circle, ${product.accent}55, transparent 70%)`,
            `radial-gradient(circle, ${product.accent}88, transparent 70%)`,
            `radial-gradient(circle, ${product.accent}55, transparent 70%)`,
          ],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-[460px] w-[190px]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Cap */}
        <div
          className="absolute left-1/2 top-0 z-30 h-11 w-[72px] -translate-x-1/2 rounded-t-[10px]"
          style={{
            background: `linear-gradient(180deg, ${product.accentDeep}, ${product.accent})`,
            boxShadow: "inset 0 2px 0 rgba(255,255,255,0.25)",
            transform: "translateZ(24px)",
          }}
        >
          <div className="absolute inset-x-2 top-2 h-1.5 rounded-full bg-white/25" />
        </div>

        {/* Neck */}
        <div
          className="absolute left-1/2 top-9 z-20 h-16 w-[58px] -translate-x-1/2 rounded-b-xl"
          style={{
            background:
              "linear-gradient(90deg, rgba(220,230,235,0.55), rgba(255,255,255,0.75), rgba(210,220,228,0.5))",
            border: "1px solid rgba(255,255,255,0.55)",
            transform: "translateZ(16px)",
          }}
        />

        {/* Body glass */}
        <div
          className="absolute left-1/2 top-[72px] z-10 h-[360px] w-[180px] -translate-x-1/2 overflow-hidden rounded-[42%_42%_48%_48%/28%_28%_42%_42%]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.55), rgba(230,238,242,0.25) 45%, rgba(255,255,255,0.4))",
            border: "1.5px solid rgba(255,255,255,0.65)",
            boxShadow:
              "0 30px 60px rgba(28,28,26,0.12), inset 0 0 40px rgba(255,255,255,0.35)",
            transform: "translateZ(8px)",
            backdropFilter: "blur(2px)",
          }}
        >
          {/* Milk liquid */}
          <motion.div
            className="absolute inset-x-0 bottom-0 origin-bottom"
            style={{
              x: liquidX,
              y: liquidY,
              background: `linear-gradient(180deg, ${product.milk}ee 0%, ${product.milk} 55%, ${product.accent}33 100%)`,
            }}
            key={product.id}
            initial={{ height: "0%" }}
            animate={{ height: "78%" }}
            transition={{ duration: 1.1, ease: EASE }}
          >
            <motion.div
              className="absolute -top-3 left-[-10%] right-[-10%] h-8"
              style={{
                background: `radial-gradient(ellipse at center, ${product.milk} 0%, transparent 70%)`,
              }}
              animate={{ x: [-8, 8, -8] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div
              className="absolute inset-x-4 top-6 h-16 rounded-full opacity-40 blur-md"
              style={{ background: product.accent }}
            />
          </motion.div>

          {/* Label */}
          <motion.div
            className="absolute left-1/2 top-[42%] z-20 w-[118px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[14px] px-3 py-4 text-center"
            style={{
              background: product.label,
              border: "1px solid rgba(28,28,26,0.06)",
              boxShadow: "0 8px 24px rgba(28,28,26,0.08)",
              transform: "translateZ(28px)",
            }}
            key={`label-${product.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="font-display text-[10px] tracking-[0.18em] text-[var(--graphite)]/50 uppercase">
              {BRAND}
            </p>
            <p className="mt-1 font-display text-lg leading-tight text-[var(--graphite)]">
              {product.name}
            </p>
            <p className="mt-1 text-[10px] tracking-wide text-[var(--graphite)]/55">
              {product.volume}
            </p>
          </motion.div>

          {/* Gleam */}
          <motion.div
            className="pointer-events-none absolute top-8 bottom-10 left-4 w-5 rounded-full bg-gradient-to-b from-white/80 via-white/25 to-transparent"
            style={{ x: gleamX }}
          />
          <div className="pointer-events-none absolute top-16 right-5 h-24 w-2.5 rounded-full bg-white/25" />
        </div>

        {/* Base shadow */}
        <motion.div
          className="absolute bottom-2 left-1/2 h-6 w-28 -translate-x-1/2 rounded-[100%] bg-[var(--graphite)]/15 blur-md"
          animate={{ scaleX: [1, 1.08, 1], opacity: [0.35, 0.5, 0.35] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
