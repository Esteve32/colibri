// /data/roles.ts

export interface Role {
  id: number;
  key: "individual" | "teamManager" | "orgManager" | "companyManager";
  label: string;
  description: string;
  color: string; // optional for UI theming
  permissions: string[]; // optional — easily expandable
}

export const roles: Role[] = [
  {
    id: 1,
    key: "individual",
    label: "Individual",
    description: "A personal account with limited access and no management privileges.",
    color: "#60a5fa", // blue-400
    permissions: ["view_self", "edit_profile"],
  },
  {
    id: 2,
    key: "teamManager",
    label: "Team Manager",
    description: "Manages a small team, can oversee members and assign tasks.",
    color: "#34d399", // green-400
    permissions: ["view_team", "manage_team", "assign_tasks"],
  },
  {
    id: 3,
    key: "orgManager",
    label: "Organization Manager",
    description: "Oversees multiple teams and can manage organization-level settings.",
    color: "#fbbf24", // yellow-400
    permissions: ["view_org", "manage_org", "invite_members"],
  },
  {
    id: 4,
    key: "companyManager",
    label: "Company Manager",
    description: "Has full control over the company and its organizations.",
    color: "#f87171", // red-400
    permissions: ["full_access", "manage_billing", "manage_all_users"],
  },
];

// Helper map for quick lookups
export const ROLE_MAP = roles.reduce<Record<string, Role>>((acc, role) => {
  acc[role.key] = role;
  return acc;
}, {});
