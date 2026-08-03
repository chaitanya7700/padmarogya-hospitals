import { galleryItems } from "@/data/gallery";
import { Card, CardTitle } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Admin | Padmarogya Hospitals",
  robots: { index: false, follow: false },
};

export default function AdminGalleryPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-navy">Gallery</h1>
          <p className="text-text-muted">Manage gallery images and categories.</p>
        </div>
        <button
          type="button"
          className="rounded-xl bg-green px-4 py-2 text-sm font-medium text-white"
        >
          Upload Image
        </button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <Card key={item.id} hover={false}>
            <div className="mb-3 aspect-video rounded-lg bg-light-gray" />
            <CardTitle className="text-base">{item.title}</CardTitle>
            <p className="mt-1 text-xs capitalize text-text-muted">
              {item.category.replace("-", " ")}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
