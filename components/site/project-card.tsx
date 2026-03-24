import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ContentItem, ProjectFrontmatter } from "@/lib/content";

export function ProjectCard({
  project
}: {
  project: ContentItem<ProjectFrontmatter>;
}) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col gap-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{project.title}</h3>
          <p className="text-sm leading-7 text-slate-600">{project.summary}</p>
        </div>
        <div className="space-y-3 text-sm text-slate-700">
          <p>
            <span className="text-slate-950">Problem:</span> {project.problem}
          </p>
          <p>
            <span className="text-slate-950">Solution:</span> {project.solution}
          </p>
          <p>
            <span className="text-slate-950">Architecture:</span> {project.architecture}
          </p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Badge key={item} className="border-slate-200 bg-slate-50 text-slate-700">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
