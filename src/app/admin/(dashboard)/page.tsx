import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import {
  Building2,
  Calendar,
  FileText,
  Image,
  MessageSquare,
  Stethoscope,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Padmarogya Hospitals",
  robots: { index: false, follow: false },
};

const stats = [
  { label: "Doctors", value: "7", icon: Users, href: "/admin/doctors" },
  { label: "Departments", value: "8", icon: Building2, href: "/admin/departments" },
  { label: "Appointments", value: "12", icon: Calendar, href: "/admin/enquiries" },
  { label: "Contact Forms", value: "5", icon: MessageSquare, href: "/admin/enquiries" },
  { label: "Blog Posts", value: "3", icon: FileText, href: "/admin/blogs" },
  { label: "Gallery Items", value: "9", icon: Image, href: "/admin/gallery" },
];

const quickActions = [
  { label: "Manage Branding", href: "/admin/branding", icon: Stethoscope },
  { label: "Edit Hero Section", href: "/admin/content", icon: FileText },
  { label: "Add Doctor", href: "/admin/doctors", icon: Users },
  { label: "SEO Settings", href: "/admin/seo", icon: FileText },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading text-2xl font-bold text-navy">Dashboard</h1>
        <p className="text-text-muted">
          Manage your hospital website content and enquiries.
        </p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <a key={stat.label} href={stat.href}>
            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <CardDescription>{stat.label}</CardDescription>
                  <CardTitle className="mt-1 text-3xl">{stat.value}</CardTitle>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green">
                  <stat.icon size={24} />
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>

      <h2 className="mb-4 font-heading text-xl font-semibold text-navy">
        Quick Actions
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action) => (
          <a key={action.label} href={action.href}>
            <Card className="text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-navy/10 text-navy">
                <action.icon size={20} />
              </div>
              <CardTitle className="text-base">{action.label}</CardTitle>
            </Card>
          </a>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-green/20 bg-green/5 p-6">
        <h3 className="font-heading font-semibold text-navy">CMS Architecture</h3>
        <p className="mt-2 text-sm text-text-muted">
          This admin dashboard is the foundation for a dynamic CMS. Content is
          currently served from static data files in <code className="rounded bg-white px-1">src/data/</code>.
          Connect Prisma models to enable full database-driven content management
          with role-based access control.
        </p>
      </div>
    </div>
  );
}
