import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { StackBadge } from "@/components/stack-badge";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  variant?: "compact" | "detailed";
  className?: string;
};

export function ProjectCard({ project, variant = "compact", className }: Props) {
  const detailed = variant === "detailed";

  return (
    <article
      className={cn(
        "group rounded-lg border border-border border-t-2 border-t-accent bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent",
        className,
      )}
    >
      <header className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        </div>
        {!detailed && (
          <Link
            href="/projects"
            aria-label={`View ${project.title} details`}
            className="text-muted transition-colors group-hover:text-accent"
          >
            <ArrowUpRight size={18} />
          </Link>
        )}
      </header>

      {detailed && (
        <div className="mt-6 space-y-5 text-sm leading-relaxed text-foreground/90">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">
              Problem it solves
            </h4>
            <p className="mt-2 text-muted">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">
              Key technical decisions
            </h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
              {project.decisions.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <StackBadge key={s} label={s} />
        ))}
      </div>

      {detailed && (
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon size={14} /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
      )}
    </article>
  );
}
