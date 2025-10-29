"use client";
import React from "react";
import { useState, useRef } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar";
import { DataTablePagination } from "@/components/data-table/data-table-pagination";
import { Rancangan } from "@/types/rancangan";
import DataNotFound from "@/components/my/data-not-found";
import RancanganForm from "./comps/partisipasi-form";
import { AktivitasMasyarakatDialog } from "./comps/partisipasi-activity";
import { Button } from "@/components/ui/button";
import { BarChart2, Download, Lightbulb, PenBox } from "lucide-react";
import Loading from "./loading";
import Spinner from "@/components/my/spinner";
import { toast } from "sonner";
import { useFileDownload } from "@/lib/useFileDownload";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const TableRancangan = ({ items, loadingList }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenAlertDialog, setIsOpenAlertDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [message, setMessage] = useState("");
  const [dataAktifitas, setDataAktifitas] = useState([]);
  const [defaultValuesForm, setDefaultValuesForm] = useState([]);

  const selectedRancanganIdRef = useRef<string>("");
  const [selectedRancanganId, setSelectedRancanganId] = useState<any>("");

  const handleViewForm = (status: any, id_rancangan: any) => {
    const currentStatus = status?.toLowerCase();
    if (currentStatus === "selesai" || currentStatus === "dikembalikan") {
      setIsOpenAlertDialog(true);
      return;
    }

    selectedRancanganIdRef.current = id_rancangan;
    console.log(selectedRancanganIdRef.current);
    setIsOpenForm(true);
    setIsLoadingButton(false); // ensures render order
  };

  const handleViewAktifitas = async (rancangan_id: any) => {
    try {
      setDataAktifitas([]);
      setIsLoading(true);
      setIsLoadingButton(true);
      let f = new FormData();
      f.append("rancangan_id", rancangan_id);
      const response = await fetch("/api/partisipasi/view", {
        method: "POST",
        body: f,
      });

      const res = await response.json();
      console.log(res.data);
      setIsOpen(true);
      if (response.ok) {
        setDataAktifitas(res.data);
      } else {
        setMessage(res.message);
      }
      setIsLoading(false);
      setIsLoadingButton(false);
    } catch (error: any) {
      console.log(error);
      setMessage(error.message);
      setIsLoading(false);
      setIsLoadingButton(false);
    }
  };

  const { downloadFile, isLoadingDownload } = useFileDownload();

  const handleDownloadFile = async (
    id: any,
    slug: string,
    filename: string,
  ) => {
    setIsLoadingButton(true);
    await downloadFile({
      id: id,
      slug: slug,
      filename: filename,
    });
    setIsLoadingButton(false);
  };

  const data: Rancangan[] = items;

  const columns: ColumnDef<Rancangan>[] = [
    {
      accessorKey: "nama_rancangan",
      header: () => <div className="min-w-[22rem]">Nama Rancangan</div>,
      cell: ({ row }) => {
        const val = row.original;
        return (
          <div className="min-w-[22rem] space-y-1">
            <div className="text-xs font-medium">{val.nama_rancangan}</div>
            <div className="text-[10px] text-gray-500">
              {val.jenis_rancangan}
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "tahun",
      header: () => <div className="min-w-[6rem]">Tahun</div>,
      cell: ({ row }) => (
        <div className="min-w-[6rem] text-xs">{row.getValue("tahun")}</div>
      ),
    },
    {
      accessorKey: "nama_pemrakarsa",
      header: () => <div className="min-w-[14rem]">Pemrakarsa</div>,
      cell: ({ row }) => {
        const val = row.original;
        return (
          <div className="min-w-[14rem] text-xs">
            {val.nama_pemrakarsa} ({val.jenis_pemrakarsa})
          </div>
        );
      },
    },
    {
      accessorKey: "formatted_tgl_permohonan",
      header: () => <div className="min-w-[8rem]">Tgl. Permohonan</div>,
      cell: ({ row }) => (
        <div className="min-w-[8rem] text-xs">
          {row.getValue("formatted_tgl_permohonan")}
        </div>
      ),
    },
    {
      accessorKey: "formatted_tgl_selesai",
      header: () => <div className="min-w-[8rem]">Tgl. Selesai</div>,
      cell: ({ row }) => (
        <div className="min-w-[8rem] text-xs">
          {row.getValue("formatted_tgl_selesai") ?? "-"}
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: () => <div className="min-w-[8rem]">Status</div>,
      cell: ({ row }) => {
        const val = row.original;
        return (
          <Badge
            className={`px-2 py-1 text-[10px] font-light ${
              val.status === "Permohonan"
                ? "bg-lime-600 dark:bg-lime-700"
                : val.status === "Selesai"
                  ? "bg-blue-600 dark:bg-blue-700"
                  : val.status === "Dikembalikan"
                    ? "bg-red-500 dark:bg-red-400"
                    : "bg-gray-400 dark:bg-gray-600"
            }`}
          >
            {val.status}
          </Badge>
        );
      },
    },
    {
      accessorKey: "tahapan",
      header: () => <div className="min-w-[8rem]">Tahapan</div>,
      cell: ({ row }) => (
        <div className="min-w-[8rem] text-xs">{row.getValue("tahapan")}</div>
      ),
    },
    {
      id: "actions",
      accessorKey: "combined",
      header: () => (
        <div className="sticky right-0 min-w-[3rem] text-center">Actions</div>
      ),
      cell: ({ row }) => {
        const rancangan = row.original as Rancangan;
        const status = row.getValue("status");
        const defaultValues = {
          rancangan_id: `${rancangan.id}`,
          nama: "",
          instansi: "",
          saran: "",
          mewakili: "",
        };

        return (
          <div className="flex items-center justify-center gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger
                  onClick={() =>
                    handleDownloadFile(
                      rancangan.id,
                      "draft_rancangan",
                      rancangan.file_rancangan,
                    )
                  }
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    disabled={isLoadingButton}
                  >
                    {isLoadingButton ? <Spinner /> : <Download />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Download Rancangan</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger
                  onClick={() => handleViewForm(status, rancangan.id)}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    disabled={isLoadingButton}
                  >
                    {isLoadingButton ? <Spinner /> : <Lightbulb />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Beri Masukan</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger
                  onClick={() => handleViewAktifitas(rancangan.id)}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    disabled={isLoadingButton}
                  >
                    {isLoadingButton ? (
                      <Spinner />
                    ) : (
                      <BarChart2 className="h-4 w-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent align="end">
                  <p className="text-xs">Aktifitas Masyarakat</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        );
      },
    },
  ];

  // --- state & table ---
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({
    data,
    columns,
    // onSortingChange: setSorting,
    // onColumnFiltersChange: setColumnFilters,
    // getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    // getSortedRowModel: getSortedRowModel(),
    // getFilteredRowModel: getFilteredRowModel(),
    // onColumnVisibilityChange: setColumnVisibility,
    // onRowSelectionChange: setRowSelection,
    // state: {
    //   sorting,
    //   columnFilters,
    //   columnVisibility,
    //   rowSelection,
    // },
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, // 🚀 very important
    manualSorting: true,
    manualFiltering: true,
    state: {},
  });

  return (
    <>
      <AlertDialog open={isOpenAlertDialog} onOpenChange={setIsOpenAlertDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Perhatian!</AlertDialogTitle>
            <AlertDialogDescription>
              Masukan terhadap rancangan hanya dapat diajukan ketika status
              harmonisasi berada pada tahap <b>Permohonan</b> atau <b>Proses</b>
              .
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <RancanganForm
        isOpen={isOpenForm}
        setIsOpen={setIsOpenForm}
        selectedRancanganId={selectedRancanganIdRef.current}
        onSubmit={(data) => {
          console.log("kirim data:", data);
        }}
      />

      <AktivitasMasyarakatDialog
        data={dataAktifitas}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isLoading={isLoading}
      />

      <div className="mb-6 overflow-hidden rounded-md border p-0">
        {loadingList ? (
          <Loading />
        ) : (
          <Table className="max-w-full p-0">
            <div className="max-h-[548px] w-full">
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead
                        key={header.id}
                        className={
                          header.column.id === "actions"
                            ? "bg-muted sticky right-0 top-0 z-[2] rounded-tr-md font-semibold drop-shadow-md dark:bg-slate-900"
                            : "bg-muted sticky top-0 z-[2] font-semibold dark:bg-slate-900"
                        }
                        style={{
                          width: header.getSize(),
                          position: "sticky",
                          top: 0,
                        }}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id}
                          className={
                            cell.column.id === "actions"
                              ? "sticky right-0 z-[1] bg-white drop-shadow-lg dark:bg-gray-700"
                              : "content-start"
                          }
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      <div className="flex h-full w-full items-center justify-center">
                        <DataNotFound />
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </div>
          </Table>
        )}
      </div>
    </>
  );
};

export default TableRancangan;
