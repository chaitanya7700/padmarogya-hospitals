import { MainLayout } from "@/components/layout/MainLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { GallerySection } from "@/components/sections/GallerySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Padmarogya Hospitals",
  description:
    "Photos of our hospital infrastructure, medical team, events, and community health camps.",
};

export default function GalleryPage() {
  return (
    <MainLayout>
      <PageHeader
        subtitle="Gallery"
        title="Life at Padmarogya"
        description="Explore our hospital, team, and community initiatives."
      />
      <GallerySection />
    </MainLayout>
  );
}
