// lib/data/notifications.ts
export interface User {
  name: string;
  avatar: string;
}

export interface Notification {
  id: number;
  user: User;
  message: string;
  time: Date;
  read: boolean;
}

export const notifications: Notification[] = [
  {
    id: 1,
    user: { name: "Alice Johnson", avatar: "/assets/avatars/samples/adriana_o_sullivan.jpg" },
    message: "commented on your post",
    time: new Date(Date.now() - 2 * 60 * 1000), // 2 mins ago
    read: false,
  },
  {
    id: 2,
    user: { name: "Bob Smith", avatar: "/assets/avatars/samples/ashwin_santiago.jpg" },
    message: "invited you to join the Design Team",
    time: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
    read: true,
  },
  {
    id: 3,
    user: { name: "Clara Nguyen", avatar: "/assets/avatars/samples/brianna_ware.jpg" },
    message: "added a new file to your project",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    read: false,
  },
  {
    id: 4,
    user: { name: "Daniel Lee", avatar: "/assets/avatars/samples/ashwin_santiago.jpg" },
    message: "mentioned you in a thread",
    time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    read: true,
  },
];
