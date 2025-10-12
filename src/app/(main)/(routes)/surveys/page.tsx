"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "motion/react"
import { surveys } from "../../_data/surveys";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";

export default function SurveysPage() {

    const pathname = usePathname()
        
    return (

        <SidebarInset>
            <header className="sticky top-0 z-50 bg-card w-full flex h-16 shrink-0 items-center gap-2 border-b border-b-border">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-4"
                    />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="/data">
                                    Data
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Surveys</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            <main className="bg-zinc-50 min-h-dvh p-10">
                <div className="w-full max-w-screen-2xl mx-auto flex flex-col space-y-12">
                    <h1 className="text-3xl font-semibold text-foreground mb-6">Surveys</h1>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {surveys.map((survey, i) => (
                            <motion.div
                                key={survey.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link href={`/surveys/${survey.id}`}>
                                    <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200">
                                        <CardHeader>
                                            <CardTitle className="text-lg font-semibold">{survey.title} <Badge variant="secondary">{survey.group.replace(/([A-Z])/g, " $1")}</Badge></CardTitle>
                                            <CardDescription>{survey.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="mt-3">
                                                <div className="flex justify-between text-sm text-gray-600 mb-1">
                                                    <span>Completion</span>
                                                    <span>{survey.completionRate}%</span>
                                                </div>
                                                <Progress value={survey.completionRate} className="h-2" />
                                            </div>                                            
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>


        </SidebarInset>
    );
}
