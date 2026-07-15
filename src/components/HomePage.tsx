"use client";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/hero/Hero";
import { StoryBento } from "@/components/story/StoryBento";
import { MilkBar } from "@/components/products/MilkBar";
import { CowToGlass } from "@/components/timeline/CowToGlass";
import { AppProviders, ThemeCanvas } from "@/components/providers/AppProviders";
import { FloatingBlobs } from "@/components/ui/FloatingBlobs";
import { RevealImage } from "@/components/ui/RevealImage";
import { testimonials } from "@/data/content";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HomePage() {
  return (
    <AppProviders>
      <ThemeCanvas>
        <FloatingBlobs />
        <SiteHeader />
        <main className="relative z-10 flex-1">
          <Hero />
          <StoryBento />
          <MilkBar />
          <CowToGlass />
          <Testimonials />
        </main>
        <div className="relative z-10">
          <SiteFooter />
        </div>
      </ThemeCanvas>
    </AppProviders>
  );
}

function Testimonials() {
  return (
    <section className="px-5 py-20 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        {testimonials.map((item, i) => (
          <motion.blockquote
            key={item.name}
            className="glass-card group overflow-hidden rounded-[24px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: EASE }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative h-44 overflow-hidden">
              <RevealImage
                src={item.image}
                alt=""
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] to-transparent" />
            </div>
            <div className="p-8 pt-2">
              <p className="font-display text-xl leading-snug text-[var(--graphite)] md:text-2xl">
                «{item.quote}»
              </p>
              <footer className="mt-6 text-sm text-[var(--graphite)]/55">
                <cite className="not-italic font-medium text-[var(--graphite)]">
                  {item.name}
                </cite>
                {" · "}
                {item.role}
              </footer>
            </div>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
