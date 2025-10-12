"use client";

import { User, users } from "@/app/(main)/_data/users";
import { createContext, useContext, useState, ReactNode } from "react";
// Import your mock users

interface UserContextType {
  currentUser: User;
  setCurrentUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  // Default to the first mock user
  const [currentUser, setCurrentUser] = useState<User>(users[0]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useCurrentUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useCurrentUser must be used within a UserProvider");
  return context;
}
