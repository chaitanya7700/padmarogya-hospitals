import { MainLayout } from "@/components/layout/MainLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { DepartmentsSection } from "@/components/sections/DepartmentsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Departments | Padmarogya Hospitals",
  description:
    "Explore our multi-specialty departments including cardiology, orthopedics, neurology, pediatrics, and more.",
};

export default function DepartmentsPage() {
  return (
    <MainLayout>
      <PageHeader
        subtitle="Departments"
        title="Multi-Specialty Excellence"
        description="Comprehensive medical care across a wide range of specialties."
      />
      <DepartmentsSection />
    </MainLayout>
  );
}
