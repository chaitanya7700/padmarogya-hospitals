import { departments } from "@/data/departments";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Departments | Admin | Padmarogya Hospitals",
  robots: { index: false, follow: false },
};

export default function AdminDepartmentsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-navy">
            Departments
          </h1>
          <p className="text-text-muted">Manage medical departments and services.</p>
        </div>
        <button
          type="button"
          className="rounded-xl bg-green px-4 py-2 text-sm font-medium text-white"
        >
          Add Department
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {departments.map((dept) => (
          <Card key={dept.id} hover={false}>
            <CardTitle>{dept.name}</CardTitle>
            <CardDescription className="mt-2 line-clamp-2">
              {dept.description}
            </CardDescription>
            <p className="mt-2 text-xs text-text-muted">
              {dept.services.length} services · {dept.doctorIds.length} doctors
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
