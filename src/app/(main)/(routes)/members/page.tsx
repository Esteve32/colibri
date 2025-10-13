"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { UserButton, useUser } from "@clerk/nextjs";
import { Calendar, Circle, CloudDownload, Filter, MoreVertical, Sparkles, TrendingDown, TrendingUp } from "lucide-react";
import NotificationButton from "../../_components/notifications/NotificationButton";
import { useCurrentUser } from "@/context/UserContext";
import { Badge } from "@/components/ui/badge";

export default function Members() {

  const { isSignedIn, user } = useUser();
  const { currentUser } = useCurrentUser();

  if (!isSignedIn) return <p>Loading...</p>;

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
                  <BreadcrumbPage>Home</BreadcrumbPage>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator/>
               <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  <BreadcrumbPage>Individuals</BreadcrumbPage>
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
      <div className="bg-accent min-h-dvh">
        <div className="w-full flex flex-1 flex-col gap-8 p-5 lg:p-10 max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <Avatar className="size-16 border-2 border-white shadow-lg">
                <AvatarImage src={currentUser.avatar} />
              </Avatar>
              <div className="w-full">
                <h2 className="font-semibold text-3xl mb-0.5">Welcome, {currentUser.fullName} <Badge variant="outline">{currentUser.role}</Badge></h2>
                <p className="text-muted-foreground">Here is the overview of your company&apos;s culture</p>
              </div>
              <div>

              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline"><CloudDownload /> Export</Button>
              <Button><Sparkles /> View insights</Button>
            </div>
          </div>
          <Separator />
          <div className="flex justify-between items-center">
            <ToggleGroup type="single" variant="outline" className="bg-card">
              <ToggleGroupItem value="a" className="w-fit px-4">12 months</ToggleGroupItem>
              <ToggleGroupItem value="b" className="w-fit px-4">30 days</ToggleGroupItem>
              <ToggleGroupItem value="c" className="w-fit px-4">7 days</ToggleGroupItem>
            </ToggleGroup>
            <div className="flex items-center gap-2">
              <Button variant="outline"><Calendar className="size-4" /> Select dates</Button>
              <Button variant="outline"><Filter className="size-4" /> Filter</Button>
            </div>
          </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="font-semibold text-sm">
                <div className="flex justify-between items-center">
                  <span>CHI</span>
                  <MoreVertical className="text-muted-foreground size-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-4xl font-semibold mb-2">78.2%</h3>
                    <div className="text-sm flex items-center gap-2 text-muted-foreground font-medium"><span className="text-green-800 flex gap-1 items-center font-semibold"><TrendingUp className="size-4" /> 12%</span> vs last month</div>
                  </div>
                  {/* <CHIAreaChart /> */}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="font-semibold text-sm">
                <div className="flex justify-between items-center">
                  <span>Stress level</span>
                  <MoreVertical className="text-muted-foreground size-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-4xl font-semibold mb-2">26%</h3>
                    <div className="text-sm flex items-center gap-2 text-muted-foreground font-medium"><span className="text-green-800 flex gap-1 items-center font-semibold"><TrendingDown className="size-4" /> -5%</span> vs last month</div>
                  </div>
                  {/* <StressAreaChart /> */}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="font-semibold text-sm">
                <div className="flex justify-between items-center">
                  <span>Performance</span>
                  <MoreVertical className="text-muted-foreground size-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-4xl font-semibold mb-2">65.6%</h3>
                    <div className="text-sm flex items-center gap-2 text-muted-foreground font-medium"><span className="text-green-800 flex gap-1 items-center font-semibold"><TrendingUp className="size-4" /> 8%</span> vs last month</div>
                  </div>
                  {/* <CHIAreaChart /> */}
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <h2 className="font-semibold">Branches</h2>
              <Button variant="outline">View report</Button>
            </CardHeader>
            <Separator />
            <CardContent>
              <div className="flex gap-10">
                <div className="w-full relative">
                  <div>
                    <div><Circle className="fill-primary stroke-0 size-6 border-8 border-primary/20 rounded-full absolute top-[40%] left-[26%]" /></div>
                    <div><Circle className="fill-primary stroke-0 size-6 border-8 border-primary/20 rounded-full absolute top-[32%] left-[51%]" /></div>
                    <div><Circle className="fill-primary stroke-0 size-6 border-8 border-primary/20 rounded-full absolute top-[28%] left-[51.2%]" /></div>
                  </div>
                  <img src="/assets/map.svg" className="w-full" />
                </div>
                <div className="space-y-6 w-full basis-1/3">
                  <div>
                    <p className="text-sm font-medium mb-2">Overall CHI <span className="text-muted-foreground text-xs">(Cultural Health Index)</span></p>
                    <p className="text-4xl font-semibold">78.2%</p>
                  </div>
                  <Separator />
                  <div className="text-sm">
                    <div className="flex gap-4">
                      <img src="/assets/flag/us.svg" />
                      <div className="w-full font-medium">
                        United States
                      </div>
                      <div>
                        82.6%
                      </div>
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="flex gap-4">
                      <img src="/assets/flag/de.svg" className="size-6 rounded-full object-cover" />
                      <div className="w-full font-medium">
                        Germany
                      </div>
                      <div>
                        80.1%
                      </div>
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="flex gap-4">
                      <img src="/assets/flag/ch.svg" className="size-6 rounded-full object-cover" />
                      <div className="w-full font-medium">
                        Switzerland
                      </div>
                      <div>
                        78.6%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <h2 className="font-semibold">Branch cultural performance</h2>
              <Button variant="outline">View report</Button>
            </CardHeader>
            <Separator />
            <CardContent>
              <div className="grid grid-cols-4 gap-6">
                <div className="grid-cols-3">
                  {/* <ChartBarStacked /> */}
                </div>
                {/* <ChartPieDonut /> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SidebarInset>
  )
}
