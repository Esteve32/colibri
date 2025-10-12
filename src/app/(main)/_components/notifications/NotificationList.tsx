import NotificationItem from "./NotificationItem";
import type { Notification } from "@/app/(main)/_data/notifications"

interface NotificationListProps {
  notifications: Notification[]; // 👈 an array of Notification objects
}

export default function NotificationList({ notifications }: NotificationListProps) {
  if (!notifications || notifications.length === 0) {
    return (
      <div className="text-sm text-muted-foreground text-center py-4">
        No notifications yet
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {notifications.map((n) => (
        <NotificationItem key={n.id} notification={n} />
      ))}
    </div>
  );
}
