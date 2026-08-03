"use client";

import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardDescription } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Quote, Star, UserRound } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Patients Say"
          description="Real stories from patients who experienced our compassionate care and medical excellence."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="relative h-full">
                <Quote
                  size={32}
                  className="absolute right-6 top-6 text-lotus-pink/30"
                />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="fill-green text-green"
                    />
                  ))}
                </div>
                <CardDescription className="text-base italic">
                  &ldquo;{testimonial.review}&rdquo;
                </CardDescription>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-light-gray">
                    <UserRound size={20} className="text-navy/40" />
                  </div>
                  <p className="font-medium text-navy">{testimonial.patientName}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
