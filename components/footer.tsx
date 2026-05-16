import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted">
          {/* TODO: replace with your content */}© {new Date().getFullYear()} Pedro Alano. Built with Next.js.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/pedroalano"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/pedroalano"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
