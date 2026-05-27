import { Section } from "@/components/section";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

export const metadata = { title: "Contact — Pedro Alano" };

export default function ContactPage() {
  return (
    <Section className="pt-20 md:pt-24">
      <p className="text-sm font-medium text-accent">Contact</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        Say hi.
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Have a project in mind, or just want to chat about backends? Drop a message —
        I read everything.
      </p>

      <div className="mt-10 space-y-4">
        <a
          href="https://github.com/pedroalano"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-md border border-border px-4 py-3 transition-colors hover:border-accent hover:text-accent"
        >
          <GithubIcon size={18} /> github.com/pedroalano
        </a>
        <a
          href="https://www.linkedin.com/in/pedro-alano/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-md border border-border px-4 py-3 transition-colors hover:border-accent hover:text-accent"
        >
          <LinkedinIcon size={18} /> linkedin.com/in/pedro-alano
        </a>
      </div>
    </Section>
  );
}
