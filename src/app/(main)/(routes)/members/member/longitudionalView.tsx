"use client";

import React, { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { CalendarDays, Activity, TrendingUp, Brain } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

// ---------------------------
// Mock Data
// ---------------------------
const sampleData = [
  { date: "2025-06-01", pressure: 6.2, motivation: 7.8, trust: 8.0, event: "Promotion" },
  { date: "2025-07-01", pressure: 7.1, motivation: 7.5, trust: 7.6 },
  { date: "2025-08-01", pressure: 7.8, motivation: 7.2, trust: 7.1, event: "High-pressure project" },
  { date: "2025-09-01", pressure: 6.8, motivation: 8.0, trust: 7.9 },
  { date: "2025-10-01", pressure: 6.5, motivation: 8.3, trust: 8.2, event: "Quarterly recognition" },
];

const metrics = ["pressure", "motivation", "trust"];

type MetricColorMap = {
  [key: string]: string;
};

const metricColors: MetricColorMap = {
  pressure: "#ef4444",
  motivation: "#3b82f6",
  trust: "#10b981",
};

// ---------------------------
// Helper Functions
// ---------------------------
const calculateCorrelation = (a: string, b: string) => {
  // Fake correlation for demo
  const score = Math.random() * 0.6 + 0.4;
  return Number(score.toFixed(2));
};

// ---------------------------
// Component
// ---------------------------
export default function LongitudinalViewExtended() {
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>(metrics);
  const [showEvents, setShowEvents] = useState(true);
  const [compareTeam, setCompareTeam] = useState(false);
  const [timeRange, setTimeRange] = useState("6m");

  const toggleMetric = (metric: string) => {
    setSelectedMetrics((prev) =>
      prev.includes(metric)
        ? prev.filter((m) => m !== metric)
        : [...prev, metric]
    );
  };

  const insights = useMemo(() => {
    // Example AI-style insight generation
    return [
      "Motivation has risen steadily (+12%) since July, coinciding with reduced project pressure.",
      "Pressure and trust levels show inverse correlation (-0.68), suggesting adaptive response.",
      "Team comparison shows individual trust metrics are 9% above team average.",
    ];
  }, [timeRange, compareTeam, selectedMetrics]);

  return (
    <Card className="w-full border rounded-2xl shadow-sm bg-white p-4">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Longitudinal View
        </CardTitle>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-4">
          <Select onValueChange={setTimeRange} defaultValue="6m">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">Last Month</SelectItem>
              <SelectItem value="3m">3 Months</SelectItem>
              <SelectItem value="6m">6 Months</SelectItem>
              <SelectItem value="12m">1 Year</SelectItem>
            </SelectContent>
          </Select>

          {metrics.map((metric) => (
            <div key={metric} className="flex items-center space-x-2">
              <Switch
                id={metric}
                checked={selectedMetrics.includes(metric)}
                onCheckedChange={() => toggleMetric(metric)}
              />
              <Label htmlFor={metric} className="capitalize text-sm">
                {metric}
              </Label>
            </div>
          ))}

          <div className="flex items-center space-x-2">
            <Switch
              id="showEvents"
              checked={showEvents}
              onCheckedChange={() => setShowEvents(!showEvents)}
            />
            <Label htmlFor="showEvents" className="text-sm">
              Show Events
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="compareTeam"
              checked={compareTeam}
              onCheckedChange={() => setCompareTeam(!compareTeam)}
            />
            <Label htmlFor="compareTeam" className="text-sm">
              Compare with Team
            </Label>
          </div>
        </div>
      </CardHeader>

      {/* Chart */}
      <CardContent className="pt-2">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 10]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
            />
            {selectedMetrics.map((metric) => (
              <Line
                key={metric}
                type="monotone"
                dataKey={metric}
                stroke={metricColors[metric]}
                strokeWidth={2}
                dot={false}
              />
            ))}
            {compareTeam && (
              <Line
                type="monotone"
                dataKey="teamAvg"
                stroke="#9ca3af"
                strokeWidth={1.5}
                strokeDasharray="4 4"
                dot={false}
              />
            )}
          </LineChart>
        </ResponsiveContainer>

        {/* Events */}
        {showEvents && (
          <div className="mt-6 flex flex-col gap-3">
            {sampleData
              .filter((d) => d.event)
              .map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-3 border-l-4 border-gray-200 pl-3"
                >
                  <CalendarDays className="w-4 h-4 mt-1 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">{d.event}</p>
                    <p className="text-xs text-gray-500">{d.date}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        )}

        {/* Correlation Badges */}
        <div className="mt-6 flex flex-wrap gap-2">
          {selectedMetrics.length > 1 &&
            selectedMetrics.map((a, i) =>
              selectedMetrics.slice(i + 1).map((b) => {
                const corr = calculateCorrelation(a, b);
                return (
                  <div
                    key={`${a}-${b}`}
                    className={clsx(
                      "flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium",
                      corr > 0.7
                        ? "bg-green-100 text-green-700"
                        : corr < 0.5
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-gray-600"
                    )}
                  >
                    <TrendingUp className="w-3 h-3" />
                    {a} / {b}: {corr}
                  </div>
                );
              })
            )}
        </div>

        {/* AI Insights Summary */}
        <div className="mt-6 border-t pt-4">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5 text-gray-600" />
            <h3 className="text-sm font-semibold text-gray-700">AI Insights</h3>
          </div>
          <ul className="space-y-2">
            {insights.map((text, idx) => (
              <li
                key={idx}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="text-gray-400">•</span> {text}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
