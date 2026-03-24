import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogFrontmatter, ContentItem } from "@/lib/content";

export function BlogCard({
  post
}: {
  post: ContentItem<BlogFrontmatter>;
}) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="transition-transform duration-300 hover:-translate-y-1">
        <CardContent className="space-y-5">
          <div className="flex items-center justify-between text-sm text-slate-400">
            <span>{post.publishedAt}</span>
            <span>{post.readingTime}</span>
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{post.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{post.summary}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
