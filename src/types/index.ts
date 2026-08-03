export interface Branding {
  hospitalName: string;
  tagline: string;
  taglineMarathi: string;
  logo: string;
  colors: {
    navy: string;
    green: string;
    lotusPink: string;
    white: string;
    lightGray: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export interface AboutContent {
  introduction: string;
  mission: string;
  vision: string;
  values: string[];
  patientFirstApproach: string;
}

export interface Department {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  services: string[];
  doctorIds: string[];
}

export interface Doctor {
  id: string;
  slug: string;
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  availability: string;
  photo: string;
  departmentId: string;
  bio?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  icon: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  review: string;
  rating: number;
  photo: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: "infrastructure" | "doctors" | "events" | "medical-camps";
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishedAt: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  mapEmbedUrl: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}

export type AdminRole = "super_admin" | "content_manager" | "department_manager";

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: AdminRole;
}
