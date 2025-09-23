import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <div className="grid gap-4 py-4 pl-4">
        <div>
          <div className="mb-4 flex items-start space-x-48">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-32" />
          </div>
          <hr className="-mx-4 mt-4" />
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="mt-4 flex items-start">
            <div className="grid grid-cols-3 gap-4">
              <Skeleton className="h-28 w-24" />
              <div className="col-span-2 space-y-4">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-2 w-44" />
                <Skeleton className="h-2 w-44" />
              </div>
            </div>
            <Skeleton className="h-4 w-44" />
            <Skeleton className="ml-36 h-4 w-44" />
            <Skeleton className="ml-36 h-4 w-44" />
          </div>
        ))}
      </div>
    </>
  );
}
