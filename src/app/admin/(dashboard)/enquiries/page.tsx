import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enquiries | Admin | Padmarogya Hospitals",
  robots: { index: false, follow: false },
};

export default function AdminEnquiriesPage() {
  return (
    <div>
      <h1 className="mb-2 font-heading text-2xl font-bold text-navy">Enquiries</h1>
      <p className="mb-8 text-text-muted">
        View and manage appointment requests and contact form submissions.
      </p>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card hover={false}>
          <CardTitle>Appointment Enquiries</CardTitle>
          <CardDescription className="mt-2">
            Patient appointment booking requests will appear here once connected
            to the AppointmentEnquiry model.
          </CardDescription>
        </Card>
        <Card hover={false}>
          <CardTitle>Contact Form Submissions</CardTitle>
          <CardDescription className="mt-2">
            Contact form messages will appear here once connected to the
            ContactEnquiry model.
          </CardDescription>
        </Card>
      </div>
    </div>
  );
}
