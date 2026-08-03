import { departments } from "@/data/departments";
import {
  FOOTER_QUICK_LINKS,
  SITE_CONFIG,
} from "@/lib/constants";
import { contactInfo } from "@/data/site-content";
import { HospitalLogo } from "@/components/ui/LotusIcon";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <HospitalLogo className="[&_p]:text-white [&_.text-green]:text-lotus-pink-light" />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {SITE_CONFIG.taglineEnglish}. Premium healthcare with compassion
              and clinical excellence.
            </p>
            <div className="mt-6 flex gap-3">
              {contactInfo.socialLinks.facebook && (
                <a
                  href={contactInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-green"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={16} />
                </a>
              )}
              {contactInfo.socialLinks.instagram && (
                <a
                  href={contactInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-green"
                  aria-label="Instagram"
                >
                  <FaInstagram size={16} />
                </a>
              )}
              {contactInfo.socialLinks.twitter && (
                <a
                  href={contactInfo.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-green"
                  aria-label="Twitter"
                >
                  <FaXTwitter size={16} />
                </a>
              )}
              {contactInfo.socialLinks.youtube && (
                <a
                  href={contactInfo.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-green"
                  aria-label="YouTube"
                >
                  <FaYoutube size={16} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-lotus-pink-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold">Departments</h3>
            <ul className="space-y-2">
              {departments.slice(0, 6).map((dept) => (
                <li key={dept.id}>
                  <Link
                    href={`/departments/${dept.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-lotus-pink-light"
                  >
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={18} className="mt-0.5 shrink-0 text-green-light" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone size={18} className="shrink-0 text-green-light" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail size={18} className="shrink-0 text-green-light" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>
            &copy; {currentYear} {SITE_CONFIG.hospitalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}