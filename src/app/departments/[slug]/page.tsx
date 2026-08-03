import { MainLayout } from "@/components/layout/MainLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { departments, getDepartmentBySlug } from "@/data/departments";
import { getDoctorsByDepartment } from "@/data/doctors";
import { notFound } from "next/navigation";
import {
  Baby,
  Bone,
  Brain,
  Heart,
  Microscope,
  Scissors,
  Siren,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Bone,
  Brain,
  Baby,
  Stethoscope,
  Siren,
  Microscope,
  Scissors,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return departments.map((dept) => ({ slug: dept.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);
  if (!dept) return { title: "Department Not Found" };
  return {
    title: `${dept.name} | Padmarogya Hospitals`,
    description: dept.description,
  };
}

export default async function DepartmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);
  if (!dept) notFound();

  const deptDoctors = getDoctorsByDepartment(dept.id);
  const Icon = iconMap[dept.icon] ?? Stethoscope;

  return (
    <MainLayout>
      <PageHeader subtitle="Department" title={dept.name} description={dept.description} />
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-lotus-pink/20 text-navy">
                  <Icon size={32} />
                </div>
                <h2 className="font-heading text-2xl font-semibold text-navy">
                  Services Offered
                </h2>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {dept.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-center gap-2 text-text-muted"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-green" />
                      {service}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div>
              <Card>
                <h2 className="font-heading text-xl font-semibold text-navy">
                  Book Appointment
                </h2>
                <p className="mt-2 text-sm text-text-muted">
                  Schedule a consultation with our {dept.name.toLowerCase()} specialists.
                </p>
                <ButtonLink
                  href="/appointment"
                  variant="secondary"
                  className="mt-4 w-full"
                >
                  Book Now
                </ButtonLink>
              </Card>
            </div>
          </div>

          {deptDoctors.length > 0 && (
            <div className="mt-12">
              <h2 className="mb-6 font-heading text-2xl font-semibold text-navy">
                Our Specialists
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {deptDoctors.map((doctor) => (
                  <Card key={doctor.id}>
                    <h3 className="font-heading text-lg font-semibold text-navy">
                      {doctor.name}
                    </h3>
                    <Badge variant="green" className="mt-2">
                      {doctor.specialization}
                    </Badge>
                    <p className="mt-2 text-sm text-text-muted">
                      {doctor.qualification} · {doctor.experience}
                    </p>
                    <ButtonLink
                      href={`/doctors/${doctor.slug}`}
                      variant="outline"
                      size="sm"
                      className="mt-4"
                    >
                      View Profile
                    </ButtonLink>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
