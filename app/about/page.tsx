import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { MotionFade } from "@/components/site/motion-fade";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { certifications, experienceTimeline, skillGroups } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Career story of a Senior Software Engineer across data foundations, enterprise systems, telecommunications, and global fintech platforms.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <Container className="py-20 md:py-28">
      <MotionFade>
        <SectionHeading
          eyebrow="About"
          title="Senior engineer with a systems mindset, now leaning harder into cloud and AI."
          description="My background is rooted in backend engineering and payment-critical environments. The next layer is broader platform ownership: cloud architecture, AI integration, and product thinking that still respects operational realities."
        />
      </MotionFade>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <MotionFade delay={0.05}>
          <Card>
            <CardContent>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Experience</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                My path has been less about employer names and more about increasing system complexity, business
                responsibility, and architectural ownership over time.
              </p>
              <div className="mt-8 space-y-8">
                {experienceTimeline.map((item) => (
                  <div key={item.company} className="border-l border-slate-200 pl-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.period}</p>
                    <h4 className="mt-2 text-lg font-medium text-slate-950">
                      {item.role} · {item.company}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </MotionFade>

        <MotionFade delay={0.1}>
          <Card>
            <CardContent>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Skills</h3>
              <div className="mt-8 space-y-8">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <p className="text-sm font-medium text-slate-950">{group.title}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                <div>
                  <p className="text-sm font-medium text-slate-950">Certifications</p>
                  <div className="mt-4 grid gap-3">
                    {certifications.map((certification) => (
                      <a
                        key={certification.href}
                        href={certification.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-[1.25rem] border border-slate-200 bg-white/90 px-4 py-4 transition-colors hover:border-slate-300"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-medium text-slate-950">{certification.name}</p>
                            <p className="mt-1 text-sm text-slate-500">
                              {certification.shortName} · {certification.issuer}
                            </p>
                          </div>
                          <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-slate-400" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionFade>
      </div>
    </Container>
  );
}
