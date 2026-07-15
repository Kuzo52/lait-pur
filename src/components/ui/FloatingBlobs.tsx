"use client";

import { motion } from "framer-motion";
import { ClientOnly } from "@/components/ui/ClientOnly";

function BlobsMotion() {
  return (
    <>
      <motion.div
        className="absolute top-[-10%] left-[-12%] h-[55vh] w-[55vw] max-w-[640px] rounded-full bg-[#F3EFE9] opacity-60 blur-[120px]"
        animate={{ x: [0, 50, -30, 0], y: [0, 40, 15, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[28%] right-[-14%] h-[50vh] w-[48vw] max-w-[580px] rounded-full bg-[#EAE4D9] opacity-45 blur-[150px]"
        animate={{ x: [0, -45, 20, 0], y: [0, 30, -25, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8%] left-[8%] h-[42vh] w-[42vw] max-w-[520px] rounded-full bg-[#E6ECED] opacity-40 blur-[100px]"
        animate={{ scale: [1, 1.12, 1], x: [0, 20, -10, 0], y: [0, -18, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

export function FloatingBlobs() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <ClientOnly
        fallback={
          <>
            <div className="absolute top-[-10%] left-[-12%] h-[55vh] w-[55vw] max-w-[640px] rounded-full bg-[#F3EFE9] opacity-60 blur-[120px]" />
            <div className="absolute top-[28%] right-[-14%] h-[50vh] w-[48vw] max-w-[580px] rounded-full bg-[#EAE4D9] opacity-45 blur-[150px]" />
            <div className="absolute bottom-[-8%] left-[8%] h-[42vh] w-[42vw] max-w-[520px] rounded-full bg-[#E6ECED] opacity-40 blur-[100px]" />
          </>
        }
      >
        <BlobsMotion />
      </ClientOnly>
    </div>
  );
}
