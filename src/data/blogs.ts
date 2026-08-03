import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "heart-health-tips",
    title: "10 Essential Tips for a Healthy Heart",
    excerpt:
      "Learn practical lifestyle changes to protect your heart and reduce cardiovascular risk.",
    content:
      "Heart disease remains one of the leading health concerns worldwide. At Padmarogya Hospitals, we believe prevention is the best medicine...",
    image: "/images/blogs/heart-health.jpg",
    author: "Dr. Rajesh Sharma",
    publishedAt: "2026-07-15",
  },
  {
    id: "blog-2",
    slug: "child-vaccination-guide",
    title: "Complete Guide to Child Vaccination",
    excerpt:
      "Everything parents need to know about immunization schedules and vaccine safety.",
    content:
      "Vaccination is one of the most effective ways to protect your child from serious diseases. Our pediatric team shares essential guidance...",
    image: "/images/blogs/vaccination.jpg",
    author: "Dr. Meera Kulkarni",
    publishedAt: "2026-07-01",
  },
  {
    id: "blog-3",
    slug: "diabetes-management",
    title: "Managing Diabetes: A Patient's Guide",
    excerpt:
      "Expert advice on diet, exercise, and medication for effective diabetes control.",
    content:
      "Living with diabetes requires a holistic approach. From blood sugar monitoring to lifestyle modifications, here's how to stay healthy...",
    image: "/images/blogs/diabetes.jpg",
    author: "Dr. Suresh Joshi",
    publishedAt: "2026-06-20",
  },
];

export function getBlogBySlug(slug: string) {
  return blogPosts.find((b) => b.slug === slug);
}
