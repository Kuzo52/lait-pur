"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.035, delayChildren: 0.15 },
  },
};

const letter: Variants = {
  hidden: { y: "110%", opacity: 0, rotate: 4 },
  visible: {
    y: "0%",
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.85, ease: EASE },
  },
};

interface LetterRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p";
}

export function LetterReveal({
  text,
  className,
  as: Tag = "h1",
}: LetterRevealProps) {
  const words = text.split(" ");

  return (
    <Tag className={cn("font-display", className)}>
      <motion.span
        className="inline-flex flex-wrap justify-center gap-x-[0.28em] gap-y-1"
        variants={container}
        initial="hidden"
        animate="visible"
        aria-label={text}
      >
        {words.map((word, wi) => (
          <span key={`${word}-${wi}`} className="inline-flex overflow-hidden">
            {Array.from(word).map((char, ci) => (
              <motion.span
                key={`${wi}-${ci}`}
                variants={letter}
                className="inline-block will-change-transform"
                aria-hidden
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
