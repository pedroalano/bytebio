import { Section } from "@/components/section";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";

export const metadata = { title: "Blog — Pedro Alano" };

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Section className="pt-20 pb-8 md:pt-24">
        <p className="text-sm font-medium text-accent">Blog</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Writing on systems, code, and craft.
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Long-form notes on backend architecture, trade-offs I&apos;ve made, and
          things I keep learning.
        </p>
      </Section>

      <Section className="py-8">
        <div className="flex flex-col gap-5">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>
    </>
  );
}
