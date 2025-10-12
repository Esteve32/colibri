// data/agents.ts
export type AICompanion = {
  id: string;
  name: string;
  role: string;
  description: string;
  team: string;
};

export const aiCompanions: AICompanion[] = [
  {
    id: "1",
    name: "Aria",
    role: "Design Strategist",
    team: "Design",
    description:
      "Helps you brainstorm creative concepts, refine UI/UX flows, and review visual designs with detailed, constructive feedback.",
  },
  {
    id: "2",
    name: "Nova",
    role: "Tech Architect",
    team: "Engineering",
    description:
      "Ideal for discussing software architecture, optimizing code performance, and exploring emerging technologies.",
  },
  {
    id: "3",
    name: "Finley",
    role: "Financial Analyst",
    team: "Finance",
    description:
      "Specializes in budget forecasting, KPI analysis, and generating insightful financial reports or dashboards.",
  },
  {
    id: "4",
    name: "Harper",
    role: "HR Companion",
    team: "Human Resources",
    description:
      "Supports recruitment planning, employee engagement strategies, and policy documentation in an empathetic tone.",
  },
  {
    id: "5",
    name: "Echo",
    role: "Marketing Intelligence Lead",
    team: "Marketing",
    description:
      "Great for campaign ideation, audience analysis, and writing engaging brand messages powered by data insights.",
  },
  {
    id: "6",
    name: "Atlas",
    role: "Operations Optimizer",
    team: "Operations",
    description:
      "Helps streamline workflows, improve cross-department collaboration, and identify efficiency bottlenecks.",
  },
];
