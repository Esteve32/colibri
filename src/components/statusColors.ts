// src/styles/statusColors.ts

export const statusColors = {
  bad: {
    bg: "bg-red-50",
    text: "text-red-700",
  },
  middle: {
    bg: "bg-orange-100",
    text: "text-orange-800",
  },
  good: {
    bg: "bg-green-50",
    text: "text-green-700",
  },
  excellent: {
    bg: "bg-teal-50",
    text: "text-teal-700",
  },
} as const;

// Helper function to determine which color to use based on status
export const getStatusLevel = (status: number): keyof typeof statusColors => {
  if (status <= 33) return "bad";
  if (status <= 65) return "middle";
  if (status <= 80) return "good";
  return "excellent";
};

// Optional: If you also want a readable label
export const getStatusLabel = (status: number): string => {
  const level = getStatusLevel(status);
  switch (level) {
    case "bad":
      return "Bad";
    case "middle":
      return "Middle";
    case "good":
      return "Good";
    case "excellent":
      return "Excellent";
  }
};
