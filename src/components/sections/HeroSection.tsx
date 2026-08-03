"use client";

import { heroSlides } from "@/data/site-content";
import { ButtonLink } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 lotus-gradient opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8 lg:py-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-10 lg:grid-cols-2"
          >
            <div className="text-white">
              <p className="mb-3 font-marathi text-lg text-lotus-pink-light md:text-xl">
                {slide.subtitle}
              </p>
              <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-6 max-w-lg text-lg text-white/80">
                {slide.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href={slide.ctaPrimary.href} variant="secondary" size="lg">
                  {slide.ctaPrimary.label}
                </ButtonLink>
                <ButtonLink
                  href={slide.ctaSecondary.href}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-navy"
                >
                  {slide.ctaSecondary.label}
                </ButtonLink>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-navy-light shadow-2xl">
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-green/20 to-lotus-pink/20">
                  <div className="text-center text-white/60">
                    <Phone size={64} className="mx-auto mb-4 opacity-50" />
                    <p className="text-sm">Hospital imagery placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center justify-between">
          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-8 bg-green" : "w-2 bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
