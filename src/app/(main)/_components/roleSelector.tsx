"use client";

import { useCurrentUser } from "@/context/UserContext";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { users } from "../_data/users";

export default function RoleSelector() {
  const { currentUser, setCurrentUser } = useCurrentUser();

  return (
    <Select
      value={currentUser.id}
      onValueChange={(value) => {
        const selectedUser = users.find((u) => u.id === value);
        if (selectedUser) setCurrentUser(selectedUser);
      }}
    >
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Select user" />
      </SelectTrigger>
      <SelectContent>
        {users.map((u) => (
          <SelectItem key={u.id} value={u.id}>
            {u.fullName} — {u.role}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
