import Link from "next/link";
import type { Post } from "@/lib/posts";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="rounded-lg border border-border border-t-2 border-t-accent bg-card p-6 transition-colors hover:border-accent">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">
          {formatDate(post.date)}
        </p>
        <h2 className="mt-2 text-lg font-semibold tracking-tight group-hover:text-accent transition-colors">
          {post.title}
        </h2>
        <p className="mt-2 text-sm text-muted line-clamp-2">{post.excerpt}</p>
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
      </article>
    </Link>
  );
}
