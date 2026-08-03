import type { GalleryItem } from "@/types";

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Hospital Main Building",
    image: "/images/gallery/infrastructure-1.jpg",
    category: "infrastructure",
  },
  {
    id: "gal-2",
    title: "Modern Reception Area",
    image: "/images/gallery/infrastructure-2.jpg",
    category: "infrastructure",
  },
  {
    id: "gal-3",
    title: "ICU Facility",
    image: "/images/gallery/infrastructure-3.jpg",
    category: "infrastructure",
  },
  {
    id: "gal-4",
    title: "Dr. Rajesh Sharma",
    image: "/images/gallery/doctors-1.jpg",
    category: "doctors",
  },
  {
    id: "gal-5",
    title: "Medical Team",
    image: "/images/gallery/doctors-2.jpg",
    category: "doctors",
  },
  {
    id: "gal-6",
    title: "Annual Health Summit",
    image: "/images/gallery/events-1.jpg",
    category: "events",
  },
  {
    id: "gal-7",
    title: "Hospital Inauguration",
    image: "/images/gallery/events-2.jpg",
    category: "events",
  },
  {
    id: "gal-8",
    title: "Free Health Camp",
    image: "/images/gallery/camps-1.jpg",
    category: "medical-camps",
  },
  {
    id: "gal-9",
    title: "Rural Medical Outreach",
    image: "/images/gallery/camps-2.jpg",
    category: "medical-camps",
  },
];

export function getGalleryByCategory(category: GalleryItem["category"]) {
  return galleryItems.filter((item) => item.category === category);
}
