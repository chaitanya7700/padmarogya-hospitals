import type { NavItem } from "@/types";

export const SITE_CONFIG = {
  hospitalName: "Padmarogya Hospitals",
  tagline: "सेवा, श्रद्धा, आरोग्य",
  taglineEnglish: "Service, Devotion, Health",
  email: "office.suryatej@gmail.com",
  phone: "+91 9119552426",
  address:
    "Padmarogya Hospitals, Savedi, Ahilyanagar, Maharashtra, India",
  mapEmbedUrl:
    "https://maps.app.goo.gl/XuXFr6ComJZjq7XP6",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
  { label: "Appointment", href: "/appointment" },
];

export const FOOTER_QUICK_LINKS: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Appointment", href: "/appointment" },
];

export const GALLERY_CATEGORIES = [
  { id: "infrastructure", label: "Hospital Infrastructure" },
  { id: "doctors", label: "Doctors" },
  { id: "events", label: "Events" },
  { id: "medical-camps", label: "Medical Camps" },
] as const;

export const ADMIN_NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/admin" },
  { label: "Branding", href: "/admin/branding" },
  { label: "Content", href: "/admin/content" },
  { label: "Doctors", href: "/admin/doctors" },
  { label: "Departments", href: "/admin/departments" },
  { label: "Services", href: "/admin/services" },
  { label: "Gallery", href: "/admin/gallery" },
  { label: "Blogs", href: "/admin/blogs" },
  { label: "Enquiries", href: "/admin/enquiries" },
  { label: "SEO", href: "/admin/seo" },
];
