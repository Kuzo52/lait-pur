"use client";

import { motion } from "framer-motion";
import { ClientOnly } from "@/components/ui/ClientOnly";

/** Абстрактная «жидкая» форма — вместо фото бутылки. */
export function LiquidOrb({
  accent = "#C9B8A0",
  className = "",
}: {
  accent?: string;
  className?: string;
}) {
  return (
    <ClientOnly
      fallback={
        <div
          className={`relative aspect-square w-full max-w-[320px] ${className}`}
          aria-hidden
        >
          <div
            className="absolute inset-[12%] rounded-full opacity-80 blur-2xl"
            style={{ background: accent }}
          />
          <div className="absolute inset-[18%] rounded-full border border-white/70 bg-white/40 backdrop-blur-md" />
        </div>
      }
    >
      <motion.div
        className={`relative aspect-square w-full max-w-[320px] ${className}`}
        animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <motion.div
          className="absolute inset-[8%] rounded-full opacity-50 blur-3xl"
          style={{ background: accent }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-[16%] overflow-hidden rounded-[42%] border border-white/80 bg-gradient-to-br from-white/70 via-white/25 to-transparent shadow-[0_30px_60px_rgba(28,28,26,0.1)] backdrop-blur-xl">
          <motion.div
            className="absolute inset-x-[-10%] bottom-0 h-[72%] rounded-t-[100%]"
            style={{
              background: `linear-gradient(180deg, #fffdf8 0%, ${accent}55 100%)`,
            }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute top-6 left-5 h-2/3 w-3 rounded-full bg-white/55" />
        </div>
        <div className="absolute top-[10%] left-1/2 h-8 w-14 -translate-x-1/2 rounded-t-lg border border-white/50 bg-[#1c1c1a]/80" />
      </motion.div>
    </ClientOnly>
  );
}
