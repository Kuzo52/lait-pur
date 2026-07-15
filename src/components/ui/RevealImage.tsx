"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ClientOnly } from "@/components/ui/ClientOnly";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface RevealImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

function StaticImg({
  src,
  alt,
  className,
  imgClassName,
  priority,
}: RevealImageProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn("h-full w-full object-cover rounded-3xl", imgClassName)}
      />
    </div>
  );
}

export function RevealImage(props: RevealImageProps) {
  return (
    <ClientOnly fallback={<StaticImg {...props} />}>
      <motion.div
        className={cn("img-shine relative overflow-hidden rounded-3xl", props.className)}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.85, ease: EASE }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={props.src}
          alt={props.alt}
          loading={props.priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={props.priority ? "high" : "auto"}
          className={cn(
            "h-full w-full object-cover rounded-3xl",
            props.imgClassName,
          )}
        />
      </motion.div>
    </ClientOnly>
  );
}
