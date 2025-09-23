import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <div className="grid">
        <div className="mb-6 w-full space-y-10 overflow-x-auto rounded-md border p-4 sm:max-w-full lg:max-w-full">
          <div className="flex items-start space-x-52">
            <Skeleton className="h-3 w-12" /> <Skeleton className="h-3 w-12" />{" "}
            <Skeleton className="h-3 w-12" />
          </div>
          <div className="grid gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex items-start space-x-16">
                <div className="grid gap-2">
                  <Skeleton className="h-2 w-48" />{" "}
                  <Skeleton className="h-2 w-32" />{" "}
                </div>
                <div className="grid gap-2">
                  <Skeleton className="h-2 w-48" />{" "}
                  <Skeleton className="h-2 w-48" />{" "}
                  <Skeleton className="h-2 w-32" />{" "}
                </div>
                <Skeleton className="h-2 w-48" />
                <div className="grid gap-2">
                  <Skeleton className="h-2 w-48" />{" "}
                  <Skeleton className="h-2 w-48" />{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
