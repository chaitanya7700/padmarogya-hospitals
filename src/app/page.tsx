import { MainLayout } from "@/components/layout/MainLayout";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DepartmentsSection } from "@/components/sections/DepartmentsSection";
import { DoctorsSection } from "@/components/sections/DoctorsSection";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <DepartmentsSection />
      <DoctorsSection limit={4} />
      <ServicesSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
    </MainLayout>
  );
}
