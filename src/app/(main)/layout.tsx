"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { AppSidebar } from "./_components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { UserProvider } from "@/context/UserContext";

const MainLayout = ({ children }: { children: React.ReactNode }) => {

  const { isAuthenticated, isLoading } = useConvexAuth();
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) return <p>Loading...</p>;

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <UserProvider>
      <SidebarProvider>
        <AppSidebar />
        {children}
      </SidebarProvider>
    </UserProvider>

  );
};

export default MainLayout;
