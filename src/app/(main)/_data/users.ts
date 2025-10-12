import { ROLE_MAP } from "./roles";

export type UserRole = keyof typeof ROLE_MAP;

export interface User {
  id: string;
  fullName: string;
  email: string;
  avatar: string;
  role: UserRole;
  roleId: number;
  status: "active" | "inactive" | "pending";
  location: string;
  bio: string;
}

export const users: User[] = [
  {
    id: "u1",
    fullName: "Alice Johnson",
    email: "alice.johnson@example.com",
    avatar: "/assets/avatars/samples/mollie_hall.jpg",
    role: "individual",
    roleId: ROLE_MAP.individual.id,
    status: "active",
    location: "San Francisco, USA",
    bio: "Freelance designer passionate about clean interfaces and usability.",
  },
  {
    id: "u3",
    fullName: "Cynthia Gomez",
    email: "cynthia.gomez@example.com",
    avatar: "/assets/avatars/samples/nikolas_gibbons.jpg",
    role: "teamManager",
    roleId: ROLE_MAP.teamManager.id,
    status: "active",
    location: "Austin, USA",
    bio: "Leads a small team of engineers focused on product analytics.",
  },
  {
    id: "u5",
    fullName: "Elena Petrova",
    email: "elena.petrova@example.com",
    avatar: "/assets/avatars/samples/pippa_wilkinson.jpg",
    role: "orgManager",
    roleId: ROLE_MAP.orgManager.id,
    status: "active",
    location: "Berlin, Germany",
    bio: "Organizational manager with experience in scaling engineering departments.",
  },
  {
    id: "u7",
    fullName: "Grace Tan",
    email: "grace.tan@example.com",
    avatar: "/assets/avatars/samples/mollie_hall.jpg",
    role: "companyManager",
    roleId: ROLE_MAP.companyManager.id,
    status: "active",
    location: "Singapore",
    bio: "Company manager with a background in corporate strategy and growth.",
  },
];
