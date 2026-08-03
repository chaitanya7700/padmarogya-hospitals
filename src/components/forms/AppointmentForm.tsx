"use client";

import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

const appointmentSchema = z.object({
  patientName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  department: z.string().min(1, "Select a department"),
  doctor: z.string().optional(),
  preferredDate: z.string().min(1, "Select a date"),
  preferredTime: z.string().min(1, "Select a time"),
  message: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const timeOptions = [
  { value: "", label: "Select time" },
  { value: "09:00", label: "9:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" },
  { value: "17:00", label: "5:00 PM" },
];

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const selectedDepartment = watch("department");
  const filteredDoctors = selectedDepartment
    ? doctors.filter((d) => d.departmentId === selectedDepartment)
    : doctors;

  const onSubmit = async (data: AppointmentFormData) => {
    // TODO: Connect to API / CMS backend
    console.log("Appointment submitted:", data);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="text-center">
        <div className="py-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green/10 text-green">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-heading text-xl font-semibold text-navy">
            Appointment Request Submitted
          </h3>
          <p className="mt-2 text-text-muted">
            We will contact you shortly to confirm your appointment.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <h3 className="mb-6 font-heading text-xl font-semibold text-navy">
        Book an Appointment
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Patient Name"
          placeholder="Full name"
          error={errors.patientName?.message}
          {...register("patientName")}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Email"
            type="email"
            placeholder="email@example.com"
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            label="Phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            error={errors.phone?.message}
            {...register("phone")}
          />
        </div>
        <Select
          label="Department"
          options={[
            { value: "", label: "Select department" },
            ...departments.map((d) => ({ value: d.id, label: d.name })),
          ]}
          error={errors.department?.message}
          {...register("department")}
        />
        <Select
          label="Preferred Doctor (Optional)"
          options={[
            { value: "", label: "Any available doctor" },
            ...filteredDoctors.map((d) => ({ value: d.id, label: d.name })),
          ]}
          {...register("doctor")}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Preferred Date"
            type="date"
            error={errors.preferredDate?.message}
            {...register("preferredDate")}
          />
          <Select
            label="Preferred Time"
            options={timeOptions}
            error={errors.preferredTime?.message}
            {...register("preferredTime")}
          />
        </div>
        <Textarea
          label="Additional Message (Optional)"
          placeholder="Any specific concerns or requirements..."
          {...register("message")}
        />
        <Button type="submit" variant="secondary" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Appointment Request"}
        </Button>
      </form>
    </Card>
  );
}
