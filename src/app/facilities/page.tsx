import { MainLayout } from "@/components/layout/MainLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facilities | Padmarogya Hospitals",
  description:
    "Modern hospital infrastructure including ICU, operation theatres, patient rooms, laboratory, and advanced medical equipment.",
};

export default function FacilitiesPage() {
  return (
    <MainLayout>
      <PageHeader
        subtitle="Facilities"
        title="World-Class Infrastructure"
        description="State-of-the-art facilities designed for superior patient care."
      />
      <FacilitiesSection />
    </MainLayout>
  );
}
