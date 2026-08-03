import { MainLayout } from "@/components/layout/MainLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { blogPosts } from "@/data/blogs";
import { Calendar, UserRound } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Padmarogya Hospitals",
  description:
    "Health tips, medical insights, and wellness articles from our expert doctors.",
};

export default function BlogsPage() {
  return (
    <MainLayout>
      <PageHeader
        subtitle="Blog"
        title="Health & Wellness"
        description="Expert medical insights and health tips from our specialists."
      />
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blogs/${post.slug}`}>
                <Card className="h-full">
                  <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-navy/5 to-green/10" />
                  <h2 className="font-heading text-xl font-semibold text-navy line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-text-muted line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <UserRound size={14} />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
