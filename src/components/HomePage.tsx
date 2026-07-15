"use client";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/hero/Hero";
import { StoryBento } from "@/components/story/StoryBento";
import { MilkBar } from "@/components/products/MilkBar";
import { CowToGlass } from "@/components/timeline/CowToGlass";
import { AppProviders, ThemeCanvas } from "@/components/providers/AppProviders";
import { testimonials } from "@/data/content";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HomePage() {
  return (
    <AppProviders>
      <ThemeCanvas>
        <SiteHeader />
        <main className="flex-1">
          <Hero />
          <StoryBento />
          <MilkBar />
          <CowToGlass />
          <Testimonials />
        </main>
        <SiteFooter />
      </ThemeCanvas>
    </AppProviders>
  );
}

function Testimonials() {
  return (
    <section className="px-5 py-20 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
        {testimonials.map((item, i) => (
          <motion.blockquote
            key={item.name}
            className="rounded-[24px] border border-[var(--graphite)]/[0.06] bg-white/35 p-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: EASE }}
          >
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
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
