"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Info, Database, BarChart2, CheckCircle2, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

// ---------------------------
// Mock Data
// ---------------------------
type Source = {
  id: string;
  name: string;
  weight: number; // contribution %
  confidence: number; // 0–100
  description: string;
  icon: React.ReactNode;
};

const sources: Source[] = [
  {
    id: "1",
    name: "Surveys",
    weight: 45,
    confidence: 92,
    description: "Self-reported metrics collected via monthly pulse surveys.",
    icon: <BarChart2 className="w-4 h-4 text-blue-600" />,
  },
  {
    id: "2",
    name: "1:1 Meetings",
    weight: 25,
    confidence: 85,
    description: "Manager-to-individual session summaries and feedback.",
    icon: <CheckCircle2 className="w-4 h-4 text-green-600" />,
  },
  {
    id: "3",
    name: "Online Team Meetings",
    weight: 20,
    confidence: 78,
    description: "Behavioral and sentiment analysis of group meeting interactions.",
    icon: <Database className="w-4 h-4 text-purple-600" />,
  },
  {
    id: "4",
    name: "Performance Reviews",
    weight: 10,
    confidence: 88,
    description: "Formal quarterly review feedback and competency ratings.",
    icon: <BarChart2 className="w-4 h-4 text-amber-600" />,
  },
];

// ---------------------------
// Confidence Level
// ---------------------------
function getConfidenceColor(value: number): string {
  if (value >= 90) return "bg-green-500";
  if (value >= 75) return "bg-blue-500";
  if (value >= 60) return "bg-amber-500";
  return "bg-red-500";
}

// ---------------------------
// Component
// ---------------------------
export default function DataSourcesConfidence() {
  const overallConfidence = Math.round(
    sources.reduce((acc, s) => acc + s.confidence * (s.weight / 100), 0)
  );

  return (
    <Card className="w-full border rounded-2xl shadow-sm bg-white p-4">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Database className="w-5 h-5 text-gray-700" />
          Data Sources & Confidence
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Overall Confidence Summary */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-xl border p-4 flex flex-col gap-2"
        >
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-gray-700">
              Overall Data Confidence
            </p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="w-4 h-4 text-gray-500 cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent className="max-w-[220px] text-xs text-gray-600">
                  Weighted average of confidence scores across all data sources.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex items-center gap-3">
            <Progress
              value={overallConfidence}
              className="h-2 flex-1"
            />
            <p className="text-sm font-semibold text-gray-800 w-10 text-right">
              {overallConfidence}%
            </p>
          </div>
        </motion.div>

        {/* Individual Data Sources */}
        <div className="flex flex-col gap-4">
          {sources.map((source) => (
            <motion.div
              key={source.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border rounded-lg p-4 hover:bg-gray-50 transition"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {source.icon}
                  <p className="text-sm font-medium text-gray-800">
                    {source.name}
                  </p>
                  <span className="text-xs text-gray-500">
                    ({source.weight}% weight)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${getConfidenceColor(
                      source.confidence
                    )}`}
                  />
                  <p className="text-sm text-gray-700 font-semibold">
                    {source.confidence}%
                  </p>
                </div>
              </div>

              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden mb-2">
                <div
                  className={`${getConfidenceColor(source.confidence)} h-2 rounded-full`}
                  style={{ width: `${source.confidence}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-600">{source.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Data Health Warning */}
        {overallConfidence < 75 && (
          <div className="mt-4 flex items-center gap-2 text-amber-600 text-sm font-medium">
            <AlertTriangle className="w-4 h-4" />
            Data coverage is limited — insights may not be fully reliable.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
