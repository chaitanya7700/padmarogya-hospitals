import { MainLayout } from "@/components/layout/MainLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { blogPosts, getBlogBySlug } from "@/data/blogs";
import { Calendar, UserRound } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Blog Not Found" };
  return {
    title: `${post.title} | Padmarogya Hospitals`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <MainLayout>
      <PageHeader subtitle="Blog" title={post.title} description={post.excerpt} />
      <article className="section-padding">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-4 text-sm text-text-muted">
            <span className="flex items-center gap-1">
              <UserRound size={16} />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="prose prose-lg max-w-none text-text-muted">
            <p>{post.content}</p>
          </div>
          <div className="mt-10">
            <ButtonLink href="/blogs" variant="outline">
              Back to Blogs
            </ButtonLink>
          </div>
        </div>
      </article>
    </MainLayout>
  );
}
