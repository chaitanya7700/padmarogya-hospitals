import { seoMeta } from "@/data/site-content";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO | Admin | Padmarogya Hospitals",
  robots: { index: false, follow: false },
};

export default function AdminSeoPage() {
  return (
    <div>
      <h1 className="mb-2 font-heading text-2xl font-bold text-navy">
        SEO Settings
      </h1>
      <p className="mb-8 text-text-muted">
        Manage meta title, description, keywords, and social sharing.
      </p>
      <div className="grid gap-4">
        <Card hover={false}>
          <CardTitle>Meta Title</CardTitle>
          <CardDescription className="mt-2">{seoMeta.title}</CardDescription>
        </Card>
        <Card hover={false}>
          <CardTitle>Meta Description</CardTitle>
          <CardDescription className="mt-2">{seoMeta.description}</CardDescription>
        </Card>
        <Card hover={false}>
          <CardTitle>Keywords</CardTitle>
          <CardDescription className="mt-2">
            {seoMeta.keywords.join(", ")}
          </CardDescription>
        </Card>
      </div>
    </div>
  );
}
