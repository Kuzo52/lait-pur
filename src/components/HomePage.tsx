"use client";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/about/AboutSection";
import { StoryBento } from "@/components/story/StoryBento";
import { MilkBar } from "@/components/products/MilkBar";
import { CowToGlass } from "@/components/timeline/CowToGlass";
import { AppProviders, ThemeCanvas } from "@/components/providers/AppProviders";
import { testimonials } from "@/data/content";
import { motion } from "framer-motion";
import { ClientOnly } from "@/components/ui/ClientOnly";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HomePage() {
  return (
    <AppProviders>
      <ThemeCanvas>
        <div className="relative z-10 flex min-h-[100dvh] flex-col tech-surface">
          <SiteHeader />
          <main className="relative z-10 flex-1 bg-transparent">
            <Hero />
            <AboutSection />
            <StoryBento />
            <MilkBar />
            <CowToGlass />
            <Testimonials />
          </main>
          <SiteFooter />
        </div>
      </ThemeCanvas>
    </AppProviders>
  );
}

function Testimonials() {
  return (
    <section className="surface-stone relative z-10 px-5 py-16 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
        {testimonials.map((item, i) => (
          <ClientOnly
            key={item.name}
            fallback={
              <blockquote className="glass-card rounded-[24px] p-7">
                <QuoteBody item={item} />
              </blockquote>
            }
          >
            <motion.blockquote
              className="glass-card rounded-[24px] p-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <QuoteBody item={item} />
            </motion.blockquote>
          </ClientOnly>
        ))}
      </div>
    </section>
  );
}

function QuoteBody({
  item,
}: {
  item: (typeof testimonials)[number];
}) {
  return (
    <>
      <p className="font-display text-2xl leading-snug tracking-wide text-[#1c1c1a]">
        «{item.quote}»
      </p>
      <footer className="mt-6 text-sm text-[#1c1c1a]/50">
        <cite className="not-italic font-medium text-[#1c1c1a]">{item.name}</cite>
        {" · "}
        {item.role}
      </footer>
    </>
  );
}
