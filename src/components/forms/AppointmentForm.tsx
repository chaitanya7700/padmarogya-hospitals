"use client";

import { useState } from "react";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { supabase } from "@/lib/supabaseClient";

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      // Save data directly into Supabase
      const { data, error } = await supabase
        .from("AppointmentEnquiry")
        .insert([
          {
            patientName: formData.patientName,
            email: formData.email,
            phone: formData.phone,
            department: formData.department,
            doctor: formData.doctor,
            preferredDate: formData.preferredDate,
            preferredTime: formData.preferredTime,
            notes: formData.notes,
          },
        ]);

      if (error) {
        console.error("Supabase insert error:", error);
        setErrorMessage(error.message || "Failed to submit appointment.");
        return;
      }

      console.log("Successfully saved to Supabase:", data);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Unexpected error:", err);
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          ✓
        </div>
        <h3 className="text-xl font-bold">Appointment Request Submitted</h3>
        <p className="mt-2 text-slate-600">
          We will contact you shortly to confirm your appointment.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              patientName: "",
              email: "",
              phone: "",
              department: "",
              doctor: "",
              preferredDate: "",
              preferredTime: "",
              notes: "",
            });
          }}
          className="mt-6 text-sm font-medium text-primary hover:underline"
        >
          Book another appointment
        </button>
      </Card>
    );
  }

  // Filter doctors based on selected department
  const filteredDoctors = formData.department
    ? doctors.filter((doc) => doc.departmentId === formData.department)
    : doctors;

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {errorMessage && (
          <div className="rounded-md bg-red-50 p-3 text-sm text-red-600 border border-red-200">
            {errorMessage}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">Full Name *</label>
          <input
            type="text"
            name="patientName"
            required
            value={formData.patientName}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className="w-full rounded-md border p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full rounded-md border p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full rounded-md border p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full rounded-md border p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.title || dept.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Doctor</label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="w-full rounded-md border p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select Doctor</option>
              {filteredDoctors.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1">Preferred Date</label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full rounded-md border p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Preferred Time</label>
            <input
              type="time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full rounded-md border p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Notes</label>
          <textarea
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any specific symptoms or health notes..."
            className="w-full rounded-md border p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Saving to Database..." : "Book Appointment"}
        </Button>
      </form>
    </Card>
  );
}