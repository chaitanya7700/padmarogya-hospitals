"use client";

import { facilities } from "@/data/facilities";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { motion } from "framer-motion";
import {
  BedDouble,
  Building2,
  HeartPulse,
  Monitor,
  Syringe,
  TestTube,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  HeartPulse,
  Syringe,
  BedDouble,
  TestTube,
  Monitor,
};

export function FacilitiesSection() {
  return (
    <section id="facilities" className="section-padding bg-light-gray">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          subtitle="Facilities"
          title="World-Class Infrastructure"
          description="Modern facilities equipped with the latest medical technology for superior patient care."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, i) => {
            const Icon = iconMap[facility.icon] ?? Building2;
            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="h-full">
                  <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-navy/5 to-green/10">
                    <div className="flex h-full items-center justify-center">
                      <Icon size={48} className="text-green/40" />
                    </div>
                  </div>
                  <CardTitle>{facility.name}</CardTitle>
                  <CardDescription className="mt-2">
                    {facility.description}
                  </CardDescription>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
