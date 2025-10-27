import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Sparkles } from "lucide-react";
export default function Loading() {
  return (
    <div className="grid lg:grid-cols-2 gap-4 w-full">
      {[1, 2, 3, 4].map((index) => (
        <Card
          key={index}
          className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number p-4"
        >
          <CardHeader>
            <div className="flex justify-between">
              <div className="mb-6">
                <Sparkles size={32} className="text-muted-foreground/20" />
              </div>
              <Skeleton className="h-12 w-16" />
            </div>
          </CardHeader>
          <div className="space-y-2">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-6 w-48" />
          </div>
        </Card>
      ))}
    </div>
  );
}
