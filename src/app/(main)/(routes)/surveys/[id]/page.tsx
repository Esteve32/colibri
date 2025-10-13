"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { ArrowLeft } from "lucide-react";
import { surveys } from "@/app/(main)/_data/surveys";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import NotificationButton from "@/app/(main)/_components/notifications/NotificationButton";
import { UserButton } from "@clerk/nextjs";

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
      <header className="flex justify-between h-16 shrink-0 items-center gap-2 border-b border-b-border">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  <BreadcrumbPage>Data</BreadcrumbPage>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/surveys">
                  <BreadcrumbPage>Surveys</BreadcrumbPage>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  <BreadcrumbPage>{survey.title}</BreadcrumbPage>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>

          </Breadcrumb>
        </div>
        <div className="flex items-center gap-8 pr-6">
          <NotificationButton />
          <UserButton />
        </div>
      </header>
      <div className="bg-gray-50 py-10 px-6">
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
