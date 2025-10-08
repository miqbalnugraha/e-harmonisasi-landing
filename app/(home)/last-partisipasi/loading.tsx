import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Loading() {
  return (
    <>
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex gap-2 md:gap-4">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className={`flex-1 ${index === 2 ? "hidden lg:block" : ""} ${
                index === 3 ? "hidden md:block" : ""
              }`}
            >
              <Card className="h-full flex flex-col border">
                {/* Accent bar skeleton */}
                <Skeleton className="h-1 w-full rounded-none" />

                <CardContent className="pt-5 pb-4 flex-grow space-y-3">
                  {/* Badge skeleton */}
                  <Skeleton className="h-5 w-32 rounded-full" />

                  {/* Title skeleton */}
                  <div className="space-y-2 min-h-[3.6rem]">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>

                  {/* Quote section skeleton */}
                  <div className="relative pl-3 border-l-2 border-muted">
                    <div className="absolute -left-[9px] -top-0.5 bg-background dark:bg-card">
                      <Skeleton className="h-4 w-4 rounded" />
                    </div>
                    <div className="space-y-1.5">
                      <Skeleton className="h-3 w-full" />
                      <Skeleton className="h-3 w-4/5" />
                    </div>
                  </div>
                </CardContent>

                {/* Footer skeleton */}
                <CardHeader className="pt-3 pb-4 mt-auto border-t border-border/50">
                  <div className="flex items-center gap-2.5">
                    <Skeleton className="h-9 w-9 rounded-full" />

                    <div className="flex-1 space-y-1.5">
                      <Skeleton className="h-3.5 w-24" />
                      <Skeleton className="h-3 w-32" />
                    </div>

                    <Skeleton className="h-3 w-16" />
                  </div>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
