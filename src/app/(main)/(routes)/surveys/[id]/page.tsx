"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { ArrowLeft } from "lucide-react";
import { surveys } from "@/app/(main)/_data/surveys";
import { SidebarInset } from "@/components/ui/sidebar";

export default function SurveyResultPage() {
  const params = useParams();
  const survey = surveys.find((s) => s.id === params?.id);

  if (!survey) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-700">
        <p className="text-lg mb-4">Survey not found.</p>
        <Link href="/surveys">
          <Button variant="outline">Back to Surveys</Button>
        </Link>
      </div>
    );
  }

  return (
    <SidebarInset>
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/surveys">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold text-gray-800">{survey.title}</h1>
        </div>

        <Card className="border border-gray-200 mb-6">
          <CardHeader>
            <CardDescription className="text-gray-600">{survey.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              Group: <span className="font-medium text-gray-700">{survey.group}</span>
            </p>
            <p className="text-sm text-gray-500">
              Completion rate:{" "}
              <span className="font-medium text-gray-700">{survey.completionRate}%</span>
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {survey.questions.map((q) => (
            <Card key={q.id} className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-base font-semibold">{q.question}</CardTitle>
              </CardHeader>
              <CardContent>
                {q.answers ? (
                  <div className="h-60">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={q.answers}>
                        <XAxis dataKey="option" tick={{ fontSize: 12 }} />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Bar dataKey="count" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {q.options.map((option, i) => (
                      <li key={i}>{option}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </SidebarInset>
  );
}
