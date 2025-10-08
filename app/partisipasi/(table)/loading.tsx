import { Skeleton } from "@/components/ui/skeleton"; // Adjust path as needed

// A component to represent a single row's skeleton
const TableRowSkeleton = () => (
  <div className="flex items-center space-x-4 border-b p-4">
    {/* Nama Rancangan (Longer block) */}
    <div className="flex-1 space-y-2">
      <Skeleton className="h-4 w-4/5" />
      <Skeleton className="h-3 w-3/5" />
    </div>

    {/* Tahun (Small block) */}
    <div className="w-[60px] flex-shrink-0">
      <Skeleton className="h-4 w-full" />
    </div>

    {/* Pemrakarsa (Medium block) */}
    <div className="w-[180px] flex-shrink-0">
      <Skeleton className="h-4 w-full" />
    </div>

    {/* Tgl. Permohonan (Date block) */}
    <div className="w-[120px] flex-shrink-0">
      <Skeleton className="h-4 w-full" />
    </div>

    {/* Tgl. Selesai (Date block) */}
    <div className="w-[120px] flex-shrink-0">
      <Skeleton className="h-4 w-full" />
    </div>

    {/* Status (Button-like block) */}
    <div className="w-[100px] flex-shrink-0">
      <Skeleton className="h-8 w-full rounded-full" />
    </div>

    {/* Actions (Icon-like blocks) */}
    <div className="flex w-[120px] justify-around flex-shrink-0">
      <Skeleton className="h-6 w-6 rounded-full" />
      <Skeleton className="h-6 w-6 rounded-full" />
      <Skeleton className="h-6 w-6 rounded-full" />
    </div>
  </div>
);

// The main table skeleton component
const Loading = ({ rows = 5 }) => {
  return (
    <div className="w-full rounded-lg border">
      {/* Table Header Skeleton (Optional, but good for completeness) */}
      <div className="flex items-center space-x-4 bg-muted p-4 font-semibold text-gray-500">
        <div className="flex-1">Nama Rancangan</div>
        <div className="w-[60px] flex-shrink-0 text-sm">Tahun</div>
        <div className="w-[180px] flex-shrink-0 text-sm">Pemrakarsa</div>
        <div className="w-[120px] flex-shrink-0 text-sm">Tgl. Permohonan</div>
        <div className="w-[120px] flex-shrink-0 text-sm">Tgl. Selesai</div>
        <div className="w-[100px] flex-shrink-0 text-sm">Status</div>
        <div className="w-[120px] flex-shrink-0 text-sm text-center">
          Actions
        </div>
      </div>

      {/* Table Body Skeleton */}
      <div className="divide-y divide-gray-200">
        {/* Render the specified number of rows */}
        {Array.from({ length: rows }).map((_, index) => (
          <TableRowSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default Loading;
