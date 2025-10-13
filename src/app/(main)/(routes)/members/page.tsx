import { globalOrg } from "@/app/(main)/_data/globalOrg";


import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


// Function to generate random number between min and max
function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCHI() {
    return Math.floor(Math.random() * 101) // 0-100
}

// Flatten company structure into table rows
function flattenData(data) {
    const rows = []
    let uid = 1

    data.company.branches.forEach(branch => {
        branch.organizations.forEach(org => {
            // Org Leader
            rows.push({
                id: `leader-${uid++}`,
                name: org.leader.name,
                job_title: org.leader.job_title,
                type: "Org Leader",
                team: org.name,
                country: branch.country,
                chi: getCHI(),
            })

            org.teams.forEach(team => {
                // Team Leader
                rows.push({
                    id: `leader-${uid++}`,
                    name: team.leader.name,
                    job_title: team.leader.job_title,
                    type: "Team Leader",
                    team: team.name,
                    country: branch.country,
                    chi: getCHI(),
                })

                // Team Members
                team.members.forEach(member => {
                    rows.push({
                        id: `member-${uid++}`,
                        name: member.name,
                        job_title: member.job_title,
                        type: "Member",
                        team: team.name,
                        country: branch.country,
                        chi: getCHI(),
                    })
                })
            })
        })
    })
}

export default async function MembersPage() {

    const rows = flattenData(globalOrg)

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
            <main className="bg-zinc-50 p-5">
                <div className="w-full max-w-screen-2xl mx-auto flex flex-col space-y-8">

                    <Card>
                        <CardHeader>Individuals</CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>CHI</TableHead>
                                        <TableHead>Team / Org</TableHead>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Country</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {rows.map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell>
                                                <Link href={`/users/${row.id}`}>
                                                    <div className="flex items-center gap-3">
                                                        <div>
                                                            <Avatar>
                                                                <AvatarImage src={`/assets/miki.jpeg`} className="rounded-full size-10" />
                                                            </Avatar>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium">{row.name}</p>
                                                            <p className="text-muted-foreground">{row.job_title}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </TableCell>
                                            <TableCell>{row.chi}%</TableCell>
                                            <TableCell>{row.team}</TableCell>
                                            <TableCell>{row.type}</TableCell>
                                            <TableCell>{row.country}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </SidebarInset>
    )

}
