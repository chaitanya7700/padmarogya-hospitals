"use client";

import { doctors } from "@/data/doctors";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Clock, UserRound } from "lucide-react";
import Link from "next/link";

interface DoctorsSectionProps {
  limit?: number;
}

export function DoctorsSection({ limit }: DoctorsSectionProps) {
  const displayedDoctors = limit ? doctors.slice(0, limit) : doctors;

  return (
    <section id="doctors" className="section-padding bg-light-gray">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Doctors"
          title="Meet Our Expert Team"
          description="Highly qualified specialists dedicated to providing the best medical care for you and your family."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedDoctors.map((doctor, i) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/doctors/${doctor.slug}`}>
                <Card className="h-full text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green/20 to-lotus-pink/20">
                    <UserRound size={40} className="text-navy/40" />
                  </div>
                  <CardTitle className="text-lg">{doctor.name}</CardTitle>
                  <Badge variant="green" className="mt-2">
                    {doctor.specialization}
                  </Badge>
                  <CardDescription className="mt-3">
                    {doctor.qualification}
                  </CardDescription>
                  <div className="mt-3 flex items-center justify-center gap-1 text-xs text-text-muted">
                    <Clock size={14} />
                    {doctor.availability}
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {limit && (
          <div className="mt-10 text-center">
            <ButtonLink href="/doctors" variant="secondary">
              View All Doctors
            </ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}
