import type { Department } from "@/types";

export const departments: Department[] = [
  {
    id: "dept-1",
    slug: "cardiology",
    name: "Cardiology",
    description:
      "Comprehensive heart care including diagnostics, interventional procedures, and cardiac rehabilitation.",
    icon: "Heart",
    services: [
      "ECG & Echo",
      "Angiography",
      "Angioplasty",
      "Pacemaker Implantation",
      "Cardiac Rehabilitation",
    ],
    doctorIds: ["doc-1"],
  },
  {
    id: "dept-2",
    slug: "orthopedics",
    name: "Orthopedics",
    description:
      "Expert treatment for bone, joint, and musculoskeletal conditions with advanced surgical options.",
    icon: "Bone",
    services: [
      "Joint Replacement",
      "Fracture Care",
      "Sports Medicine",
      "Spine Surgery",
      "Arthroscopy",
    ],
    doctorIds: ["doc-2"],
  },
  {
    id: "dept-3",
    slug: "neurology",
    name: "Neurology",
    description:
      "Specialized care for brain, spine, and nervous system disorders with modern diagnostic tools.",
    icon: "Brain",
    services: [
      "Stroke Management",
      "Epilepsy Care",
      "Headache Clinic",
      "Neuro Rehabilitation",
      "EEG & EMG",
    ],
    doctorIds: ["doc-3"],
  },
  {
    id: "dept-4",
    slug: "pediatrics",
    name: "Pediatrics",
    description:
      "Dedicated healthcare for infants, children, and adolescents in a child-friendly environment.",
    icon: "Baby",
    services: [
      "Well-Baby Clinic",
      "Vaccination",
      "Growth Monitoring",
      "Pediatric Emergency",
      "Neonatal Care",
    ],
    doctorIds: ["doc-4"],
  },
  {
    id: "dept-5",
    slug: "general-medicine",
    name: "General Medicine",
    description:
      "Primary care and management of common illnesses, chronic conditions, and preventive health.",
    icon: "Stethoscope",
    services: [
      "Health Checkups",
      "Diabetes Care",
      "Hypertension Management",
      "Infectious Diseases",
      "Geriatric Care",
    ],
    doctorIds: ["doc-5"],
  },
  {
    id: "dept-6",
    slug: "emergency-care",
    name: "Emergency Care",
    description:
      "24/7 emergency services with trauma care, resuscitation, and critical care support.",
    icon: "Siren",
    services: [
      "Trauma Care",
      "Ambulance Service",
      "Critical Care",
      "Poisoning Management",
      "Disaster Response",
    ],
    doctorIds: ["doc-6"],
  },
  {
    id: "dept-7",
    slug: "diagnostics",
    name: "Diagnostics",
    description:
      "Advanced laboratory and imaging services for accurate and timely diagnosis.",
    icon: "Microscope",
    services: [
      "Blood Tests",
      "X-Ray & CT Scan",
      "MRI",
      "Ultrasound",
      "Pathology",
    ],
    doctorIds: [],
  },
  {
    id: "dept-8",
    slug: "surgery",
    name: "Surgery",
    description:
      "Modern operation theatres with minimally invasive and open surgical procedures.",
    icon: "Scissors",
    services: [
      "General Surgery",
      "Laparoscopic Surgery",
      "Day Care Surgery",
      "Post-Op Care",
      "Surgical Oncology",
    ],
    doctorIds: ["doc-7"],
  },
];

export function getDepartmentBySlug(slug: string) {
  return departments.find((d) => d.slug === slug);
}
