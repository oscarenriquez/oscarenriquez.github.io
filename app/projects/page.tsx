import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { MotionFade } from "@/components/site/motion-fade";
import { ProjectCard } from "@/components/site/project-card";
import { SectionHeading } from "@/components/site/section-heading";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software engineering case studies covering distributed systems, cloud architecture, event-driven systems, and data platforms.",
  alternates: {
    canonical: "/projects"
  }
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <Container className="py-20 md:py-28">
      <MotionFade>
        <SectionHeading
          eyebrow="Projects"
          title="Architecture-led case studies instead of gallery pieces."
          description="The framing stays senior: problem context, implementation trade-offs, and why the chosen architecture fits production constraints."
        />
      </MotionFade>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <MotionFade key={project.slug} delay={index * 0.06}>
            <ProjectCard project={project} />
          </MotionFade>
        ))}
      </div>
    </Container>
  );
}
