import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Section({ className, children, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <div className="mx-auto max-w-5xl px-6">{children}</div>
    </section>
  );
}
