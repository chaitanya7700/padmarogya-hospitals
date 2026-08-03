import type {
  AboutContent,
  ContactInfo,
  HeroSlide,
  SeoMeta,
} from "@/types";
import { SITE_CONFIG } from "@/lib/constants";

export const seoMeta: SeoMeta = {
  title: "Padmarogya Hospitals | Premium Healthcare in Ahilyanagar",
  description:
    "Padmarogya Hospitals offers world-class medical care with compassion. सेवा, श्रद्धा, आरोग्य — Service, Devotion, Health.",
  keywords: [
    "hospital",
    "healthcare",
    "Ahilyanagar",
    "Padmarogya",
    "medical",
    "doctor",
    "appointment",
  ],
};

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    title: "Compassionate Care, Advanced Medicine",
    subtitle: SITE_CONFIG.tagline,
    description:
      "Experience premium healthcare with our team of expert doctors and state-of-the-art facilities dedicated to your wellbeing.",
    image: "/images/hero-hospital.jpg",
    ctaPrimary: { label: "Book Appointment", href: "/appointment" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
  },
  {
    id: "2",
    title: "Your Health, Our Priority",
    subtitle: "24/7 Emergency Care",
    description:
      "Round-the-clock emergency services with fully equipped ICU, operation theatres, and dedicated medical staff.",
    image: "/images/hero-emergency.jpg",
    ctaPrimary: { label: "Emergency", href: "tel:+919876543210" },
    ctaSecondary: { label: "Our Services", href: "/services" },
  },
  {
    id: "3",
    title: "Expert Doctors, Trusted Care",
    subtitle: "Multi-Specialty Excellence",
    description:
      "Consult with renowned specialists across cardiology, orthopedics, neurology, pediatrics, and more.",
    image: "/images/hero-doctors.jpg",
    ctaPrimary: { label: "Find a Doctor", href: "/doctors" },
    ctaSecondary: { label: "Departments", href: "/departments" },
  },
];

export const aboutContent: AboutContent = {
  introduction:
    "Padmarogya Hospitals is a leading multi-specialty healthcare institution committed to delivering exceptional medical care with warmth and compassion. Rooted in Indian values of service and devotion, we combine modern medicine with a patient-first philosophy.",
  mission:
    "To provide accessible, affordable, and world-class healthcare to every patient, treating each individual with dignity, respect, and the highest standards of medical excellence.",
  vision:
    "To be the most trusted healthcare destination in the region, recognized for clinical excellence, compassionate care, and continuous innovation in patient services.",
  values: [
    "Patient-First Approach",
    "Clinical Excellence",
    "Compassion & Empathy",
    "Integrity & Transparency",
    "Continuous Innovation",
    "Community Wellness",
  ],
  patientFirstApproach:
    "Every decision we make starts with the patient. From personalized treatment plans to comfortable facilities and transparent communication, your wellbeing guides everything we do at Padmarogya Hospitals.",
};

export const contactInfo: ContactInfo = {
  email: SITE_CONFIG.email,
  phone: SITE_CONFIG.phone,
  address: SITE_CONFIG.address,
  mapEmbedUrl: SITE_CONFIG.mapEmbedUrl,
  socialLinks: {
    facebook: "https://facebook.com/ChaitanyaSase",
    instagram: "https://instagram.com/thesasepatil",
    twitter: "https://twitter.com/ChaitanyaS",
    youtube: "https://youtube.com/padmarogya",
  },
};
