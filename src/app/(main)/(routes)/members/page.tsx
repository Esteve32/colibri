import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { users } from "../../_data/users";
import Link from "next/link";

export default async function MembersPage() {

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
                <div className="w-full max-w-screen-2xl mx-auto flex flex-col space-y-12">
                    <h1 className="text-3xl font-semibold text-foreground mb-6">Individuals</h1>
                    <div className="flex items-center gap-1">
                        {
                            users.map((user, idx) => (
                                <div key={idx}>
                                    <Link href="/members/member">{user.fullName}</Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>
        </SidebarInset>
    )

}
