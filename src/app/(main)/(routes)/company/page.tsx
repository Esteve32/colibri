"use client";

import React from "react";
import { statusColors, getStatusLevel, getStatusLabel } from "@/components/statusColors"
import { riskCategories } from "../../_data/riskCategories";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import NotificationButton from "../../_components/notifications/NotificationButton";
import { UserButton } from "@clerk/nextjs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function RiskCategoriesPage() {

    const renderCategoryList = () => {
        return riskCategories.map((category) => {
            const level = getStatusLevel(category.status!);
            const color = statusColors[level];

            return (
                <Card
                    key={category.id}                    
                >
                    <CardHeader className="border-b border-b-border">
                        <h2 className="text-2xl font-semibold text- flex items-center gap-2">
                            {category.name}
                            <span className={`text-sm px-2 py-1 rounded-full ${color.bg} ${color.text}`}>
                                {getStatusLabel(category.status!)} ({category.status}%)
                            </span>
                        </h2>
                        <p className="text-muted-foreground">{category.description}</p>
                    </CardHeader>
                    <CardContent>


                        {category.subcategories && (
                            <ul className="divide-y divide-border">
                                {category.subcategories.map((sub) => {
                                    const subLevel = sub.status ? getStatusLevel(sub.status) : "middle";
                                    const subColor = statusColors[subLevel];

                                    return (
                                        <li key={sub.id} className="py-4">
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium text-foreground">{sub.name}</span>
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

                                            {/* Render sub-items if they exist */}
                                            {sub.items && (
                                                <ul className="ml-4 mt-2 space-y-1">
                                                    {sub.items.map((item) => {
                                                        const itemLevel = item.status ? getStatusLevel(item.status) : "middle";
                                                        const itemColor = statusColors[itemLevel];

                                                        return (
                                                            <li
                                                                key={item.id}
                                                                className="flex items-center justify-between"
                                                            >
                                                                <span className="text-muted-foreground">{item.name}</span>
                                                                {item.status !== undefined && (
                                                                    <span
                                                                        className={`text-xs px-2 py-0.5 rounded ${itemColor.bg} ${itemColor.text}`}
                                                                    >
                                                                        {getStatusLabel(item.status)} ({item.status}%)
                                                                    </span>
                                                                )}
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </CardContent>
                </Card>
            );
        });
    };

    return (
        <SidebarInset>
            <header className="h-16 shrink-0 border-b border-b-border fixed top-0 w-full bg-card">
                <div className="relative flex justify-between items-center gap-2 ">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="/">
                                        <BreadcrumbPage>Culture Map</BreadcrumbPage>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="/">
                                        <BreadcrumbPage>Company</BreadcrumbPage>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <div className="flex items-center gap-8 pr-6">
                        <NotificationButton />
                        <UserButton />
                    </div>
                </div>
            </header>
            <div className="bg-accent min-h-dvh p-8">
                <div className="max-w-screen-xl mx-auto">
                    <h1 className="text-2xl font-semibold text-foreground">
                        Culture Map
                    </h1>
                    <div className="flex flex-col space-y-8 divide-y divide-border">
                        {renderCategoryList()}
                    </div>
                </div>
            </div>
        </SidebarInset>

    );
}
