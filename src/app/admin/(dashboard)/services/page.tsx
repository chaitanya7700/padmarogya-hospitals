import { services } from "@/data/services";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Admin | Padmarogya Hospitals",
  robots: { index: false, follow: false },
};

export default function AdminServicesPage() {
  return (
    <div>
      <h1 className="mb-2 font-heading text-2xl font-bold text-navy">Services</h1>
      <p className="mb-8 text-text-muted">Manage hospital services and packages.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((svc) => (
          <Card key={svc.id} hover={false}>
            <CardTitle>{svc.name}</CardTitle>
            <CardDescription className="mt-2">{svc.description}</CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
}
