// src/data/riskCategories.ts

export type RiskSubItem = {
  id: string;
  name: string;
  description?: string;
  status?: number; // 0-100
};

export type RiskSubcategory = {
  id: string;
  name: string;
  description?: string;
  status?: number; // 0-100
  items?: RiskSubItem[];
};

export type RiskCategory = {
  id: string;
  name: "Environmental" | "Operational" | "Organizational" | "Human";
  description?: string;
  status?: number; // 0-100
  subcategories?: RiskSubcategory[];
};

/**
 * Convert numeric status into a descriptive label
 */
export const getStatusLabel = (status: number): "Bad" | "Middle" | "Good" | "Excellent" => {
  if (status <= 33) return "Bad";
  if (status <= 65) return "Middle";
  if (status <= 80) return "Good";
  return "Excellent";
};

export const riskCategories: RiskCategory[] = [
  {
    id: "env",
    name: "Environmental",
    description: "Factors related to the physical environment or external and internal conditions.",
    status: 70,
    subcategories: [
      {
        id: "env-external",
        name: "External",
        description: "External environmental influences that affect operations.",
        status: 60,
        items: [
          { id: "env-ext1", name: "Economic", description: "Market stability, inflation, and financial climate.", status: 75 },
          { id: "env-ext2", name: "Cultural Trends", description: "Shifts in consumer behavior or social values.", status: 50 },
          { id: "env-ext3", name: "Market", description: "Industry competition and external demand changes.", status: 40 },
        ],
      },
      {
        id: "env-internal",
        name: "Internal",
        description: "Internal environmental factors within the organization.",
        status: 80,
        items: [
          { id: "env-int1", name: "Social", description: "Workplace relationships and social dynamics.", status: 85 },
          { id: "env-int2", name: "Workplace", description: "Physical workspace conditions and organizational climate.", status: 70 },
        ],
      },
    ],
  },
  {
    id: "ops",
    name: "Operational",
    description: "Factors related to business operations and execution of day-to-day activities.",
    status: 55,
    subcategories: [
      { id: "ops-strategy", name: "Strategy", description: "Strategic planning and alignment.", status: 60 },
      { id: "ops-workflows", name: "Workflows", description: "Efficiency and clarity of internal work processes.", status: 50 },
      { id: "ops-legal", name: "Legal", description: "Compliance with laws and regulations.", status: 70 },
      { id: "ops-tools", name: "Tools", description: "Suitability and reliability of tools used.", status: 65 },
      { id: "ops-processes", name: "Processes", description: "Effectiveness of operational procedures.", status: 55 },
    ],
  },
  {
    id: "org",
    name: "Organizational",
    description: "Factors related to company structure, culture, workforce, and internal dynamics.",
    status: 50,
    subcategories: [
      { id: "org-turnover", name: "Turnover", description: "Staff retention and turnover rates affecting stability.", status: 45 },
      { id: "org-values", name: "Values", description: "Alignment of company values with actions and culture.", status: 55 },
      { id: "org-size", name: "Size", description: "Impact of organizational size on communication and agility.", status: 60 },
      { id: "org-state", name: "State", description: "Maturity, growth phase, or current condition of the organization.", status: 50 },
      { id: "org-structure", name: "Structure", description: "Roles, responsibilities, and hierarchies.", status: 65 },
      { id: "org-behaviours", name: "Behaviours", description: "Collective attitudes and conduct.", status: 55 },
    ],
  },
  {
    id: "hum",
    name: "Human",
    description: "Factors influenced by people and their behavior.",
    status: 60,
    subcategories: [
      { id: "hum-pressure", name: "Pressure", description: "Stress and workload impacting performance.", status: 30 },
      { id: "hum-attitude-values", name: "Attitude & Values", description: "Personal beliefs and mindset affecting behavior.", status: 65 },
      { id: "hum-motivation", name: "Motivation", description: "Drives and incentives influencing actions.", status: 25 },
      { id: "hum-identity", name: "Identity", description: "Individual or group identity shaping decisions and interactions.", status: 60 },
      { id: "hum-trust", name: "Trust", description: "Confidence in colleagues and organizational processes.", status: 75 },
      { id: "hum-personality", name: "Personality", description: "Traits affecting work style and communication.", status: 55 },
      { id: "hum-leadership", name: "Leadership", description: "Influence and guidance by leaders.", status: 80 },
    ],
  },
];
