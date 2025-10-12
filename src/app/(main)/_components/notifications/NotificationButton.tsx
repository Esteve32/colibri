"use client";

import { useState } from "react";
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import NotificationList from "./NotificationList";
import ActivityList from "./ActivityList";
import { activities } from "../../_data/activities";

export default function NotificationButton() {
  const [open, setOpen] = useState(false);

  // Example data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      user: { name: "Alice", avatar: "/avatars/alice.jpg" },
      message: "commented on your post",
      time: new Date(Date.now() - 2 * 60 * 1000), // 2 mins ago
      read: false,
    },
    {
      id: 2,
      user: { name: "Bob", avatar: "/avatars/bob.jpg" },
      message: "invited you to a team",
      time: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
      read: true,
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div>
      <button
        className="relative p-2 rounded-full hover:bg-muted transition"
        onClick={() => setOpen(true)}
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <Badge className="absolute -top-1 -right-1 bg-muted text-foreground text-xs px-1.5 py-0.5 rounded-full">
            {unreadCount}
          </Badge>
        )}
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-[480px]">
          <SheetHeader>
            <div className="flex justify-between items-center">
              <SheetTitle className="text-lg font-semibold flex items-center gap-2">
                Notifications
                {unreadCount > 0 && (
                  <Badge className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                    {unreadCount} new
                  </Badge>
                )}
              </SheetTitle>
              <button
                className="text-sm text-muted-foreground hover:text-foreground"
                onClick={() =>
                  setNotifications((prev) =>
                    prev.map((n) => ({ ...n, read: true }))
                  )
                }
              >
                Mark all as read
              </button>
            </div>
          </SheetHeader>

          <div className="mt-4 space-y-4">
            <NotificationList notifications={notifications} />
            <div className="border-t pt-4">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                Recent Activity
              </h3>
              <ActivityList activities={activities} />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
