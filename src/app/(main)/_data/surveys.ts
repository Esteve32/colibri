// data/surveys.ts
export type SurveyGroup = "individual" | "team" | "orgLeader" | "companyLeader";

export interface SurveyQuestion {
  id: string;
  question: string;
  options: string[];
  answers?: { option: string; count: number }[]; // optional for stats
}

export interface Survey {
  id: string;
  title: string;
  description: string;
  group: SurveyGroup;
  completionRate: number; // percentage (0–100)
  questions: SurveyQuestion[];
}

export const surveys: Survey[] = [
  {
    id: "1",
    title: "Individual Wellbeing Survey",
    description: "Understand how employees are feeling day-to-day.",
    group: "individual",
    completionRate: 82,
    questions: [
      {
        id: "q1",
        question: "How satisfied are you with your work-life balance?",
        options: [
          "Very satisfied",
          "Somewhat satisfied",
          "Neutral",
          "Somewhat dissatisfied",
          "Very dissatisfied",
        ],
        answers: [
          { option: "Very satisfied", count: 40 },
          { option: "Somewhat satisfied", count: 30 },
          { option: "Neutral", count: 15 },
          { option: "Somewhat dissatisfied", count: 10 },
          { option: "Very dissatisfied", count: 5 },
        ],
      },
      {
        id: "q2",
        question: "How supported do you feel by your manager?",
        options: [
          "Very supported",
          "Somewhat supported",
          "Neutral",
          "Somewhat unsupported",
          "Not supported at all",
        ],
        answers: [
          { option: "Very supported", count: 50 },
          { option: "Somewhat supported", count: 25 },
          { option: "Neutral", count: 10 },
          { option: "Somewhat unsupported", count: 10 },
          { option: "Not supported at all", count: 5 },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Team Collaboration Survey",
    description: "Assess how well teams work together and communicate.",
    group: "team",
    completionRate: 67,
    questions: [
      {
        id: "q1",
        question: "How effectively does your team communicate?",
        options: [
          "Extremely effectively",
          "Very effectively",
          "Moderately effectively",
          "Slightly effectively",
          "Not effectively at all",
        ],
      },
      {
        id: "q2",
        question: "Do you feel your team resolves conflicts constructively?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
    ],
  },
  {
    id: "3",
    title: "Organization Leadership Feedback",
    description: "Gather feedback about organizational leadership and direction.",
    group: "orgLeader",
    completionRate: 74,
    questions: [
      {
        id: "q1",
        question: "How transparent is leadership in decision-making?",
        options: [
          "Very transparent",
          "Somewhat transparent",
          "Neutral",
          "Somewhat opaque",
          "Very opaque",
        ],
      },
      {
        id: "q2",
        question: "Do you trust the organization’s leadership?",
        options: ["Completely", "Mostly", "Somewhat", "Slightly", "Not at all"],
      },
    ],
  },
  {
    id: "4",
    title: "Company Leadership Insight",
    description:
      "Survey designed for company leaders to reflect on strategic alignment and culture.",
    group: "companyLeader",
    completionRate: 90,
    questions: [
      {
        id: "q1",
        question: "How aligned are company goals with long-term vision?",
        options: ["Fully aligned", "Mostly aligned", "Somewhat aligned", "Slightly misaligned", "Not aligned"],
      },
      {
        id: "q2",
        question: "How confident are you in the company’s growth strategy?",
        options: [
          "Extremely confident",
          "Very confident",
          "Moderately confident",
          "Slightly confident",
          "Not confident",
        ],
      },
    ],
  },
];
