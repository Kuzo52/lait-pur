"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    className: "left-[-8%] top-[8%] size-[42vw] max-w-[520px] bg-[#FFF8EE]",
    animate: { x: [0, 40, -20, 0], y: [0, 30, 10, 0] },
    duration: 18,
  },
  {
    className: "right-[-6%] top-[28%] size-[38vw] max-w-[480px] bg-[#D9EAF3]",
    animate: { x: [0, -35, 15, 0], y: [0, 25, -20, 0] },
    duration: 22,
  },
  {
    className: "bottom-[6%] left-[25%] size-[34vw] max-w-[420px] bg-[#E8F0E0]",
    animate: { x: [0, 25, -30, 0], y: [0, -20, 15, 0] },
    duration: 20,
  },
];

export function FloatingBlobs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-30 blur-3xl ${blob.className}`}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
