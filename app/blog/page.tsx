import { Container } from "@/components/site/container";
import { MotionFade } from "@/components/site/motion-fade";
import { BlogCard } from "@/components/site/blog-card";
import { SectionHeading } from "@/components/site/section-heading";
import { getBlogPosts } from "@/lib/content";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <Container className="py-20 md:py-28">
      <MotionFade>
        <SectionHeading
          eyebrow="Writing"
          title="Notes on cloud architecture, payments, and shipping AI features responsibly."
          description="Short essays on platform engineering, reliability, cloud architecture, and the discipline required to build trustworthy AI features."
        />
      </MotionFade>

      <div className="mt-14 grid gap-6">
        {posts.map((post, index) => (
          <MotionFade key={post.slug} delay={index * 0.05}>
            <BlogCard post={post} />
          </MotionFade>
        ))}
      </div>
    </Container>
  );
}
