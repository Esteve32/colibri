"use client";

import { cn } from "@/lib/utils";
import { useConvexAuth } from "convex/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Spinner } from "@/components/spinner";
import { mainRoutes } from "../_data/routes";
import { usePathname } from "next/navigation";
import NotificationButton from "@/app/(main)/_components/notifications/NotificationButton";

export const NavBar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6 border-b shadow-sm",
      )}
    >
      <a href="/" className="font-medium text-xl flex gap-2"><img src="/assets/colibri.svg" /> Colibri</a>
      <div className="flex gap-2 items-center ml-10">
        {
          mainRoutes.map((route, idx) => (
            <Button variant={pathname == route.url ? "default" : "ghost"} key={idx}><Link href={route.url} className="font-medium hover:text-primary">{route.title}</Link></Button>
          ))
        }
      </div>

      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost">
                Log in
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button>Sign Up</Button>
            </SignUpButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
      </div>
    </div>
  );
};
