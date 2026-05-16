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

// TODO: replace URLs, problem text, and decisions with your own content
export const projects: Project[] = [
  {
    slug: "finances",
    title: "Finances App",
    tagline: "Personal finance tracker with budgets and reports.",
    problem:
      "Spreadsheets break down when you want shared budgets, recurring entries, and quick monthly summaries. Finances App is a focused alternative that keeps your data private and the workflow fast.",
    decisions: [
      "Server actions over a sprawling REST surface — fewer endpoints, less typing duplication.",
      "Prisma for schema-as-source-of-truth; migrations stay reviewable in PRs.",
      "NextAuth with email magic links — no password storage to worry about.",
      "PostgreSQL for relational integrity on transactions and category rollups.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth"],
    github: "https://github.com/pedroalano/finances",
    demo: "https://finances.example.com",
  },
  {
    slug: "habit-focus",
    title: "Habit / Focus App",
    tagline: "Habit tracking paired with deep focus sessions.",
    problem:
      "Most habit apps lose context between intention and execution. Habit/Focus links each habit to focus sessions so the streak reflects actual deep work, not just box-checking.",
    decisions: [
      "SQLite via file-backed DB — single-user app, zero ops overhead.",
      "Cron jobs roll over daily streaks at the user's local midnight, not UTC.",
      "Pure-function streak logic with property-based tests against edge cases.",
      "Optimistic UI for habit toggles, with rollback on server error.",
    ],
    stack: ["Next.js", "TypeScript", "SQLite", "Cron jobs", "Streak logic"],
    github: "https://github.com/pedroalano/habit-focus",
    demo: "https://habits.example.com",
  },
];
