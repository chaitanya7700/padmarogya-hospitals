import { MainLayout } from "@/components/layout/MainLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { departments } from "@/data/departments";
import { doctors, getDoctorBySlug } from "@/data/doctors";
import { Clock, UserRound } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return { title: "Doctor Not Found" };
  return {
    title: `${doctor.name} | Padmarogya Hospitals`,
    description: `${doctor.specialization} - ${doctor.qualification}`,
  };
}

export default async function DoctorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  const department = departments.find((d) => d.id === doctor.departmentId);

  return (
    <MainLayout>
      <PageHeader subtitle="Doctor Profile" title={doctor.name} />
      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <Card>
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
              <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green/20 to-lotus-pink/20">
                <UserRound size={64} className="text-navy/30" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <Badge variant="green">{doctor.specialization}</Badge>
                <p className="mt-3 text-lg text-text-muted">{doctor.qualification}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-4 md:justify-start">
                  <span className="text-sm text-text-muted">
                    Experience: <strong className="text-navy">{doctor.experience}</strong>
                  </span>
                  {department && (
                    <span className="text-sm text-text-muted">
                      Department: <strong className="text-navy">{department.name}</strong>
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-text-muted md:justify-start">
                  <Clock size={16} />
                  {doctor.availability}
                </div>
                {doctor.bio && (
                  <p className="mt-6 text-text-muted leading-relaxed">{doctor.bio}</p>
                )}
                <ButtonLink
                  href="/appointment"
                  variant="secondary"
                  className="mt-6"
                >
                  Book Appointment
                </ButtonLink>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
}
