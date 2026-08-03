import type { Doctor } from "@/types";

export const doctors: Doctor[] = [
  {
    id: "doc-1",
    slug: "dr-atharva-muley",
    name: "Dr. Atharva Muley",
    qualification: "MD, DM (Cardiology)",
    specialization: "Interventional Cardiology",
    experience: "18+ years",
    availability: "Mon–Sat, 10 AM – 4 PM",
    photo: "/images/doctors/dratharva.jpg",
    departmentId: "dept-1",
    bio: "Renowned cardiologist specializing in interventional procedures and preventive cardiac care.",
  },
  {
    id: "doc-2",
    slug: "dr-priya-patil",
    name: "Dr. Priya Patil",
    qualification: "MS (Orthopedics)",
    specialization: "Joint Replacement & Sports Medicine",
    experience: "15+ years",
    availability: "Mon–Fri, 11 AM – 5 PM",
    photo: "/images/doctors/doctor-2.jpg",
    departmentId: "dept-2",
    bio: "Expert in joint replacement surgeries and sports injury management.",
  },
  {
    id: "doc-3",
    slug: "dr-amit-deshmukh",
    name: "Dr. Amit Deshmukh",
    qualification: "MD, DM (Neurology)",
    specialization: "Stroke & Epilepsy",
    experience: "12+ years",
    availability: "Tue–Sat, 9 AM – 3 PM",
    photo: "/images/doctors/doctor-3.jpg",
    departmentId: "dept-3",
    bio: "Specialist in stroke management and neurological disorders.",
  },
  {
    id: "doc-4",
    slug: "dr-meera-kulkarni",
    name: "Dr. Meera Kulkarni",
    qualification: "MD (Pediatrics)",
    specialization: "Neonatal & Child Care",
    experience: "10+ years",
    availability: "Mon–Sat, 10 AM – 6 PM",
    photo: "/images/doctors/doctor-4.jpg",
    departmentId: "dept-4",
    bio: "Compassionate pediatrician dedicated to child wellness and development.",
  },
  {
    id: "doc-5",
    slug: "dr-suresh-joshi",
    name: "Dr. Suresh Joshi",
    qualification: "MD (General Medicine)",
    specialization: "Internal Medicine & Diabetes",
    experience: "20+ years",
    availability: "Mon–Sat, 9 AM – 5 PM",
    photo: "/images/doctors/doctor-5.jpg",
    departmentId: "dept-5",
    bio: "Experienced physician with expertise in chronic disease management.",
  },
  {
    id: "doc-6",
    slug: "dr-kavita-rao",
    name: "Dr. Kavita Rao",
    qualification: "MD (Emergency Medicine)",
    specialization: "Trauma & Critical Care",
    experience: "14+ years",
    availability: "24/7 Emergency",
    photo: "/images/doctors/doctor-6.jpg",
    departmentId: "dept-6",
    bio: "Emergency medicine specialist leading our 24/7 trauma care unit.",
  },
  {
    id: "doc-7",
    slug: "dr-vikram-singh",
    name: "Dr. Vikram Singh",
    qualification: "MS (General Surgery)",
    specialization: "Laparoscopic Surgery",
    experience: "16+ years",
    availability: "Mon–Fri, 10 AM – 4 PM",
    photo: "/images/doctors/doctor-7.jpg",
    departmentId: "dept-8",
    bio: "Skilled surgeon specializing in minimally invasive procedures.",
  },
];

export function getDoctorBySlug(slug: string) {
  return doctors.find((d) => d.slug === slug);
}

export function getDoctorsByDepartment(departmentId: string) {
  return doctors.filter((d) => d.departmentId === departmentId);
}
