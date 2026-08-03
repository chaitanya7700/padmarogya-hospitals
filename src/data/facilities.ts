import type { Facility } from "@/types";

export const facilities: Facility[] = [
  {
    id: "fac-1",
    name: "Modern Infrastructure",
    description:
      "Spacious, hygienic, and technologically advanced hospital building designed for patient comfort.",
    icon: "Building2",
    image: "/images/facilities/infrastructure.jpg",
  },
  {
    id: "fac-2",
    name: "ICU",
    description:
      "Fully equipped Intensive Care Unit with continuous monitoring and expert critical care team.",
    icon: "HeartPulse",
    image: "/images/facilities/icu.jpg",
  },
  {
    id: "fac-3",
    name: "Operation Theatre",
    description:
      "Modular OTs with laminar airflow, advanced anesthesia, and infection control protocols.",
    icon: "Syringe",
    image: "/images/facilities/ot.jpg",
  },
  {
    id: "fac-4",
    name: "Patient Rooms",
    description:
      "Comfortable general, semi-private, and deluxe rooms with modern amenities and nursing care.",
    icon: "BedDouble",
    image: "/images/facilities/rooms.jpg",
  },
  {
    id: "fac-5",
    name: "Laboratory",
    description:
      "NABL-accredited laboratory offering accurate and rapid test results.",
    icon: "TestTube",
    image: "/images/facilities/lab.jpg",
  },
  {
    id: "fac-6",
    name: "Medical Equipment",
    description:
      "Latest diagnostic and therapeutic equipment including CT, MRI, and digital X-ray.",
    icon: "Monitor",
    image: "/images/facilities/equipment.jpg",
  },
];
