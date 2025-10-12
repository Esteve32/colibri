"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageSquare, Quote } from "lucide-react";
import { motion } from "framer-motion";

// ---------------------------
// Mock Data
// ---------------------------
type Reflection = {
  id: string;
  author: string;
  role: "Self" | "Manager" | "Peer";
  message: string;
  date: string;
  sentiment: "positive" | "neutral" | "negative";
  avatar?: string;
};

const reflections: Reflection[] = [
  {
    id: "1",
    author: "Alex Johnson",
    role: "Self",
    message:
      "I felt more confident leading the last sprint review. My communication with the team has improved, though I still need to manage stress under tight deadlines.",
    date: "2025-10-01",
    sentiment: "positive",
  },
  {
    id: "2",
    author: "Maria Lopez",
    role: "Manager",
    message:
      "Alex shows noticeable growth in collaboration and openness to feedback. I’d encourage maintaining this momentum during high-pressure moments.",
    date: "2025-09-26",
    sentiment: "positive",
  },
  {
    id: "3",
    author: "Taylor Smith",
    role: "Peer",
    message:
      "I’ve seen Alex step up more in meetings lately. Sometimes quick to judge ideas, but improving in listening.",
    date: "2025-09-20",
    sentiment: "neutral",
  },
];

// ---------------------------
// Sentiment Styling
// ---------------------------
const sentimentStyles: Record<
  Reflection["sentiment"],
  string
> = {
  positive: "bg-green-100 text-green-700 border-green-200",
  neutral: "bg-gray-100 text-gray-700 border-gray-200",
  negative: "bg-red-100 text-red-700 border-red-200",
};

// ---------------------------
// Component
// ---------------------------
export default function FeedbackReflections() {
  return (
    <Card className="w-full border rounded-2xl shadow-sm bg-white p-4">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-gray-700" />
          Feedback & Reflections
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Reflections List */}
        <div className="flex flex-col gap-6">
          {reflections.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex gap-4"
            >
              <Avatar className="h-10 w-10">
                {item.avatar ? (
                  <AvatarImage src={item.avatar} />
                ) : (
                  <AvatarFallback>
                    {item.author[0]}
                  </AvatarFallback>
                )}
              </Avatar>

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-800">
                      {item.author}
                    </p>
                    <Badge variant="secondary" className="capitalize">
                      {item.role}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>

                <div
                  className={`rounded-lg border p-3 text-sm ${sentimentStyles[item.sentiment]}`}
                >
                  <Quote className="w-4 h-4 inline-block mr-2 opacity-60" />
                  {item.message}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Separator className="my-6" />

        {/* Add New Reflection */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">
            Add a new reflection
          </p>
          <Textarea
            placeholder="Share your latest insight, learning, or challenge..."
            className="min-h-[100px] resize-none"
          />
          <div className="flex justify-end mt-3">
            <Button variant="default">Submit</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
