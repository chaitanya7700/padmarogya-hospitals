"use client";

import { galleryItems } from "@/data/gallery";
import { GALLERY_CATEGORIES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { useState } from "react";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? galleryItems.slice(0, 6)
      : galleryItems
          .filter((item) => item.category === activeCategory)
          .slice(0, 6);

  return (
    <section id="gallery" className="section-padding bg-light-gray">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          subtitle="Gallery"
          title="Life at Padmarogya"
          description="A glimpse into our hospital, team, events, and community outreach programs."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-navy text-white"
                : "bg-white text-text hover:bg-gray"
            }`}
          >
            All
          </button>
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-navy text-white"
                  : "bg-white text-text hover:bg-gray"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-navy/5 to-green/10 shadow-card"
            >
              <div className="flex h-full items-center justify-center">
                <ImageIcon size={48} className="text-navy/20" />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-sm font-medium text-white">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href="/gallery" variant="outline">
            View Full Gallery
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
