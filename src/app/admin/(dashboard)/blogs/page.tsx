import { blogPosts } from "@/data/blogs";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Admin | Padmarogya Hospitals",
  robots: { index: false, follow: false },
};

export default function AdminBlogsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-navy">Blogs</h1>
          <p className="text-text-muted">Manage health articles and blog posts.</p>
        </div>
        <button
          type="button"
          className="rounded-xl bg-green px-4 py-2 text-sm font-medium text-white"
        >
          New Post
        </button>
      </div>
      <div className="grid gap-4">
        {blogPosts.map((post) => (
          <Card key={post.id} hover={false}>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription className="mt-2">{post.excerpt}</CardDescription>
            <p className="mt-2 text-xs text-text-muted">
              By {post.author} · {post.publishedAt}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
