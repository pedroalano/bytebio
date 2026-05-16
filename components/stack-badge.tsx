import { cn } from "@/lib/utils";

export function StackBadge({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent",
        className,
      )}
    >
      {label}
    </span>
  );
}
