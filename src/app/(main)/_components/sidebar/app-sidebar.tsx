"use client"

import * as React from "react"
import {
  BookOpen,
  ChartArea,
  ChartNoAxesCombined,
  ClockFading,
  Folder,
  Frame,
  Map,
  Network,
  PieChart,
  Settings,
  Users,
} from "lucide-react"


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import RoleSelector from "../roleSelector"


const data = {
  navMain: [
    {
      title: "Culture Map",
      url: "#",
      icon: ChartNoAxesCombined,
      isActive: true,
      items: [
        {
          title: "Company",
          url: "/company",
        },
        {
          title: "Organizations",
          url: "/organizations",
        },
        {
          title: "Teams",
          url: "/teams",
        },
        {
          title: "Members",
          url: "/members",
        },
      ],
    },
    {
      title: "Data",
      url: "#",
      icon: Folder,
      items: [
        {
          title: "Environmental",
          url: "#",
        },
        {
          title: "Surveys",
          url: "/surveys",
        },
        {
          title: "Meeting notes",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Org Chart",
      url: "/orgChart",
      icon: Network,
    },
    {
      title: "History",
      url: "/history",
      icon: ClockFading,
    },
    {
      title: "My Reports",
      url: "/my-reports",
      icon: ChartArea,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/" className="font-medium text-xl flex gap-2"><img src="/assets/colibri.svg" /> Colibri</a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <RoleSelector />
      </SidebarFooter>
    </Sidebar>
  )
}
