// src/data/teamData.ts

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  strategy: number;
  workflows: number;
  legal: number;
  tools: number;
  processes: number;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Project Manager",
    strategy: 70,
    workflows: 65,
    legal: 80,
    tools: 75,
    processes: 68,
  },
  {
    id: 2,
    name: "Ben Carter",
    role: "Operations Analyst",
    strategy: 60,
    workflows: 55,
    legal: 70,
    tools: 65,
    processes: 60,
  },
  {
    id: 3,
    name: "Sofia Lee",
    role: "Legal Specialist",
    strategy: 75,
    workflows: 70,
    legal: 90,
    tools: 80,
    processes: 72,
  },
];
