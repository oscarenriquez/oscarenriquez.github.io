import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award } from "lucide-react";
import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { MotionFade } from "@/components/site/motion-fade";
import { ProjectCard } from "@/components/site/project-card";
import { SectionHeading } from "@/components/site/section-heading";
import { StackCloud } from "@/components/site/stack-cloud";
import { CtaBanner } from "@/components/site/cta-banner";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Senior Software Engineer | Distributed Systems, GCP, FinTech",
  description:
    "Portfolio of Oscar Enriquez, a Senior Software Engineer specializing in distributed systems, cloud architecture on GCP, backend engineering, and payment-grade platforms.",
  alternates: {
    canonical: "/"
  }
};

export default async function HomePage() {
  const projects = await getFeaturedProjects();

  return (
    <div className="pb-10">
      <Container className="pt-20 pb-24 md:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px] lg:gap-16">
          <MotionFade className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Senior Software Engineer</p>
            <div className="mt-6 space-y-3">
              <p className="text-2xl font-medium tracking-[-0.04em] text-slate-700 md:text-3xl">{siteConfig.name}</p>
              <h1 className="text-5xl font-semibold tracking-[-0.06em] text-slate-950 md:text-7xl">
                {siteConfig.title}
              </h1>
            </div>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">
              I build reliable backend platforms, cloud-native systems, and full-stack product experiences with the
              same rigor expected in payments: clear trade-offs, strong observability, and production discipline.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/projects">
                <Button size="lg">
                  View projects
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Contact
                </Button>
              </Link>
            </div>
            <div className="mt-6">
              <Link
                href={siteConfig.social.credly}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-950"
              >
                <Award className="size-4" />
                View certifications on Credly
              </Link>
            </div>
          </MotionFade>

          <MotionFade delay={0.08} className="mx-auto w-full max-w-[360px] lg:mx-0">
            <div className="surface overflow-hidden rounded-[2rem] border border-slate-200/70 p-3 shadow-[var(--shadow-soft)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-100">
                <Image
                  src="/images/profile.jpeg"
                  alt="Portrait of Oscar Enriquez"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 320px, 360px"
                />
              </div>
            </div>
          </MotionFade>
        </div>
      </Container>

      <Container className="pb-24">
        <MotionFade>
          <SectionHeading
            eyebrow="Featured Work"
            title="Selected systems shaped around reliability, platform thinking, and practical AI."
            description="These case studies highlight the problem, the architecture behind the solution, and the trade-offs that mattered in implementation."
          />
        </MotionFade>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <MotionFade key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </MotionFade>
          ))}
        </div>
      </Container>

      <Container className="pb-24">
        <MotionFade>
          <SectionHeading
            eyebrow="Core Stack"
            title="Backend depth with credible full-stack and cloud execution."
            description="The stack reflects day-to-day engineering work across backend services, product-facing applications, cloud delivery, and applied AI."
          />
        </MotionFade>
        <div className="mt-12">
          <StackCloud />
        </div>
      </Container>

      <CtaBanner />
    </div>
  );
}
