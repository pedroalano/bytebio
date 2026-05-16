export type StackGroup = {
  title: string;
  items: string[];
};

// TODO: tweak the items to match your actual toolbox
export const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Go", "Python", "REST", "tRPC"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "SQLite", "Redis", "Prisma"],
  },
  {
    title: "DevOps",
    items: ["Docker", "Linux/VPS", "GitHub Actions", "Nginx"],
  },
];
