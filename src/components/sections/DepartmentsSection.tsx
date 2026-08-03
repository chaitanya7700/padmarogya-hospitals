"use client";

import { departments } from "@/data/departments";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  Baby,
  Bone,
  Brain,
  Heart,
  Microscope,
  Scissors,
  Siren,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Bone,
  Brain,
  Baby,
  Stethoscope,
  Siren,
  Microscope,
  Scissors,
};

export function DepartmentsSection() {
  return (
    <section id="departments" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          subtitle="Departments"
          title="Multi-Specialty Excellence"
          description="Comprehensive medical care across a wide range of specialties with expert doctors and modern facilities."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((dept, i) => {
            const Icon = iconMap[dept.icon] ?? Stethoscope;
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/departments/${dept.slug}`}>
                  <Card className="h-full">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-lotus-pink/20 text-navy">
                      <Icon size={24} />
                    </div>
                    <CardTitle>{dept.name}</CardTitle>
                    <CardDescription className="mt-2 line-clamp-3">
                      {dept.description}
                    </CardDescription>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href="/departments" variant="outline">
            View All Departments
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
