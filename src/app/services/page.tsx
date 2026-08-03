import { MainLayout } from "@/components/layout/MainLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServicesSection } from "@/components/sections/ServicesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Padmarogya Hospitals",
  description:
    "Comprehensive healthcare services including OPD, emergency, diagnostics, pharmacy, ambulance, and health checkup packages.",
};

export default function ServicesPage() {
  return (
    <MainLayout>
      <PageHeader
        subtitle="Services"
        title="Healthcare Services"
        description="Full spectrum of medical services for you and your family."
      />
      <ServicesSection />
    </MainLayout>
  );
}
