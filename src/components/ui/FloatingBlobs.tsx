"use client";

import { motion } from "framer-motion";
import { ClientOnly } from "@/components/ui/ClientOnly";

function BlobsMotion() {
  return (
    <>
      <motion.div
        className="absolute top-[-12%] left-[-10%] h-[50vh] w-[55vw] max-w-[560px] rounded-full bg-[#F3EFE9] opacity-70 blur-[110px]"
        animate={{ x: [0, 40, -20, 0], y: [0, 30, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[35%] right-[-12%] h-[45vh] w-[45vw] max-w-[480px] rounded-full bg-[#E6ECED] opacity-50 blur-[120px]"
        animate={{ x: [0, -35, 15, 0], y: [0, 20, -25, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[20%] h-[40vh] w-[40vw] max-w-[420px] rounded-full bg-[#EAE4D9] opacity-45 blur-[100px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
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
            <div className="absolute top-[-12%] left-[-10%] h-[50vh] w-[55vw] max-w-[560px] rounded-full bg-[#F3EFE9] opacity-70 blur-[110px]" />
            <div className="absolute top-[35%] right-[-12%] h-[45vh] w-[45vw] max-w-[480px] rounded-full bg-[#E6ECED] opacity-50 blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[20%] h-[40vh] w-[40vw] max-w-[420px] rounded-full bg-[#EAE4D9] opacity-45 blur-[100px]" />
          </>
        }
      >
        <BlobsMotion />
      </ClientOnly>
    </div>
  );
}
