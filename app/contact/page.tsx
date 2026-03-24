import type { Metadata } from "next";
import { Github, Linkedin } from "lucide-react";
import { Container } from "@/components/site/container";
import { MotionFade } from "@/components/site/motion-fade";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Oscar Enriquez through LinkedIn and GitHub for senior software engineering, distributed systems, and cloud platform opportunities.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <Container className="py-20 md:py-28">
      <MotionFade>
        <SectionHeading
          eyebrow="Contact"
          title="Keep the contact flow direct and lightweight."
          description="This page stays intentionally minimal: social channels only, no embedded form, no extra friction."
        />
      </MotionFade>

      <MotionFade delay={0.05} className="mt-14">
        <Card className="max-w-3xl">
          <CardContent className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Connect</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                Open to senior cloud, platform, and AI-focused opportunities.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                If the work resonates, the best path is through LinkedIn or GitHub. The page stays static and clean,
                while preserving a professional way to reach out.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-slate-200 bg-white/90 px-5 py-5 text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950"
              >
                <span className="flex items-center gap-3 text-sm font-medium">
                  <Linkedin className="size-4" /> LinkedIn
                </span>
                <span className="mt-2 block text-sm text-slate-500">Professional profile and direct outreach</span>
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-slate-200 bg-white/90 px-5 py-5 text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950"
              >
                <span className="flex items-center gap-3 text-sm font-medium">
                  <Github className="size-4" /> GitHub
                </span>
                <span className="mt-2 block text-sm text-slate-500">Code samples, repos, and technical context</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </MotionFade>
    </Container>
  );
}
