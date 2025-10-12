// components/AICompanionList.tsx
"use client";

import { aiCompanions } from "@/app/(main)/_data/agents";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function AICompanionList() {
  return (
      <div className="w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {aiCompanions.map((agent) => (
          <Card key={agent.id} className="hover:shadow-md transition-shadow rounded-2xl">
            <CardHeader>
              <CardTitle>{agent.name}</CardTitle>
              <CardDescription>{agent.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{agent.description}</p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {agent.team}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
  );
}
