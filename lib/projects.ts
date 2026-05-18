export type Project = {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  decisions: string[];
  stack: string[];
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    slug: "my-pocket",
    title: "My Pocket",
    tagline: "Personal finance monorepo: transactions, budgets, recurring entries.",
    problem:
      "Spreadsheets and single-app finance trackers struggle once you add multi-account tracking, recurring entries, budgets, and locale-aware reports. My Pocket bundles all of it in one self-hostable stack with strict per-user isolation.",
    decisions: [
      "Turborepo monorepo (NestJS API + Next.js 15 web + shared packages) keeps types and tooling consistent across boundaries.",
      "Short-lived JWT access tokens (15m) with revocable refresh tokens (7d); mandatory email verification before first login.",
      "Hourly scheduler materializes recurring transactions, so reports stay accurate without manual entry.",
      "Locale-aware money formatting (USD/BRL) via next-intl + nestjs-i18n instead of hard-coded currency.",
      "Structured JSON logging shipped to Loki/Promtail/Grafana in production for real observability.",
    ],
    stack: ["Next.js 15", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Turborepo", "Docker"],
    github: "https://github.com/pedroalano/my-pocket",
    demo: "",
  },
  {
    slug: "zenfocus",
    title: "ZenFocus",
    tagline: "Daily focus surface + Kanban engine in one dashboard.",
    problem:
      "Productivity tooling fragments daily intention-setting from ongoing project work. ZenFocus unifies a minimalist daily focus view with a real Kanban board so context-switching between apps disappears.",
    decisions: [
      "Shared packages/types is the single source of truth for network shapes — no DTO duplication across NestJS API and Next.js client.",
      "Stateless JWT access tokens (15m) + Redis-backed refresh rotation (7d) — revocation without persistent sessions.",
      "Socket.io scoped to board card sync only; conflicts resolved last-write-wins by server timestamp.",
      "Pomodoro timer runs fully client-side (Zustand + localStorage) — zero backend coupling for the focus loop.",
    ],
    stack: ["Next.js 14", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Socket.io", "Zustand"],
    github: "https://github.com/pedroalano/discipline-equals-freedom",
    demo: "",
  },
];
