"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ClientOnly } from "@/components/ui/ClientOnly";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

function ButtonInner({ children, className, href = "#" }: MagneticButtonProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-lg font-medium text-white transition-colors duration-300 hover:bg-neutral-800",
        className,
      )}
    >
      {children}
    </motion.a>
  );
}

/** Надёжная CTA: явный белый текст, без оверлеев, безопасный mount. */
export function MagneticButton(props: MagneticButtonProps) {
  return (
    <ClientOnly
      fallback={
        <a
          href={props.href ?? "#"}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-lg font-medium text-white",
            props.className,
          )}
        >
          {props.children}
        </a>
      }
    >
      <ButtonInner {...props} />
    </ClientOnly>
  );
}
