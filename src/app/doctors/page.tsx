import { MainLayout } from "@/components/layout/MainLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { DoctorsSection } from "@/components/sections/DoctorsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctors | Padmarogya Hospitals",
  description:
    "Meet our team of expert doctors and specialists across all medical departments.",
};

export default function DoctorsPage() {
  return (
    <MainLayout>
      <PageHeader
        subtitle="Our Team"
        title="Expert Doctors"
        description="Highly qualified specialists dedicated to your health and wellbeing."
      />
      <DoctorsSection />
    </MainLayout>
  );
}
