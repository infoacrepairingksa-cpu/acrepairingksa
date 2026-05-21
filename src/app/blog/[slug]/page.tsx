import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import BlogContent from "./BlogContent";

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${post.title} | AC Repairing KSA`,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [{ url: post.image }],
    }
  };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPostPage({ params }: { params: any }) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return notFound();
  }

  return <BlogContent post={post} />;
}
