import Link from "next/link";
import { ADMIN_NAV_ITEMS } from "@/lib/constants";
import { HospitalLogo } from "@/components/ui/LotusIcon";
import { LayoutDashboard, LogOut } from "lucide-react";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-light-gray">
      <aside className="relative hidden w-64 shrink-0 border-r border-gray bg-white lg:block">
        <div className="border-b border-gray p-4">
          <HospitalLogo />
          <p className="mt-2 text-xs text-text-muted">Admin Dashboard</p>
        </div>
        <nav className="p-4" aria-label="Admin navigation">
          <ul className="space-y-1">
            {ADMIN_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-text transition-colors hover:bg-light-gray hover:text-navy"
                >
                  <LayoutDashboard size={18} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-0 w-full border-t border-gray p-4">
          <Link
            href="/admin/login"
            className="flex items-center gap-2 text-sm text-text-muted hover:text-navy"
          >
            <LogOut size={16} />
            Sign Out
          </Link>
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="border-b border-gray bg-white px-6 py-4 lg:hidden">
          <HospitalLogo />
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
