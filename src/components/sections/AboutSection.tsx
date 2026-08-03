"use client";

import { aboutContent } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Eye, Heart, Target } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-light-gray">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          subtitle="About Us"
          title="Padmarogya Hospitals"
          description={aboutContent.introduction}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Mission", content: aboutContent.mission },
            { icon: Eye, title: "Vision", content: aboutContent.vision },
            {
              icon: Heart,
              title: "Patient-First",
              content: aboutContent.patientFirstApproach,
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green">
                  <item.icon size={24} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-text-muted leading-relaxed">
                  {item.content}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-center font-heading text-xl font-semibold text-navy">
            Our Core Values
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {aboutContent.values.map((value) => (
              <span
                key={value}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
