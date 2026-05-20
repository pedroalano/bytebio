import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Section } from "@/components/section";
import { getAllPosts, getPost } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: `${post.title} — Pedro Alano`, description: post.excerpt };
}

export const dynamicParams = false;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  return (
    <Section className="pt-20 pb-16 md:pt-24">
      <Link
        href="/blog"
        className="text-sm text-muted hover:text-accent transition-colors"
      >
        ← Back to blog
      </Link>

      <header className="mt-8 mb-10 border-b border-border pb-8">
        <p className="text-sm font-medium text-muted">{formatDate(post.date)}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-lg text-muted">{post.excerpt}</p>
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-code:text-accent prose-pre:bg-card prose-pre:border prose-pre:border-border">
        <MDXRemote source={post.content} />
      </div>
    </Section>
  );
}
