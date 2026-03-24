import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/site/container";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    return {
      title: post.frontmatter.title,
      description: post.frontmatter.summary
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: Props) {
  try {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    return (
      <Container className="py-20 md:py-28">
        <article className="prose-shell mx-auto">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{post.frontmatter.publishedAt}</p>
          <h1>{post.frontmatter.title}</h1>
          <p className="text-xl leading-9 text-slate-600">{post.frontmatter.summary}</p>
          <div className="mt-12">{post.content}</div>
        </article>
      </Container>
    );
  } catch {
    notFound();
  }
}
