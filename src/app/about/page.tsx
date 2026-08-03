import { MainLayout } from "@/components/layout/MainLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { aboutContent } from "@/data/site-content";
import { Card } from "@/components/ui/Card";
import { Eye, Heart, Target } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Padmarogya Hospitals",
  description: aboutContent.introduction,
};

export default function AboutPage() {
  return (
    <MainLayout>
      <PageHeader
        subtitle="About Us"
        title="Padmarogya Hospitals"
        description={aboutContent.introduction}
      />
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Target, title: "Our Mission", content: aboutContent.mission },
              { icon: Eye, title: "Our Vision", content: aboutContent.vision },
              {
                icon: Heart,
                title: "Patient-First Approach",
                content: aboutContent.patientFirstApproach,
              },
            ].map((item) => (
              <Card key={item.title} className="h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green">
                  <item.icon size={24} />
                </div>
                <h2 className="font-heading text-xl font-semibold text-navy">
                  {item.title}
                </h2>
                <p className="mt-3 text-text-muted leading-relaxed">
                  {item.content}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="mb-6 text-center font-heading text-2xl font-semibold text-navy">
              Our Core Values
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {aboutContent.values.map((value) => (
                <span
                  key={value}
                  className="rounded-full bg-light-gray px-5 py-2.5 text-sm font-medium text-navy"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
