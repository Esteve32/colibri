// lib/data/activities.ts
export interface Activity {
  id: number;
  type: "file" | "invite" | "comment" | "survey";
  description: string;
  time: Date;
}

export const activities: Activity[] = [
  {
    id: 1,
    type: "file",
    description: "Added design-doc-v2.pdf to Marketing project",
    time: new Date(Date.now() - 15 * 60 * 1000), // 15 mins ago
  },
  {
    id: 2,
    type: "invite",
    description: "Invited Carol to join your workspace",
    time: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  },
  {
    id: 3,
    type: "comment",
    description: "Commented on the 'Q4 Goals' thread",
    time: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
  },
  {
    id: 4,
    type: "survey",
    description: "Completed team feedback survey",
    time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
  },
];
