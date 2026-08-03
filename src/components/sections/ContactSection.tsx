"use client";

import { contactInfo } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          subtitle="Contact Us"
          title="Get in Touch"
          description="Reach out for appointments, enquiries, or emergency assistance. We're here to help."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-navy">Address</h3>
                  <p className="mt-1 text-text-muted">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-navy">Phone</h3>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="mt-1 text-text-muted hover:text-green"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-navy">Email</h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="mt-1 text-text-muted hover:text-green"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl shadow-card">
              <iframe
                src={contactInfo.mapEmbedUrl}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Padmarogya Hospitals Location"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
