"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Lightbulb, Calendar, Plus, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// ---------------------------
// Mock Data
// ---------------------------
type ActionItem = {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in_progress" | "completed";
  category: "leadership" | "trust" | "motivation" | "pressure" | "identity";
  due: string;
  progress: number;
};

const actions: ActionItem[] = [
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
  {
    id: "3",
    title: "Reflect weekly on motivation drivers",
    description:
      "Identify moments that sustain engagement and energy levels.",
    status: "completed",
    category: "motivation",
    due: "2025-10-05",
    progress: 100,
  },
];

// ---------------------------
// Category Color Map
// ---------------------------
const categoryColors: Record<ActionItem["category"], string> = {
  leadership: "bg-indigo-100 text-indigo-700",
  trust: "bg-green-100 text-green-700",
  motivation: "bg-blue-100 text-blue-700",
  pressure: "bg-red-100 text-red-700",
  identity: "bg-amber-100 text-amber-700",
};

// ---------------------------
// Component
// ---------------------------
export default function ActionZone() {
  const [data, setData] = useState(actions);

  const addNewAction = () => {
    const newItem: ActionItem = {
      id: Date.now().toString(),
      title: "New Recommendation",
      description: "Auto-generated suggestion based on recent behavioural trend.",
      status: "pending",
      category: "leadership",
      due: "2025-10-25",
      progress: 0,
    };
    setData((prev) => [...prev, newItem]);
  };

  return (
    <Card className="w-full border rounded-2xl shadow-sm bg-white p-4">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
          Action Zone — Recommendations & Next Steps
        </CardTitle>
        <Button variant="outline" size="sm" onClick={addNewAction}>
          <Plus className="w-4 h-4 mr-1" /> Add
        </Button>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Active Goals */}
        <div className="flex flex-col gap-5">
          {data.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border rounded-xl p-4 hover:bg-gray-50 transition group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge
                      className={`${categoryColors[item.category]} capitalize`}
                    >
                      {item.category}
                    </Badge>
                    {item.status === "completed" && (
                      <Badge variant="outline" className="text-green-600 border-green-300">
                        Completed
                      </Badge>
                    )}
                    {item.status === "in_progress" && (
                      <Badge variant="outline" className="text-blue-600 border-blue-300">
                        In Progress
                      </Badge>
                    )}
                    {item.status === "pending" && (
                      <Badge variant="outline" className="text-gray-600 border-gray-300">
                        Pending
                      </Badge>
                    )}
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

        {/* AI Recommendations Section */}
        <div className="bg-gray-50 rounded-xl border p-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-yellow-500" /> Smart Recommendations
          </h4>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex items-start gap-2">
              <ArrowRight className="w-3 h-3 mt-[3px] text-gray-400" />
              Encourage Alex to lead the next sprint retrospective to reinforce leadership and trust.
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-3 h-3 mt-[3px] text-gray-400" />
              Suggest scheduling a “pulse survey” in 2 weeks to track motivation changes.
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-3 h-3 mt-[3px] text-gray-400" />
              Recommend a brief reflection on identity alignment after project wrap-up.
            </li>
          </ul>
        </div>

        {/* Completion Indicator */}
        <div className="mt-6 flex items-center gap-2 text-gray-600 text-sm">
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          {data.filter((d) => d.status === "completed").length} of{" "}
          {data.length} actions completed
        </div>
      </CardContent>
    </Card>
  );
}
