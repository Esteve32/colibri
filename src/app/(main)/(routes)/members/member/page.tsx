"use client";

import React from "react";

import { statusColors, getStatusLevel, getStatusLabel } from "@/components/statusColors"
import { riskCategories } from "@/app/(main)/_data/riskCategories";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HumanChart } from "./chart";
import { Button } from "@/components/ui/button";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Command, Pencil, TrendingUp } from "lucide-react";
import { ChartRadarIndividual } from "./radarChart";
import { UserButton } from "@clerk/nextjs";
import NotificationButton from "@/app/(main)/_components/notifications/NotificationButton";
import LongitudinalView from "./longitudionalView";
import FeedbackReflections from "./feedback";
import DataSourcesConfidence from "./dataSources";
import ActionZone from "./actionZone";

export default function UserPage() {
    // Find only the "Human" category
    const humanCategory = riskCategories.find((cat) => cat.name === "Human");

    if (!humanCategory) {
        return (
            <main className="max-w-3xl mx-auto p-6">
                <p className="text-gray-600">No Human category data available.</p>
            </main>
        );
    }

    const categoryLevel = getStatusLevel(humanCategory.status!);
    const categoryColor = statusColors[categoryLevel];

    return (
        <SidebarInset>
            <header className="sticky justify-between top-0 z-50 bg-card w-full flex h-16 shrink-0 items-center gap-2 border-b border-b-border pr-4">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-4"
                    />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="/settings">
                                    Settings
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Individuals</BreadcrumbPage>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Name</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex items-center gap-6">
                    <NotificationButton />
                    <UserButton />
                </div>
            </header>
            <main className="bg-zinc-50 min-h-dvh p-10">
                <div className="w-full max-w-screen-2xl mx-auto flex flex-col space-y-12">
                    <img src="https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987" className="w-full h-[200px] rounded-2xl object-cover" />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <Avatar>
                                <AvatarImage className="size-40 rounded-full border-2 border-white shadow-2xl" src="/assets/avatars/samples/rhea_levine.jpg" />
                            </Avatar>
                            <div>
                                <div className="flex items-center gap-2"><h1 className="text-2xl font-semibold text-foreground mb-1">Amélie Laurent</h1> <Badge variant="outline"><TrendingUp /> +2.4% (Medium)</Badge></div>
                                <div className="flex items-center gap-1 text-muted-foreground">Product Designer, Team name, Org</div>
                                <div className="text-muted-foreground text-sm mt-2">Updated 3 days ago · Based on 4 meetings and 2 survey entries</div>
                                <div className="flex items-center gap-4 mt-6">
                                    <Button>Send message</Button>
                                    <Button variant="outline"><Pencil /> Edit</Button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex">
                        <div className="space-y-2 text-muted-foreground basis-2/3">
                            <div>
                                <p>Product Designer based in Melbourne, Australia. She enjoys working on product design, design systems, but doesn't value herself enough and always needs encouragement to get going.</p>
                                <p>She worked with some of the world’s most exciting companies, including Coinbase, Stripe, and Linear. She is passionate about helping startups grow, improve their UX and customer experience, and to raise venture capital through good design.</p>
                                <p>Her work has been featured on Typewolf, Mindsparkle Magazine, Webflow, Fonts In Use, CSS Winner, httpster, Siteinspire, and Best Website Gallery.</p>
                            </div>
                        </div>
                        <div className="basis-1/3">
                            <ChartRadarIndividual />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent changes</CardTitle>
                                <CardDescription>Pressure has increased by 12% since last month, primarily during team meetings.</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Key drivers</CardTitle>
                                <CardDescription>Reduced speaking time in group calls.</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                    <div className="grid grid-cols-4 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>CHI</CardTitle>
                            </CardHeader>
                            <CardContent>85.2% <Badge>6.2%</Badge></CardContent>
                        </Card>
                        <Card>
                            <CardHeader>Perfomance</CardHeader>
                            <CardContent>72.4% <Badge>6.2%</Badge></CardContent>
                        </Card>
                        <Card>
                            <CardHeader>Motivation</CardHeader>
                            <CardContent>69.2% <Badge>6.2%</Badge></CardContent>
                        </Card>
                        <Card>
                            <CardHeader>Assigned projects</CardHeader>
                            <CardContent>9 <Badge>6.2%</Badge></CardContent>
                        </Card>
                    </div>


                    <LongitudinalView />
                    <FeedbackReflections />
                    <DataSourcesConfidence />
                    <ActionZone />

                </div>

                {/* <HumanChart />
                <Card>
                    {humanCategory.name}
                    <span className={`text-sm px-2 py-1 rounded-full ${categoryColor.bg} ${categoryColor.text}`}>
                        {getStatusLabel(humanCategory.status!)} ({humanCategory.status}%)
                    </span>
                    {humanCategory.subcategories && (

                        <ul className="ml-4 border-l border-gray-200 pl-4 space-y-3">
                            {humanCategory.subcategories.map((sub) => {
                                const subLevel = sub.status ? getStatusLevel(sub.status) : "middle";
                                const subColor = statusColors[subLevel];

                                return (

                                    <li key={sub.id} className="pb-2">
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium text-gray-700">{sub.name}</span>
                                            {sub.status !== undefined && (
                                                <span
                                                    className={`text-xs px-2 py-1 rounded ${subColor.bg} ${subColor.text}`}
                                                >
                                                    {getStatusLabel(sub.status)} ({sub.status}%)
                                                </span>
                                            )}
                                        </div>
                                        {sub.description && (
                                            <p className="text-gray-500 text-sm">{sub.description}</p>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </Card> */}
            </main>
        </SidebarInset>
    );
}
