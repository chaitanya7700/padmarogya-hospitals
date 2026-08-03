import { MainLayout } from "@/components/layout/MainLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment | Padmarogya Hospitals",
  description:
    "Schedule an appointment with our expert doctors. Select department, preferred date and time.",
};

export default function AppointmentPage() {
  return (
    <MainLayout>
      <PageHeader
        subtitle="Appointment"
        title="Book an Appointment"
        description="Fill in your details and we'll confirm your appointment shortly."
      />
      <section className="section-padding">
        <div className="mx-auto max-w-2xl px-4 md:px-6 lg:px-8">
          <AppointmentForm />
        </div>
      </section>
    </MainLayout>
  );
}
