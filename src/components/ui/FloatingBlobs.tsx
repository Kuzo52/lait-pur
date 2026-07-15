"use client";

import { motion } from "framer-motion";
import { ClientOnly } from "@/components/ui/ClientOnly";

function BlobsMotion() {
  return (
    <>
      <motion.div
        className="absolute top-[-15%] left-[-8%] h-[58vh] w-[58vw] max-w-[620px] rounded-full bg-[#E8F2F0] opacity-70 blur-[120px]"
        animate={{ x: [0, 45, -25, 0], y: [0, 35, 8, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[25%] right-[-15%] h-[50vh] w-[50vw] max-w-[520px] rounded-full bg-[#F5EDE3] opacity-65 blur-[130px]"
        animate={{ x: [0, -40, 18, 0], y: [0, 22, -28, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-12%] left-[18%] h-[42vh] w-[42vw] max-w-[440px] rounded-full bg-[#EEF1F6] opacity-55 blur-[110px]"
        animate={{ scale: [1, 1.12, 1], y: [0, -16, 0] }}
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
            <div className="absolute top-[-15%] left-[-8%] h-[58vh] w-[58vw] max-w-[620px] rounded-full bg-[#E8F2F0] opacity-70 blur-[120px]" />
            <div className="absolute top-[25%] right-[-15%] h-[50vh] w-[50vw] max-w-[520px] rounded-full bg-[#F5EDE3] opacity-65 blur-[130px]" />
            <div className="absolute bottom-[-12%] left-[18%] h-[42vh] w-[42vw] max-w-[440px] rounded-full bg-[#EEF1F6] opacity-55 blur-[110px]" />
          </>
        }
      >
        <BlobsMotion />
      </ClientOnly>
    </div>
  );
}
