"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle2,
  Lightbulb,
  Calendar,
  Plus,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ActionItem = {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in_progress" | "completed";
  category: "leadership" | "trust" | "motivation" | "pressure" | "identity";
  due: string;
  progress: number;
};

const initialActions: ActionItem[] = [
  {
    id: "1",
    title: "Schedule a 1:1 to discuss project load",
    description:
      "Helps to recalibrate expectations and reduce rising pressure levels.",
    status: "in_progress",
    category: "pressure",
    due: "2025-10-20",
    progress: 40,
  },
  {
    id: "2",
    title: "Recognize peer contributions in next team call",
    description:
      "Boosts trust and strengthens leadership presence during meetings.",
    status: "pending",
    category: "trust",
    due: "2025-10-15",
    progress: 0,
  },
];

const categoryColors = {
  leadership: "bg-indigo-100 text-indigo-700",
  trust: "bg-green-100 text-green-700",
  motivation: "bg-blue-100 text-blue-700",
  pressure: "bg-red-100 text-red-700",
  identity: "bg-amber-100 text-amber-700",
};

const aiSuggestions = [
  {
    trend: "pressure ↑",
    suggestion:
      "Consider delegating low-priority tasks or requesting support to balance workload.",
    category: "pressure",
  },
  {
    trend: "motivation ↓",
    suggestion:
      "Revisit personal growth goals and identify energizing activities for next sprint.",
    category: "motivation",
  },
  {
    trend: "trust ↓",
    suggestion:
      "Schedule informal check-ins to rebuild communication flow with peers.",
    category: "trust",
  },
  {
    trend: "leadership ↑",
    suggestion:
      "Encourage leading a mini-project or mentoring session to reinforce leadership growth.",
    category: "leadership",
  },
  {
    trend: "identity stable",
    suggestion:
      "Maintain current reflection rhythm — identity consistency supports long-term engagement.",
    category: "identity",
  },
];

// ---------------------------
// Component
// ---------------------------
export default function ActionZone() {
  const [actions, setActions] = useState(initialActions);
  const [showAISuggestions, setShowAISuggestions] = useState(false);
  const [loadingAI, setLoadingAI] = useState(false);

  const handleGenerateAI = async () => {
    setLoadingAI(true);

    // Simulate API delay
    setTimeout(() => {
      const suggestion =
        aiSuggestions[Math.floor(Math.random() * aiSuggestions.length)];
      const newItem: ActionItem = {
        id: Date.now().toString(),
        title: suggestion.suggestion,
        description: `Generated from trend: ${suggestion.trend}`,
        status: "pending",
        category: suggestion.category as ActionItem["category"],
        due: "2025-10-25",
        progress: 0,
      };
      setActions((prev) => [...prev, newItem]);
      setLoadingAI(false);
      setShowAISuggestions(true);
    }, 1200);
  };

  const completedCount = actions.filter((a) => a.status === "completed").length;

  return (
    <Card className="w-full border rounded-2xl shadow-sm bg-white p-4">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
          Action Zone — Recommendations & Next Steps
        </CardTitle>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleGenerateAI}
            disabled={loadingAI}
          >
            {loadingAI ? (
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 animate-spin text-yellow-500" />{" "}
                Generating...
              </div>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-yellow-500" /> Generate AI Action
              </>
            )}
          </Button>
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 mr-1" /> Manual
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Active Goals */}
        <div className="flex flex-col gap-5">
          {actions.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border rounded-xl p-4 hover:bg-gray-50 transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className={cn(categoryColors[item.category], "capitalize")}>
                      {item.category}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={cn(
                        item.status === "completed" && "text-green-600 border-green-300",
                        item.status === "in_progress" && "text-blue-600 border-blue-300",
                        item.status === "pending" && "text-gray-600 border-gray-300"
                      )}
                    >
                      {item.status.replace("_", " ")}
                    </Badge>
                  </div>

                  <h3 className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                </div>

                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" /> {item.due}
                </div>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <Progress value={item.progress} className="flex-1 h-2" />
                <span className="text-xs font-medium text-gray-700 w-10 text-right">
                  {item.progress}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <Separator />

        {/* AI Feedback Message */}
        {showAISuggestions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-yellow-50 border border-yellow-200 rounded-xl p-4"
          >
            <p className="text-sm text-yellow-800 font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              New AI recommendation added based on recent behavioral changes.
            </p>
          </motion.div>
        )}

        {/* Completion Indicator */}
        <div className="mt-4 flex items-center gap-2 text-gray-600 text-sm">
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          {completedCount} of {actions.length} actions completed
        </div>
      </CardContent>
    </Card>
  );
}
