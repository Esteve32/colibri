import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Notification } from "@/app/(main)/_data/notifications"

function timeAgo(date: Date) {
  const diff = (Date.now() - date.getTime()) / 1000;
  if (diff < 60) return "now";
  if (diff < 3600) return `${Math.floor(diff / 60)} mins ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  return `${Math.floor(diff / 86400)} days ago`;
}

interface NotificationItemProps {
  notification: Notification;
}

export default function NotificationItem({ notification }: NotificationItemProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between p-2 rounded-lg hover:bg-muted transition",
        !notification.read && "bg-muted/50"
      )}
    >
      <div className="flex items-center gap-3">
        <Image
          src={notification.user.avatar}
          alt={notification.user.name}
          width={36}
          height={36}
          className="rounded-full"
        />
        <div>
          <p className="text-sm">
            <span className="font-medium">{notification.user.name}</span>{" "}
            {notification.message}
          </p>
          <p className="text-xs text-muted-foreground">
            {timeAgo(notification.time)}
          </p>
        </div>
      </div>
      <div
        className={cn(
          "w-2 h-2 rounded-full",
          notification.read ? "bg-transparent" : "bg-blue-500"
        )}
      />
    </div>
  );
}
