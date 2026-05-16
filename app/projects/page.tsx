import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata = { title: "Projects — Pedro Alano" };

export default function ProjectsPage() {
  return (
    <>
      <Section className="pt-20 pb-8 md:pt-24">
        <p className="text-sm font-medium text-accent">Projects</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Things I&apos;ve built and what I learned.
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          A short selection — focused on the design decisions and trade-offs rather
          than the feature list.
        </p>
      </Section>

      <Section className="py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="detailed" />
          ))}
        </div>
      </Section>
    </>
  );
}
