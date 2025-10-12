"use client";

import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { riskCategories } from "@/app/(main)/_data/riskCategories";
import { getStatusLabel, getStatusLevel, statusColors } from "@/components/statusColors";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Mock team data
const teamMembers = [
    { id: 1, name: "Alice Kim", role: "Project Manager", performance: 72, avatar: "ava_bentley.jpg" },
    { id: 2, name: "John Rivera", role: "Operations Lead", performance: 68, avatar: "blake_riley.jpg" },
    { id: 3, name: "Maria Chen", role: "Legal Advisor", performance: 80, avatar: "ashton_blackwell.jpg" },
    { id: 4, name: "Tomás Alvarez", role: "Workflow Engineer", performance: 60, avatar: "byron_robertson.jpg" },
    { id: 5, name: "Sophia Grant", role: "Process Analyst", performance: 74, avatar: "courtney_turner.jpg" },
];

export default function TeamPage() {
    // Get the Operational category from risk data
    const operationalCategory = riskCategories.find(
        (cat) => cat.name === "Operational"
    );

    if (!operationalCategory) {
        return (
            <main className="max-w-4xl mx-auto p-6">
                <p className="text-gray-600">No Operational data found.</p>
            </main>
        );
    }

    const categoryLevel = getStatusLevel(operationalCategory.status!);
    const categoryColor = statusColors[categoryLevel];

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
                                <BreadcrumbLink href="/settings">
                                    Settings
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Individuals</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            <main className="bg-zinc-50 min-h-dvh p-10">
                <section>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Team Overview</h1>

                    {/* Operational Summary */}
                    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            {operationalCategory.name}
                            <span
                                className={`text-sm px-2 py-1 rounded-full ${categoryColor.bg} ${categoryColor.text}`}
                            >
                                {getStatusLabel(operationalCategory.status!)} (
                                {operationalCategory.status}%)
                            </span>
                        </h2>
                        <p className="text-gray-500 mb-4">{operationalCategory.description}</p>

                        {/* Subcategories */}
                        <ul className="ml-4 border-l border-gray-200 pl-4 space-y-2">
                            {operationalCategory.subcategories?.map((sub) => {
                                const subLevel = getStatusLevel(sub.status!);
                                const subColor = statusColors[subLevel];
                                return (
                                    <li key={sub.id} className="flex justify-between items-center">
                                        <span className="font-medium text-gray-700">{sub.name}</span>
                                        <span
                                            className={`text-xs px-2 py-1 rounded ${subColor.bg} ${subColor.text}`}
                                        >
                                            {getStatusLabel(sub.status!)} ({sub.status}%)
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </section>

                {/* Team Members Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Design Team</CardTitle>
                        <CardDescription>Here is your team's perfomance</CardDescription>
                    </CardHeader>
                    <CardContent>

                        <Table>
                            <TableCaption>Overview of team performance and roles.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[240px]">Name</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead className="text-right">Performance</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {teamMembers.map((member) => {
                                    const perfLevel = getStatusLevel(member.performance);
                                    const perfColor = statusColors[perfLevel];
                                    return (
                                        <TableRow key={member.id}>
                                            <TableCell className="flex items-center gap-4"><img className="size-10 rounded-full" src={`/assets/avatars/samples/${member.avatar}`}/> <div><p className="font-medium"><a href="/members/member">{member.name}</a></p><p className="text-sm text-muted-foreground">{member.role}</p></div></TableCell>
                                            <TableCell className="text-secondary-foreground">{member.role}</TableCell>
                                            <TableCell className="text-right">
                                                <span
                                                    className={`text-xs px-2 py-1 rounded ${perfColor.bg} ${perfColor.text}`}
                                                >
                                                    {getStatusLabel(member.performance)} (
                                                    {member.performance}%)
                                                </span>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

            </main>
        </SidebarInset>

    );
}
