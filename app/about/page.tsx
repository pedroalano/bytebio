import { Download } from "lucide-react";
import { Section } from "@/components/section";
import { StackBadge } from "@/components/stack-badge";
import { stackGroups } from "@/lib/stack";

export const metadata = { title: "About — Pedro Alano" };

export default function AboutPage() {
  return (
    <>
      <Section className="pt-20 pb-8 md:pt-24 md:pb-10">
        <p className="text-sm font-medium text-accent">About</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          A short story, and the tools I reach for.
        </h1>
      </Section>

      <Section className="py-8 md:py-10">
        {/* TODO: replace with your personal story */}
        <div className="prose-content max-w-2xl space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            I&apos;m a fullstack developer with my heart on the backend — schemas,
            queues, and the small decisions that keep a system honest at 3am. I care
            about code that reads well a year after it ships.
          </p>
          <p>
            Outside of work I tinker with personal projects (see Projects), read about
            distributed systems, and try to keep my own focus practice deliberate.
          </p>
        </div>
      </Section>

      <Section className="py-8 md:py-10">
        <h2 className="text-2xl font-semibold tracking-tight">My stack</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-border border-t-2 border-t-accent bg-card p-5"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-accent">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <StackBadge key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-12 md:py-14">
        {/* TODO: drop your real CV at public/cv.pdf */}
        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <Download size={14} /> Download CV
        </a>
      </Section>
    </>
  );
}
