"use client";

import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { motion } from "framer-motion";
import {
  Ambulance,
  ClipboardCheck,
  FlaskConical,
  Pill,
  Truck,
  UserRound,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  UserRound,
  Ambulance,
  FlaskConical,
  Pill,
  Truck,
  ClipboardCheck,
};

export function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Services"
          title="Comprehensive Healthcare Services"
          description="From routine checkups to emergency care, we offer a full spectrum of medical services under one roof."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? UserRound;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green">
                    <Icon size={24} />
                  </div>
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription className="mt-2">
                    {service.description}
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
