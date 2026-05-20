import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { PostCard } from "@/components/post-card";
import { projects } from "@/lib/projects";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 2);

  return (
    <>
      <Section className="pt-20 pb-12 md:pt-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent">Hello there —</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Pedro Alano
          </h1>
          <p className="mt-3 text-lg text-muted">
            Fullstack Developer · Backend Focused
          </p>
          {/* TODO: replace with your own one-liner */}
          <p className="mt-6 text-base leading-relaxed text-foreground/90">
            I build pragmatic, well-tested backends and the thin frontends that make
            them feel effortless. Currently exploring better tools for personal finance
            and focused work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              See projects <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </Section>

      <Section className="py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Featured projects</h2>
          <Link
            href="/projects"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <Section className="py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Latest from the blog</h2>
          <Link
            href="/blog"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="mt-6 flex flex-col gap-5">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>
    </>
  );
}
