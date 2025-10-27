import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Sparkles } from "lucide-react";
export default function Loading() {
  return (
    <div className="flex gap-4 md:gap-6 overflow-x-auto pb-2">
      {[1, 2, 3, 4].map((index) => (
        <div key={index} className="min-w-[280px]">
          <Card className="bg-muted/20 dark:bg-card hover:bg-background transition-all delay-75">
            <CardHeader>
              <div className="flex justify-between items-start">
                {/* Icon skeleton */}
                <div className="mb-6">
                  <Sparkles size={32} className="text-muted-foreground/20" />
                </div>

                {/* Number skeleton */}
                <Skeleton className="h-12 w-16" />
              </div>

              {/* Title skeleton */}
              <Skeleton className="h-6 w-32 mb-2" />
            </CardHeader>

            <CardContent>
              {/* Description skeleton */}
              <Skeleton className="h-4 w-48" />
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
