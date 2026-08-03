import { MainLayout } from "@/components/layout/MainLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Padmarogya Hospitals",
  description:
    "Get in touch with Padmarogya Hospitals for appointments, enquiries, or emergency assistance.",
};

export default function ContactPage() {
  return (
    <MainLayout>
      <PageHeader
        subtitle="Contact"
        title="Get in Touch"
        description="We're here to help with appointments, enquiries, and emergency assistance."
      />
      <ContactSection />
    </MainLayout>
  );
}
