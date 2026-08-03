import { doctors } from "@/data/doctors";
import { Badge } from "@/components/ui/Badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctors | Admin | Padmarogya Hospitals",
  robots: { index: false, follow: false },
};

export default function AdminDoctorsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-navy">Doctors</h1>
          <p className="text-text-muted">Manage doctor profiles and availability.</p>
        </div>
        <button
          type="button"
          className="rounded-xl bg-green px-4 py-2 text-sm font-medium text-white"
        >
          Add Doctor
        </button>
      </div>
      <div className="grid gap-4">
        {doctors.map((doctor) => (
          <Card key={doctor.id} hover={false}>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{doctor.name}</CardTitle>
                <CardDescription className="mt-1">
                  {doctor.qualification}
                </CardDescription>
                <Badge variant="green" className="mt-2">
                  {doctor.specialization}
                </Badge>
              </div>
              <button
                type="button"
                className="rounded-lg border border-gray px-3 py-1.5 text-sm text-navy hover:bg-light-gray"
              >
                Edit
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
