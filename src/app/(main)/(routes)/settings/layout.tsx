"use client"


import { AppSidebar } from "@/app/(main)/_components/sidebar/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import RoleSelector from "../../_components/roleSelector";
import NotificationButton from "../../_components/notifications/NotificationButton";
import { UserButton } from "@clerk/nextjs";

const settingsRoutes = [
    {
        title: "General",
        url: "/settings",
    },
    {
        title: "Agents",
        url: "/settings/agents",
    },
    {
        title: "Profile",
        url: "/settings/profile",
    },
    {
        title: "Password",
        url: "/settings/password",
    },
    {
        title: "Team",
        url: "/settings/team",
    },
    {
        title: "Plan",
        url: "/settings/plan",
    },
    {
        title: "Billing",
        url: "/settings/billing",
    },
    {
        title: "Notifications",
        url: "/settings/notifications",
    },
    {
        title: "Integrations",
        url: "/settings/integrations",
    },

]

export default function SettingsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const pathname = usePathname()
    const currentRoute = settingsRoutes.find((route) => route.url === pathname);

    return (
        <SidebarInset>
            <header className="sticky top-0 z-50 bg-card w-full flex justify-between h-16 shrink-0 items-center gap-2 border-b border-b-border">
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
                                <BreadcrumbPage>{currentRoute ? currentRoute.title : ""}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex items-center gap-4">
                    <NotificationButton/>
                    <UserButton/>
                </div>
            </header>
            <main className="bg-zinc-50 min-h-dvh p-10">
                <div className="w-full max-w-screen-2xl mx-auto flex flex-col space-y-12">
                    <h1 className="text-3xl font-semibold text-foreground mb-6">Settings</h1>
                    <div className="flex items-center gap-1">
                        {
                            settingsRoutes.map((route, idx) => (
                                <Button variant={pathname === route.url ? "secondary" : "ghost"} key={idx}>
                                    <Link href={route.url}>{route.title}</Link>
                                </Button>
                            ))
                        }
                    </div>
                    <Separator />
                    {children}
                </div>
            </main>
        </SidebarInset>

    );
}
