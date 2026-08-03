import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content | Admin | Padmarogya Hospitals",
  robots: { index: false, follow: false },
};

export default function AdminContentPage() {
  const sections = [
    "Hero Section & Sliders",
    "About Section",
    "Header Navigation",
    "Footer Content",
    "Testimonials",
    "Notices & Events",
  ];

  return (
    <div>
      <h1 className="mb-2 font-heading text-2xl font-bold text-navy">
        Website Content
      </h1>
      <p className="mb-8 text-text-muted">
        Edit homepage sections, header, footer, and marketing content.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <Card key={section}>
            <CardTitle>{section}</CardTitle>
            <CardDescription className="mt-2">
              Manage content for {section.toLowerCase()}
            </CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
}
