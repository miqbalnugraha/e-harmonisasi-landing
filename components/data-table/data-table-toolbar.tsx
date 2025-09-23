"use client";

import type { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableFacetedFilter } from "@/components/data-table/data-table-faceted-filter";
import { DataTableViewOptions } from "@/components/data-table/data-table-view-options";
import { X } from "lucide-react";
import { wajib_dibuka_options, kategori_options } from "./filters";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter Judul Dokumen..."
          value={(table.getColumn("JUDUL")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("JUDUL")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/* {table.getColumn("JUDUL_KATEGORI") && (
          <DataTableFacetedFilter
            column={table.getColumn("JUDUL_KATEGORI")}
            title="Kategori"
            options={kategori_options}
          />
        )}
        {table.getColumn("IS_WAJIB_OPEN") && (
          <DataTableFacetedFilter
            column={table.getColumn("IS_WAJIB_OPEN")}
            title="Wajib Dibuka"
            options={wajib_dibuka_options}
          />
        )} */}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      {/* <DataTableViewOptions table={table} /> */}
    </div>
  );
}
