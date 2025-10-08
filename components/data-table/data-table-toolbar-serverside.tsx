"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { StatusFilter } from "@/components/data-table/data-table-faceted-filter-serverside";
import { status_options } from "./filters";

interface DataTableToolbarProps {
  valueNamaRancangan: string;
  placeholderNamaRancangan?: string;
  onChangeNamaRancangan: (e: React.ChangeEvent<HTMLInputElement>) => void;

  valueNamaPemrakarsa: string;
  placeholderNamaPemrakarsa?: string;
  onChangeNamaPemrakarsa: (e: React.ChangeEvent<HTMLInputElement>) => void;

  valueStatus?: string[]; // <-- change to string[]
  onChangeStatus?: (value: string[]) => void;

  onReset?: () => void;
}

export function DataTableToolbar({
  valueNamaRancangan,
  placeholderNamaRancangan,
  onChangeNamaRancangan,
  valueNamaPemrakarsa,
  placeholderNamaPemrakarsa,
  onChangeNamaPemrakarsa,
  valueStatus = [],
  onChangeStatus = () => {},
  onReset,
}: DataTableToolbarProps) {
  const isFiltered =
    !!valueNamaRancangan || !!valueNamaPemrakarsa || valueStatus.length > 0;

  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {/* Search by Rancangan */}
        <Input
          placeholder={placeholderNamaRancangan}
          value={valueNamaRancangan}
          onChange={onChangeNamaRancangan}
          className="h-8 w-[150px] lg:w-[250px]"
        />

        {/* Search by Pemrakarsa */}
        <Input
          placeholder={placeholderNamaPemrakarsa}
          value={valueNamaPemrakarsa}
          onChange={onChangeNamaPemrakarsa}
          className="h-8 w-[150px] lg:w-[250px]"
        />

        {/* Status filter */}
        {/* <StatusFilter
          title="Status"
          options={status_options}
          value={status}
          onChange={setStatus}
        /> */}
        <StatusFilter
          title="Status"
          options={status_options}
          value={valueStatus}
          onChange={onChangeStatus}
        />

        {/* Reset button */}
        {isFiltered && onReset && (
          <Button
            variant="ghost"
            onClick={onReset}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
