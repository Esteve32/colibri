import type { Activity } from "@/app/(main)/_data/activities"; // 👈 import the type
import { timeAgo } from "@/lib/utils";

interface ActivityListProps {
  activities: Activity[];
}

export default function ActivityList({ activities }: ActivityListProps) {
  if (!activities || activities.length === 0) {
    return (
      <div className="text-sm text-muted-foreground text-center py-4">
        No recent activity
      </div>
    );
  }

  return (
    <ul className="space-y-1 text-sm">
      {activities.map((a) => (
        <li
          key={a.id}
          className="flex items-center justify-between gap-2 p-1 rounded hover:bg-muted/40 transition"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-300 rounded-full" />
            <span>{a.description}</span>
          </div>
          <span className="text-xs text-muted-foreground">{timeAgo(a.time)}</span>
        </li>
      ))}
    </ul>
  );
}
