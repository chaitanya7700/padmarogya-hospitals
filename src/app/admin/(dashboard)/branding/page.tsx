import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding | Admin | Padmarogya Hospitals",
  robots: { index: false, follow: false },
};

export default function AdminBrandingPage() {
  return (
    <div>
      <h1 className="mb-2 font-heading text-2xl font-bold text-navy">Branding</h1>
      <p className="mb-8 text-text-muted">
        Manage hospital name, logo, tagline, colors, and fonts.
      </p>
      <div className="grid gap-6 lg:grid-cols-2">
        {[
          { title: "Hospital Name", desc: "Padmarogya Hospitals" },
          { title: "Tagline", desc: "सेवा, श्रद्धा, आरोग्य" },
          { title: "Logo", desc: "Upload hospital logo" },
          { title: "Color Palette", desc: "Navy, Green, Lotus Pink" },
          { title: "Typography", desc: "Playfair Display, Poppins, Mukta" },
        ].map((item) => (
          <Card key={item.title}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription className="mt-2">{item.desc}</CardDescription>
            <p className="mt-4 text-xs text-text-muted">
              Editable via CMS — connect to SiteSettings model
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
