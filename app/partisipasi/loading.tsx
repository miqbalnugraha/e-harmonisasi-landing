import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Heart } from "lucide-react";

export default function DataTableSkeleton() {
  return (
    <div className="w-full space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-4 py-8">
        {/* Icon */}
        <div className="flex justify-center">
          <Heart className="h-12 w-12 text-muted-foreground/20" />
        </div>

        {/* Title */}
        <Skeleton className="h-10 w-64 mx-auto" />

        {/* Description */}
        <div className="space-y-2 max-w-3xl mx-auto">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6 mx-auto" />
        </div>
      </div>

      {/* Filters Section */}
      <div className="space-y-4">
        {/* Top Row Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Skeleton className="h-10 w-full sm:w-64" />
          <Skeleton className="h-10 w-full sm:w-40" />
        </div>

        {/* Bottom Row Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Skeleton className="h-10 w-full sm:flex-1" />
          <Skeleton className="h-10 w-full sm:flex-1" />
          <Skeleton className="h-10 w-full sm:w-32" />
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="bg-muted/50 border-b">
          <div className="grid grid-cols-7 gap-4 p-4">
            <Skeleton className="h-4 col-span-2" />
            <Skeleton className="h-4" />
            <Skeleton className="h-4" />
            <Skeleton className="h-4" />
            <Skeleton className="h-4" />
            <Skeleton className="h-4" />
          </div>
        </div>

        {/* Table Rows */}
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="border-b last:border-b-0">
            <div className="grid grid-cols-7 gap-4 p-4 items-center">
              <Skeleton className="h-4 col-span-2" />
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
              <Skeleton className="h-4" />
              <Skeleton className="h-6 w-16" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
        {/* Items count */}
        <Skeleton className="h-4 w-32" />

        {/* Pagination controls */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">per page</span>
          <Skeleton className="h-10 w-16" />
          <span className="text-sm text-muted-foreground mx-4">
            Page 1 of 0
          </span>

          {/* Navigation buttons */}
          <div className="flex gap-1">
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Compact version for smaller screens
export function CompactTableSkeleton() {
  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="text-center space-y-3 py-6">
        <div className="flex justify-center">
          <Heart className="h-10 w-10 text-muted-foreground/20" />
        </div>
        <Skeleton className="h-8 w-48 mx-auto" />
        <Skeleton className="h-3 w-64 mx-auto" />
      </div>

      {/* Filters */}
      <div className="space-y-3">
        <Skeleton className="h-10 w-full" />
        <div className="flex gap-2">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 flex-1" />
        </div>
      </div>

      {/* Card-style rows for mobile */}
      <div className="space-y-3">
        {[1, 2, 3].map((index) => (
          <div key={index} className="border rounded-lg p-4 space-y-2">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
            <div className="flex gap-2 pt-2">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-24" />
        <div className="flex gap-1">
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
        </div>
      </div>
    </div>
  );
}
